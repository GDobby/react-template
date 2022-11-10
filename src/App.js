import React, { Component } from "react";
import "./app.less";
import img1 from "./images/01.jpg";
// import img1 from "images/01.jpg";

export class App extends Component {
  componentDidMount() {
    let ele = document.getElementById("img3");
    let myImg = new Image();
    myImg.src = img1;
    ele.appendChild(myImg);
  }
  render() {
    return (
      <div className="wrap">
        <div className="box1">react-template-01!!!!!!</div>
        <div className="box2">react-template-02!!!!!!</div>
        <div className="box3" id="img3"></div>
      </div>
    );
  }
}

export default App;
