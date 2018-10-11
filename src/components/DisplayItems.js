import React from "react";

import "./DisplayItems.css";
import { InputItems, ListItems } from "./DisplayItemsConst";


export class DisplayItems extends React.Component {
  render() {
    return (
      <div id="main">
        <div id="title"><h2>React Redux Create Read Update Delete Items</h2></div>
        <div id="input-items"><InputItems store={this.props} /></div>
        <div id="list-items"><ListItems store={this.props} /></div>
      </div>
    )
  }
}
