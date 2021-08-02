import React from "react";
import profileImg from "../../images/profileImg.png";
import logo from "../../images/logo.png";
import "./Header.css"
const Header = () => {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="profilerinfo">
        <div
          className="profileImg"
          style={{ background: `url(${profileImg})` }}
        ></div>
        {/* <div className="searchBox">
          <input type="text" placeholder="Search" />
        </div> */}
        <div className="profileName">Aayansh</div>
        <div className="profileDes">Managing Director</div>
      </div>
    </div>
  );
};

export default Header;
