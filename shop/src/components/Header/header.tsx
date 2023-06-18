import React from "react";

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
            <a href="/login">Tài khoản</a>
          </i>
        </div>
      </div>
      <div className="downbar">
        <div className="header">

          <a href="/" className="title-page">
            FURLA
          </a>

        </div>
        <div className="tabbar header-tab">
          <div className="menu-tab">
            <div className="menu-tab-item">
              <a href="/">TRANG CHỦ</a>
            </div>
            <div className="menu-tab-item">
              <a href="/giay">GIÀY</a>
            </div>
            <div className="menu-tab-item">
              <a href="/tui">TÚI</a>
            </div>
            <div className="menu-tab-item">
              <a href="/phukien">PHỤ KIỆN</a>
            </div>
            <div className="menu-tab-item">
              <a href="/">THỜI TRANG</a>

            </div>
            <div className="menu-tab-item">
              <a href="/">CUSTOMER</a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
