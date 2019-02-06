// 外部モジュール
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { parse } from 'query-string';
// 内部モジュール
import style from "./style/VotePage.css";
import store from "./../store";
// components
import ToVoteMessage from "./../components/ToVoteMessage";
import ToVoteIzakaya from "./../components/ToVoteIzakaya";
// actions
import {
  fetchPlanModel,
  clickVote,
} from "./../actions/votePage";

class VotePage extends Component {
  constructor(props){
    super(props);
  }

  // DOM作成が終わった後、
  componentDidMount(){
    // queryでplanId取得
    var query = parse(window.location.search);
    var planId = query.planId;
    console.log(planId);

    // planモデルと、shop情報を取得
    this.props.fetchPlanModel(planId);
  }

  render(){
    var votePageState = store.getState().votePage;
    var vote = votePageState.vote;

    var ToVoteIzakayaList = Object.keys(votePageState.rest).map( (e, i) => {
      return (
        <div className={style.toVoteIzakayaDivStyle}>
          <ToVoteIzakaya 
            shopId={votePageState.rest[e].id}
            name={votePageState.rest[e].name}
            budget={votePageState.rest[e].budget}
            imgURL={votePageState.rest[e].image_url.shop_image1}
            walk={votePageState.rest[e].access.walk}
            tag={votePageState.rest[e].code.category_name_s}
            isChecked={Object.keys(vote).indexOf(votePageState.rest[e].id) >= 0}
            clickVote={this.props.clickVote}
          />
        </div>
      )
    });

    return(
      <div>
        <div className={style.toVoteMessageDivStyle}>
          <ToVoteMessage />
        </div>

        <div className={style.toVoteIzakayaListDivStyle}>
          {ToVoteIzakayaList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //onChange: (e) => dispatch(registerMemo.onChange(e)),
    fetchPlanModel: (planId) => dispatch(fetchPlanModel(planId)),
    clickVote: (shopId) => dispatch(clickVote(shopId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VotePage)
