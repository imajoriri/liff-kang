// 外部モジュール
import React, { Component } from 'react';
import { connect } from 'react-redux'
// 内部モジュール
import style from "./style/VotePage.css";
// components
import ToVoteMessage from "./../components/ToVoteMessage";
import ToVoteIzakaya from "./../components/ToVoteIzakaya";

class VotePage extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div className={style.toVoteMessageDivStyle}>
          <ToVoteMessage />
        </div>

        <div className={style.toVoteIzakayaListDivStyle}>
          <ToVoteIzakaya />
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VotePage)
