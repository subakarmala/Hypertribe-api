import React from 'react'
import profileImg from "../../images/profileImg.png";
import logo from "../../images/logo.png";
import "./HeaderNext.css"
const HeaderNext = () => {
    return (
      <div>
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="searchBox">
                  <input type="text" placeholder="Search" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="profilerinfo">
                  <div
                    className="profileImg"
                    style={{ background: `url(${profileImg})` }}
                  ></div>

                  <div className="profileName">Aayansh</div>
                  <div className="profileDes">Managing Director</div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
}

export default HeaderNext
