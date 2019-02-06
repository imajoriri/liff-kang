// 外部モジュール
import React, { Component } from 'react';
// 内部モジュール
import style from "./style/ToVoteMessage.css";
// 画像
import goodImgURL from "./../images/good.png";
import textImgURL from "./../images/text.png";

class ToVoteMessage extends Component {
  constructor(props){
    super(props);
    console.log("oko");
  }

  render(){
    return(
      <div className={style.topDivStyle}>
        <p className={style.messagePStyle}>
          行きたいところに
        </p>
        <img 
          src={textImgURL}
          className={style.textImgStyle}
        />
      </div>
    )
  }
}

export default ToVoteMessage;
