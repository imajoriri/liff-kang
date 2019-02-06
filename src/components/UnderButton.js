// 外部モジュール
import React, { Component } from 'react';
// 内部モジュール
import style from "./style/UnderButton.css";
// 画像
import goodImgURL from "./../images/good.png";
import textImgURL from "./../images/text.png";

class UnderButton extends Component {
  constructor(props){
    super(props);
    console.log("oko");
  }

  render(){
    return(
      <div className={style.topDivStyle}>
        <button className={style.buttonStyle} onClick={() => this.props.onClick()}>
          {this.props.text}
        </button>
      </div>
    )
  }
}

export default UnderButton;
