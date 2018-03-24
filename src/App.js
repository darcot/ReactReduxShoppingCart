import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import InventoryContainer from "./containers/InventoryContainer";
import NotificationContainer from "./containers/NotificationContainer";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CartContainer from './containers/CartContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NotificationContainer/>
      <Router>
        <div>
        <Route exact path={"/"} component={InventoryContainer} />
        <Route path={"/orderSummary"} component={CartContainer} />
        </div>
       </Router>
  </div>
    );
  }
}

export default App;
