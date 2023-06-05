import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillTelephonePlusFill, BsFillCartPlusFill } from "react-icons/bs";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

import "./Header.css";

function Header() {
  return (
    <div className="header-page">
      <div className="topbar">
        <div className="leftbar">
          <div className="header-icon">
            {" "}
            <BsFillTelephonePlusFill />
          </div>
          <p>Địa chỉ 102 Thái Thịnh, Đống Đam Hà Nội - Hottline: 1900.2812</p>
        </div>
        <div className="rightbar">
          <i className="">
            <BsFillCartPlusFill />
            <p>Giỏ hàng </p>
          </i>
          <i className="">
            <PermIdentityIcon />
            <Link to="/login">Tài khoản</Link>
          </i>
        </div>
      </div>
      <div className="downbar">
        <div className="header">
          <Link to="/" className="title-page">
            FURLA
          </Link>
        </div>
        <div className="tabbar header-tab">
          <div className="menu-tab">
            <div className="menu-tab-item">
              <Link to="/">TRANG CHỦ</Link>
            </div>
            <div className="menu-tab-item">
              <Link to="/">GIÀY</Link>
            </div>
            <div className="menu-tab-item">
              <Link to="/">TÚI</Link>
            </div>
            <div className="menu-tab-item">
              <Link to="/">THỜI TRANG</Link>
            </div>
            <div className="menu-tab-item">
              <Link to="/">CUSTOMER</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
