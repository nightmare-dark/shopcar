import React, { Component } from "react";
import "./index.scss";
import qs from "querystring";
import { Button } from "antd-mobile";

export default class Detail extends Component {
  getCar = () => {
    return (
      (localStorage.getItem("shopcar") &&
        JSON.parse(localStorage.getItem("shopcar"))) ||
      []
    );
  };
  save = arr => {
    localStorage.setItem("shopcar", JSON.stringify(arr));
  };
  addCar = () => {
    const { search } = this.props.location;
    const { pic } = qs.parse(search.slice(1));
    const { yuanjia } = qs.parse(search.slice(1));
    const { jiage } = qs.parse(search.slice(1));
    const { xiaoliang } = qs.parse(search.slice(1));
    const { name } = qs.parse(search.slice(1));
    const { id } = qs.parse(search.slice(1));
    const shopcar = this.getCar();
    if (shopcar.length == 0) {
      shopcar.push({
        id,
        name,
        yuanjia,
        jiage,
        xiaoliang,
        pic
      });
      this.save(shopcar);
    } //else {
    //   const f = shopcar.some(item => item.id == id);
    //   if (f) {
    //     shopcar.map(item => {
    //       if (item.id == id) {
    //         item.num += this.num;
    //         return;
    //       }
    //     });
    //     this.save(shopcar);
    //   } else {
    //     shopcar.push({
    //       id,
    //       name,
    //       yuanjia,
    //       jiage,
    //       xiaoliang,
    //       pic
    //     });
    //     this.save(shopcar);
    //   }
    //}
  };
  render() {
    const { search } = this.props.location;
    const { pic } = qs.parse(search.slice(1));
    const { yuanjia } = qs.parse(search.slice(1));
    const { jiage } = qs.parse(search.slice(1));
    const { xiaoliang } = qs.parse(search.slice(1));
    const { name } = qs.parse(search.slice(1));
    console.log(name);
    return (
      <div className="detail-box">
        <img alt="" src={pic} />
        <h3>{name}</h3>
        <p>天猫价{yuanjia}</p>
        <p>券后价{jiage}</p>
        <p>已售{xiaoliang}件</p>
        <br />
        <Button type="warning" onClick={this.addCar}>
          加入购物车
        </Button>
      </div>
    );
  }
}
