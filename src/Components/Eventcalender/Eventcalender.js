import React from "react";
// import Custom from './Custom';
import "./Eventcalender.css"

const Eventcalender = () => {
   
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="whiteBox">
            <div className="whiteBox__heading">Event Calendar</div>
            <div className="event-calendar">
              <div className="col-md-6">
                <div className="calendar-box">
                  <div id="calendar"></div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="eventDetails">
                  <ul>
                    <li>
                      <div className="eventDateBox">
                        <div className="eventDate">03</div>
                        <div className="eventMonth">Aug</div>
                      </div>
                      <div className="event">
                        Pellentesque commodo vitae risus vel fringilla{" "}
                      </div>
                      <p className="desc">
                        Curabitur id scelerisque massa. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices{" "}
                      </p>
                    </li>
                    <li>
                      <div className="eventDateBox">
                        <div className="eventDate">12</div>
                        <div className="eventMonth">Aug</div>
                      </div>
                      <div className="event">
                        Pellentesque commodo vitae risus vel fringilla{" "}
                      </div>
                      <p className="desc">
                        Curabitur id scelerisque massa. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices{" "}
                      </p>
                    </li>
                    <li>
                      <div className="eventDateBox">
                        <div className="eventDate">03</div>
                        <div className="eventMonth">Sep</div>
                      </div>
                      <div className="event">
                        Pellentesque commodo vitae risus vel fringilla{" "}
                      </div>
                      <p className="desc">
                        Curabitur id scelerisque massa. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices{" "}
                      </p>
                    </li>
                    <li>
                      <div className="eventDateBox">
                        <div className="eventDate">03</div>
                        <div className="eventMonth">Sep</div>
                      </div>
                      <div className="event">
                        Pellentesque commodo vitae risus vel fringilla{" "}
                      </div>
                      <p className="desc">
                        Curabitur id scelerisque massa. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices{" "}
                      </p>
                    </li>
                    <li>
                      <div className="eventDateBox">
                        <div className="eventDate">03</div>
                        <div className="eventMonth">Sep</div>
                      </div>
                      <div className="event">
                        Pellentesque commodo vitae risus vel fringilla{" "}
                      </div>
                      <p className="desc">
                        Curabitur id scelerisque massa. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices{" "}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventcalender;
