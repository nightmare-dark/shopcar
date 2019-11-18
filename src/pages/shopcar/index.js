import React, { Component } from "react";
import "./index.scss";
import { Button } from "antd-mobile";

export default class ShopCar extends Component {
  data = () => {
    console.log(this.shopcar);
    return {
      shopcar:
        (localStorage.getItem("shopcar") &&
          JSON.parse(localStorage.getItem("shopcar"))) ||
        []
    };
  };

  del = index => {
    this.data().shopcar.splice(index, 1);
    localStorage.setItem("shopcar", JSON.stringify(this.shopcar));
  };

  render() {
    console.log(this.data());

    if (this.data().shopcar == []) {
      return <div className="container">222</div>;
    } else {
      return (
        <div className="container">
          <ul>
            <li>
              <div className="img-box">
                <a>
                  <img src={this.data().shopcar[0].pic} />
                </a>
              </div>
              <div className="content-box">
                <h3>{this.data().shopcar[0].name}</h3>
                <p>天猫价：{this.data().shopcar[0].yuanjia}</p>
                <p>券后价：{this.data().shopcar[0].jiage}</p>
                <p>已售{this.data().shopcar[0].xiaoliang}件</p>
              </div>
              <div>
                <Button type="warning" onClick={this.del}>
                  删除
                </Button>
              </div>
            </li>
          </ul>
        </div>
      );
    }
  }
}
