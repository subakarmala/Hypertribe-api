import React from 'react'
import HeaderNext from "../Header/HeaderNext";
import CommunityNews from "../../images/CommunityNews.png";
//import { newsData } from "./JSONNEWS";
import { comData } from '../News/JSONNEWS';
import "./Communitynext.css";
const Communitynext = () => {
    return (
      <div>
        <HeaderNext />
        <a href="/" className="btn btn-primary" style={{ marginLeft: "100px" }}>
          Back
        </a>
        <div className="container">
          <div className="row">
            <div className="whiteBox CommunityNewsSliderBox">
              <div className="whiteBox__heading" style={{textAlign:"center"}}>Community News</div>
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
                        <li
                          data-target="#CommunityNewsSlider"
                          data-slide-to="1"
                        ></li>
                        <li
                          data-target="#CommunityNewsSlider"
                          data-slide-to="2"
                        ></li>
                        <li
                          data-target="#CommunityNewsSlider"
                          data-slide-to="3"
                        ></li>
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
                            <img
                              src={val.logo2}
                              height="400px"
                              width="1200px"
                            />
                          </div>
                          <h3 className="heading">{val.title1}</h3>
                          <div className="dateTimeBox">
                            <div className="dateInfo">{val.date}</div>
                            <div className="timeInfo">{val.date}</div>
                          </div>
                          <p>{val.title2}</p>
                        </div>

                        <div className="item">
                          <div
                            className="CommunityNewsSlider__img"
                            //style={{ background: `url(${CommunityNews})` }}
                          >
                            <img
                              src={val.logo2}
                              height="400px"
                              width="1200px"
                            />
                          </div>
                          <h3 className="heading">{val.title1}</h3>
                          <div className="dateTimeBox">
                            <div className="dateInfo">{val.date}</div>
                            <div className="timeInfo">{val.date}</div>
                          </div>
                          <p>{val.title2}</p>
                        </div>

                        <div className="item">
                          <div
                            className="CommunityNewsSlider__img"
                            //style={{ background: `url(${CommunityNews})` }}
                          >
                            <img
                              src={val.logo2}
                              height="400px"
                              width="1200px"
                            />
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
                            //style={{ background: `url(${CommunityNews})` }}
                          >
                            <img
                              src={val.logo2}
                              height="400px"
                              width="1200px"
                            />
                          </div>
                          <h3 className="heading">
                            {/* Praesent sagittis eu ante vel tincidunt. Integer
                            nulla nibh, fringilla sit amet purus a, lobortis
                            eleifend quam. */}
                            {val.title1}
                          </h3>
                          <div className="dateTimeBox">
                                        <div className="dateInfo">{ val.date}</div>
                                        <div className="timeInfo">{ val.time}</div>
                          </div>
                          <p>
                            {/* Praesent vitae nisi at urna imperdiet cursus quis a
                            sem. Quisque semper dui et lorem faucibus, sed
                            varius mi sagittis. Sed bibendum nulla placerat
                            pharetra vehicula. Curabitur dolor est, sagittis a
                            diam ut, consectetur dapibus nunc. */}
                                        {val.title2}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Communitynext;
