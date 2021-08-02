import { useState, useEffect } from "react";
import "./Banner.css";
import Axios from "axios";
import { useLocation, useHistory } from "react-router";


const Banner = (props) => {
  const [date, setDate] = useState(new Date());
  const [select, setSelect] = useState("");

  useEffect(() => {
    const sec = setInterval(() => setDate(new Date()));
   });
    const nameSelect = (event) => {
    console.log(event.target.value);
    props.selectNews(event.target.value);
    setSelect(event.target.value);
    const { name, value } = event?.target;
    const params = new URLSearchParams({ [name]: value });
    history.replace({ pathname: location.pathname, search: params.toString() });   
    
  };
  var presentHour = date.getHours();
  var greeting;
  if (presentHour < 12) {
    greeting = "Good Morning ";
  } else if (presentHour >= 12 && presentHour <= 15) {
    greeting = "Good Afternoon";
  } else if (presentHour >= 15 && presentHour <= 22) {
    greeting = "Good Evening";
  } else if (presentHour >= 22 && presentHour <= 24) {
    greeting = "Good Night";
  }
  const [articles, setArticles] = useState([]);
  let location = useLocation();
  const history = useHistory();
  

  useEffect(() => {
      const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=a9b40ae1aee948429c30a338e64997e5"
      );
      var dropdown = res.data.articles.filter(
        (e, i) =>
          res.data.articles.findIndex((a) => a.author === e.author) === i
      );

      setArticles(dropdown);
      console.log(dropdown);
      
    };
    getArticles();
    //  let val = location.search.replace("?url=","");
    // console.log(val);
    // if (val == null || "") {
    //   val = "All";
    // }
    // const urlParams = new URLSearchParams(window.location.search);
    // const myParam = urlParams.get("url");
    // console.log(myParam);
    // var country = document.getElementById("authordropdown");
    // country.options[country.selectedIndex].defaultSelected = true;
    
    
    // setSelect(val);
    // props.selectNews(val);
   
  }, []);
  return (
    <div>
      <div className="profileInfo">
        <p>{greeting}</p>
        <select 
        value={select} onChange={nameSelect}>
          <option key="0" value="All">All</option>;
          {articles.map(({ author }, key) => {
            return <option key={key + 1} value={author}>{author}</option>;
          })}
        </select>
       <p>
          <label> {date.toDateString()}</label>
          <br></br>
          <label>{date.toLocaleTimeString()}</label>
         </p>
      </div>
      <div className="searchBox">
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};
export default Banner;
