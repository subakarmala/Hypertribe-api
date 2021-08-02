import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import "./index.css";
import App from "./App";
import NewsPage from "./Components/News/NewsPage"
import Communitynext from "./Components/Communitynews/Communitynext";
// export const filNewspage=()=>{
//   const [filter, setFilter] = useState("All");
//   const selectNews = (event) => {
//     setFilter(event);
//   }
// }
// export const FilNewspage = () => {
//   const [fil, setFil] = useState("All");
//   const clickNewspage = (event) => {
//     setFil(event);
//     console.log(event);
//   }
// }
 
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route
        path="/NewsPage/:id"
        component={NewsPage}
        />
      <Route path="/ComNews" component={Communitynext} />
    
    </Switch>
  </Router>,
  document.getElementById("root")
);

