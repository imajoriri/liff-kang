// 外部モジュール
import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
// container
import VotePage from "./containers/VotePage";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' exact component={VotePage}/>
      </Router>
    );
  }
}

export default App;
