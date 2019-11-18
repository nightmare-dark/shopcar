import React, { Component, Fragment } from "react";
import Tab from "../components/common/tab";
import TabBar from "../components/common/tabbar";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Home from "./../pages/home/index";
import Category from "./../pages/category/index";
import Mine from "./../pages/mine/index";
import Recommend from "./../pages/recommend/index";
import ShopCar from "./../pages/shopcar/index";
import Error from "./../pages/error/index";
import Login from "./../pages/login/index";
import Register from "./../pages/register/index";
import List from "./../pages/list/index";
import Detail from "./../pages/detail/index";

class LayOut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabFlag: false,
      title: {
        "/home": "猫眼电影",
        "/recommend": "推荐",
        "/category": "分类",
        "/shopcar": "购物车",
        "/mine": "个人中心",
        "/home/hot": "热映中",
        "/home/comming": "准备着",
        "/list": "列表",
        "/login": "登录",
        "/detail": "详情页",
        "/register": "注册"
      },
      arr: [
        "/recommend",
        "/shopcar",
        "/category",
        "/mine",
        "/home/hot",
        "/home/comming",
        "/list",
        "/detail"
      ],
      tab_bar_arr: [
        "/recommend",
        "/mine",
        "/category",
        "/home",
        "/home/hot",
        "/home/comming",
        "/list"
      ],
      TabBarFlag: true
    };
  }

  componentDidMount() {
    this.changeTabFlag();
    this.checkTabBar();
    this.checkHomeToHot();
  }

  componentWillReceiveProps(nextProps) {
    // console.log("触发");
    this.changeTabFlag(nextProps);
    this.checkTabBar(nextProps);
    this.checkHomeToHot(nextProps);
  }

  changeTabFlag = nextProps => {
    const { pathname } =
      (nextProps && nextProps.location) || this.props.location;
    const f = this.state.arr.some(item => item == pathname);
    if (f) {
      this.setState({
        tabFlag: true
      });
    } else {
      this.setState({
        tabFlag: false
      });
    }
  };

  checkTabBar = nextProps => {
    const { pathname } =
      (nextProps && nextProps.location) || this.props.location;
    const f = this.state.tab_bar_arr.some(item => item == pathname);
    if (f) {
      this.setState({
        TabBarFlag: true
      });
    } else {
      this.setState({
        TabBarFlag: false
      });
    }
  };

  checkHomeToHot = nextProps => {
    const { pathname } =
      (nextProps && nextProps.location) || this.props.location;
    const { push, replace } =
      (nextProps && nextProps.history) || this.props.history;
    if (pathname == "/home") {
      push("/home/hot");
    }
  };

  render() {
    const { tabFlag, title, TabBarFlag } = this.state;
    const { pathname } = this.props.location;
    return (
      <div className="layout">
        <Tab tabFlag={tabFlag} title={title[pathname]} {...this.props} />
        <Switch>
          <Redirect from="/" to="/home" exact />
          <Route path="/home" component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/recommend" component={Recommend} />
          <Route path="/shopcar" component={ShopCar} />
          <Route path="/mine" component={Mine} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/list" component={List} />
          <Route path="/detail/:id" component={Detail} />
          <Route component={Error} />
        </Switch>
        {TabBarFlag && <TabBar />}
      </div>
    );
  }
}

export default withRouter(LayOut);
