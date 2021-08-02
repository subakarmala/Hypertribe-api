import { useState, useEffect } from "react";
import news from "../../images/news.png";
import news1 from "../../images/news1.png";
import HeaderNext from "../Header/HeaderNext";
import JSON from "./New.json";
import { Link } from "react-router-dom"
import Axios from "axios";



const NewsPage = (props) => {
  
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    
    const getArticles = async () => {
     
      const res = await Axios.get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=a9b40ae1aee948429c30a338e64997e5"
      );
    
        setArticles(res.data.articles);
      console.log(res);
    };
    getArticles();
  }, []);
   
  
   return (
     <div>
       <HeaderNext />
       <Link
         to={`/`}
        
         className="btn btn-primary"
         style={{ marginLeft: "100px" }}
       >
         Back
       </Link>
       <div className="container">
         <div className="row">
           <div className="whiteBox paddingLR0 p50">
             <div className="whiteBox__heading" style={{ textAlign: "center" }}>
               News
             </div>

             <div className="newsInfo">
               {articles
                 .filter((input) => {
                   if (props.match.params.id === input.author) {
                     return input;
                   }
                   if (props.match.params.id === "All") {
                     return input;
                   }
                   //  if (props.match.params.id === "") {
                   //    return input;
                   //  }
                   // if (props.match.params.id == null) {
                   //   return input;
                   // }
                   // if (props.match.params.id == input.every) {
                   //   return input;
                   // }
                 })
                 .map(
                   ({
                     url,
                     title,
                     description,
                     urlToImage,
                     author,
                     publishedAt,
                   }) => {
                     return (
                       <div key={title}>
                         <a href="#" className="newsList">
                           <div
                             className="newsList__img"
                            
                             // style={{ background: `url(${news})` }}
                           >
                             <img src={urlToImage} />
                           </div>
                           <h3> {title}</h3>
                           <div className="dateTimeBox">
                             <div className="dateInfo">{publishedAt}</div>
                             <div>
                               <b>Author: </b> {author}
                             </div>
                           </div>
                           <p>{description}</p>
                         </a>
                         <h3 />
                       </div>
                     );
                   }
                 )}
             </div>
           </div>
         </div>
       </div>
     </div>
   );
};

export default NewsPage;
