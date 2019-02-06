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
    return(
      <div className={style.topDivStyle}>

        {/* 左側の居酒屋情報 */}
        <div className={style.izakayaInfoDivStyle}>
          <img 
            src={sampleIzakayaURL}
            src="https://uds.gnst.jp/rest/img/7enacsmr0000/t_00cs.png"
            className={style.izakayaImgStyle}
          />

          <div className={style.izakayaDetailDivStyle}>

            <div className={style.tagDivStyle}>
              <div className={style.tagStyle}>居酒屋</div>
              <div className={style.tagStyle}>居酒屋</div>
            </div>

            <div className={style.izakayaNameDivStyle}>
              <p>居酒屋 一休</p>
            </div>

            <div className={style.izakayaWalkDivStyle}>
              <p>駅から徒歩5分</p>
            </div>

          </div>
        </div>

        {/* 右側の予算とか */}
        <div className={style.checkDivStyle}>
          <div className={style.budgetDivStyle}>
            <p className={style.budgetTitlePStyle}>平均予算</p>
            <p className={style.yenPStyle}>￥2000</p>
          </div>

          <div className={style.checkButtonDivStyle}>
            <div className={style.checkButtonStyle}>
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
