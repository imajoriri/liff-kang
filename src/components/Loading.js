import React, { Component } from 'react';
import style from "./style/Loading.css";

class Loading extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className={style.overlay} id="overlay">
        <div className={style.cvSpinner}>
          <span className={style.spinner}></span>
        </div>
      </div>
    )
  }
}

export default Loading;
