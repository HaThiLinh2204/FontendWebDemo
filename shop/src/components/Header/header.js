import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillTelephonePlusFill, BsFillCartPlusFill } from "react-icons/bs";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

import "./Header.css";

function Header() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
            <PermIdentityIcon />
            <p>Tài khoản</p>
          </i>
          <i className="">
            <BsFillCartPlusFill />
            <p>Giỏ hàng </p>
          </i>
        </div>
      </div>
      <div className="downbar">
        <header className="header">
          <h1 className="title-page">FURLA</h1>
        </header>
        <div className="tabbar header-tab">
          <Link to="/">
            <button
              className={activeTab === "home" ? "active" : ""}
              onClick={() => handleTabClick("home")}
            >
              Trang chủ
            </button>
          </Link>
          <button
            className={activeTab === "giay" ? "active" : ""}
            onClick={() => handleTabClick("about")}
          >
            Giày
          </button>
          <button
            className={activeTab === "about" ? "active" : ""}
            onClick={() => handleTabClick("about")}
          >
            Trang sức
          </button>
          <Link to="/giay">
            <button
              className={activeTab === "phukien" ? "active" : ""}
              onClick={() => handleTabClick("phukien")}
            >
              Phụ kiện
            </button>
          </Link>
          <button
            className={activeTab === "contact" ? "active" : ""}
            onClick={() => handleTabClick("contact")}
          >
            Thời trang
          </button>
        </div>
      </div>
      {/* {activeTab === "home" && <p>This is the home page content.</p>} */}
      {activeTab === "about" && <p>This is the about page content.</p>}
      {activeTab === "contact" && <p>This is the contact page content.</p>}
    </div>
  );
}
export default Header;
