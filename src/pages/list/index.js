import React, { Component } from "react";
import "./index.scss";
import axios from "axios";
import qs from "querystring";
import { Link } from "react-router-dom";

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  componentDidMount() {
    const { search } = this.props.location;
    const { cid } = qs.parse(search.slice(1));
    console.log(search);

    axios({
      url: "/index.php",
      params: {
        r: "class/cyajaxsub",
        page: 1,
        cid,
        px: "t",
        cac_id: ""
      }
    }).then(res => {
      console.log(res.data.data.content);
      console.log(res);
      this.setState({
        list: res.data.data.content
      });
    });
  }

  products = list => {
    return list.map((item, index) => (
      <li key={index}>
        {/* <a> */}
        <Link
          to={{
            pathname: `/detail/${item.id}`,
            search: `r=p/d&id=${item.id}&categoryId=${item.category_id}&pic=${item.pic}&yuanjia=${item.yuanjia}&jiage=${item.jiage}&xiaoliang=${item.xiaoliang}&name=${item.d_title}`
          }}
        >
          <div className="img-box">
            <img alt="" src={item.pic} />
          </div>
          <div className="content-box">
            <h3> {item.d_title} </h3>
            <div className="content">
              <div className="price">
                <span> 天猫价 {item.yuanjia} </span>
                <span> 劵后价 {item.jiage} </span>
              </div>
              <div className="num">
                <span> 已售 {item.xiaoliang} 件 </span>
              </div>
            </div>
          </div>
          {/* </a> */}
        </Link>
      </li>
    ));
  };

  render() {
    const { list } = this.state;
    return (
      <div className="container">
        <ul>{this.products(list)}</ul>
      </div>
    );
  }
}
