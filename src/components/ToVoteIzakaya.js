// 外部モジュール
import React, { Component } from 'react';
// 内部モジュール
import style from "./style/ToVoteIzakaya.css";
// 画像
import goodImgURL from "./../images/good.png";
import textImgURL from "./../images/text.png";
import sampleIzakayaURL from "./../images/sampleIzakaya.png";

class ToVoteIzakaya extends Component {
  constructor(props){
    super(props);
  }

  render(){
    var tag1, tag2;
    if(this.props.tag["0"]["_"]){
      tag1 = <div className={style.tagStyle}>{this.props.tag["0"]["_"]}</div>
    }
    if(this.props.tag["1"]["_"]){
      tag2 = <div className={style.tagStyle}>{this.props.tag["1"]["_"]}</div>
    }

    return(
      <div className={style.topDivStyle}>

        {/* 左側の居酒屋情報 */}
        <div className={style.izakayaInfoDivStyle}>
          <img 
            src={sampleIzakayaURL}
            src={this.props.imgURL}
            className={style.izakayaImgStyle}
          />

          <div className={style.izakayaDetailDivStyle}>

            <div className={style.tagDivStyle}>
              {tag1}{tag2}
            </div>

            <div className={style.izakayaNameDivStyle}>
              <p>{this.props.name}</p>
            </div>

            <div className={style.izakayaWalkDivStyle}>
              <p>駅から徒歩{this.props.walk}分</p>
            </div>

          </div>
        </div>

        {/* 右側の予算とか */}
        <div className={style.checkDivStyle}>
          <div className={style.budgetDivStyle}>
            <p className={style.budgetTitlePStyle}>平均予算</p>
            <p className={style.yenPStyle}>￥{this.props.budget}</p>
          </div>

          <div className={style.checkButtonDivStyle}>
            <div 
              className={this.props.isChecked ? style.isCheckedButtonStyle : style.isNotCheckedButtonStyle}
              onClick={(shopId) => this.props.clickVote(this.props.shopId)}
            >
              <img
                src={goodImgURL}
              />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default ToVoteIzakaya;
