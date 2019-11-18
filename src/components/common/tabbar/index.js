import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const TabBar = props => {
  const navs = [
    {
      id: 1,
      iconName: "fa-home",
      path: "/home",
      text: "首页"
    },
    {
      id: 2,
      iconName: "fa-hand-middle-finger",
      path: "/recommend",
      text: "推荐"
    },
    {
      id: 3,
      iconName: "fa-list",
      path: "/category",
      text: "分类"
    },
    {
      id: 4,
      iconName: "fa-shopping-cart",
      path: "/shopcar",
      text: "购物车"
    },
    {
      id: 5,
      iconName: "fa-user-ninja",
      path: "/mine",
      text: "个人中心"
    }
  ];

  function renderNav() {
    return navs.map(item => (
      <li key={item.id}>
        <NavLink to={item.path} activeClassName="active">
          <i className={"fas " + item.iconName}></i>
          <span>{item.text}</span>
        </NavLink>
      </li>
    ));
  }

  return (
    <footer>
      <ul>{renderNav()}</ul>
    </footer>
  );
};

export default TabBar;
