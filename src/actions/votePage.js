// 外部モジュール
import request from 'superagent'

// 内部モジュール
import { firebaseDb } from "./../firebase";
import constant from "./../constant";
import store from "./../store";
import liff, { liffContext } from "./../liff";

export const ACTIONS = {
  FETCH_DB: "FETCH_DB",
  CLICK_VOTE: "CLICK_VOTE",
  UPDATE_VOTE: "UPDATE_VOTE",
}

// action creatore

/*
 * 画面を開いた時にDBからPlanモデルを読み込み、Lambda経由で居酒屋情報を取得する
 */
export async function fetchDB(planId){

  // DBからPlanモデルを取得する
  var plan;
  await firebaseDb.ref('/plan/' + planId).once('value').then( data => {
    plan = data.val()
  }).catch( err => {
    alert("店を取得できませんでした。");
  });

  // Planモデルがなかった時。つまりplanIdが間違っている.
  // アラートして画面閉じる TODO
  if(plan === null){
    alert("店を取得できませんでした。");
    liff.closeWindow();
  }

  // shop idのリスト
  var shopIdList = Object.keys(plan.shopIds).map( e => {
    return e;
  });
  console.log(shopIdList);

  // lambdaにアクセス。
  var rest;
  await request
    .post(constant.lambdaFetchGnavi)
    .send({
      shopIdList: shopIdList,
    }).then( data => {
      rest = data.body.rest;
    }).catch( err => {
    });

  // voteモデルを取得する
  //var userId = "hoge"; // TODO
  var userId = liffContext.userId;
  var vote = {};
  await firebaseDb.ref('/vote/' + planId).child(userId).once('value').then( data => {
    if(data.val()){
      vote = data.val();
    }
  }).catch( err => {
    alert("店を取得できませんでした。");
  });

  return {
    type: ACTIONS.FETCH_DB,
    plan: plan,
    planId: planId,
    rest: rest,
    vote: vote,
  }
}

/*
 * 投票ボタンを押した時
 */
export async function clickVote(shopId){
  var votePageState = store.getState().votePage;
  var vote = votePageState.vote;

  // shopIdがすでにあれば、削除し、なかったらshopIdをkeyにする。（あたいはtrue)
  if(vote[shopId]){
    delete vote[shopId];
  }else{
    vote[shopId] = true;
  }
  console.log(vote);

  return{
    type: ACTIONS.CLICK_VOTE,
    vote: vote
  }
}

/*
 * 完了ボタンを押した時。
 * DBに保存し、画面を閉じる
 */
export async function updateVoteData(){
  var votePageState = store.getState().votePage;
  var vote = votePageState.vote;

  var planId = votePageState.planId;
  console.log(planId);
  var userId = liffContext.userId;
  //var userId = "hoge";

  // loadingを表示する
  document.getElementById("overlay").style.display = "block";

  // 保存。
  await firebaseDb.ref("/vote").child(planId).child(userId).set(vote)
    .then( async data => {

      // 画面を閉じて、メッセージを送る
      await liff.sendMessages([
        {
          type:'text',
          text:'投票が完了しました。'
        },
      ]).then(() => {
        // 画面を閉じる
        liff.closeWindow();
      }).catch((err) => {
        alert("正常に作成できませんでした。");
      });

    }).catch( err => {
      console.log("error");
    });

  // loadingを非表示に
  document.getElementById("overlay").style.display = "none";

  return {
    type: ACTIONS.UPDATE_VOTE,
  }
}


