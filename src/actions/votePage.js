// 外部モジュール
import request from 'superagent'

// 内部モジュール
import { firebaseDb } from "./../firebase";
import constant from "./../constant";
import store from "./../store";

export const ACTIONS = {
  FETCH_PLAN_MODEL: "FETCH_PLAN_MODEL",
  CLICK_VOTE: "CLICK_VOTE",
}

// action creatore

/*
 * 画面を開いた時にDBからPlanモデルを読み込み、Lambda経由で居酒屋情報を取得する
 */
export async function fetchPlanModel(planId){

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

  return {
    type: ACTIONS.FETCH_PLAN_MODEL,
    plan: plan,
    rest: rest,
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
