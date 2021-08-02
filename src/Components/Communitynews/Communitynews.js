import React from "react";
//import CommunityNews from "../../images/CommunityNews.png";
import "./Communitynews.css";
import { comData } from "../News/JSONNEWS";
const Communitynews = () => {
  return (
    <div>
      <div className="whiteBox CommunityNewsSliderBox">
        <div className="whiteBox__heading">Community News</div>
        <a href="/ComNews" className="viewAll">
          View All
        </a>
        {comData.map((val) => {
          return (
            <div className="CommunityNewsSlider">
              <div
                id="CommunityNewsSlider"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#CommunityNewsSlider"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#CommunityNewsSlider" data-slide-to="1"></li>
                  <li data-target="#CommunityNewsSlider" data-slide-to="2"></li>
                  <li data-target="#CommunityNewsSlider" data-slide-to="3"></li>
                </ol>

                <div className="carousel-inner">
                  <div className="item active">
                    <div
                      className="CommunityNewsSlider__img"
                      // style={{
                      //   background: `url(${CommunityNews})`,
                      //   backgroundSize: "cover",
                      // }}
                    >
                      <img src={val.logo2} height="400px" width="700px" />
                    </div>
                    <h3 className="heading">{val.title1}</h3>
                    <div className="dateTimeBox">
                      <div className="dateInfo">{val.date}</div>
                      <div className="timeInfo">{val.time}</div>
                    </div>
                    <p>{val.title2}</p>
                  </div>

                  <div className="item">
                    <div
                      className="CommunityNewsSlider__img"
                      // style={{
                      //   background: `url(${CommunityNews})`,
                      //   backgroundSize: "cover",
                      // }}
                    >
                      <img src={val.logo2} height="400px" width="700px" />
                    </div>
                    <h3 className="heading">{val.title1}</h3>
                    <div className="dateTimeBox">
                      <div className="dateInfo"> {val.date}</div>
                      <div className="timeInfo"> {val.time}</div>
                    </div>
                    <p>{val.title2}</p>
                  </div>

                  <div className="item">
                    <div
                      className="CommunityNewsSlider__img"
                      // style={{
                      //   background: `url(${CommunityNews})`,
                      //   backgroundSize: "cover",
                      // }}
                    >
                      <img src={val.logo2} height="400px" width="700px" />
                    </div>
                    <h3 className="heading">{val.title2}</h3>
                    <div className="dateTimeBox">
                      <div className="dateInfo">{val.date}</div>
                      <div className="timeInfo">{val.time}</div>
                    </div>
                    <p>{val.title2}</p>
                  </div>

                  <div className="item">
                    <div
                      className="CommunityNewsSlider__img"
                      // style={{
                      //   background: `url(${CommunityNews})`,
                      //   backgroundSize: "cover",
                      // }}
                    >
                      <img src={val.logo2} height="400px" width="700px" />
                    </div>
                    <h3 className="heading">{val.title1}</h3>
                    <div className="dateTimeBox">
                      <div className="dateInfo">{val.date}</div>
                      <div className="timeInfo">{val.time}</div>
                    </div>
                    <p>{val.title2}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Communitynews;
