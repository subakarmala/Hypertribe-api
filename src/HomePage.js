import {useState }from "react";

import Banner from "./Components/Banner/Banner";
import Communitynews from "./Components/Communitynews/Communitynews";
import Contactmanager from "./Components/Contactmanager/Contactmanager";
import Documentsmedia from "./Components/Documents-media/Documents-media";
import Eventcalender from "./Components/Eventcalender/Eventcalender";
import Header from "./Components/Header/Header";
import Keyresources from "./Components/Key-resources/Key-resources"
 import News from "./Components/News/News";
import Notification from "./Components/Notification/Notification";
import Resources from "./Components/Resources/Resources";
 import Strategy from "./Components/Strategy/Strategy";
 import Task from "./Components/Task/Task";


const HomePage = () => {
  const [filter, setFilter] = useState("All");
  const selectNews = (event) => {
    setFilter(event);
    console.log(event);
  }
  return (
    <div>
      <main className="wrapper">
        <header className="header">
          <div className="container">
            <div className="col">
              <Header />
            </div>
          </div>
        </header>

        <section className="banner">
          <div className="container">
            <div className="col">
              <Banner  selectNews={selectNews} />
            </div>
          </div>
        </section>

        <section className="contentArea">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <Communitynews />
              </div>
              <div className="col-md-5">
                <News filter={filter}  />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Notification />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <Strategy />
              </div>
              <div className="col-md-4">
                <Task />
              </div>
              <div className="col-md-4">
                <Keyresources />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Eventcalender />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <Resources />
              </div>
              <div className="col-md-4">
                <Documentsmedia />
              </div>
              <div className="col-md-4">
                <Contactmanager />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
