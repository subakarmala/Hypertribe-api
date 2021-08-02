import React,{useState, useEffect} from "react";
import "./News.css"
import { Link } from "react-router-dom"
import Axios from "axios";
const News = (props) => {
  const [article, setArticles] = useState([])
  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=a9b40ae1aee948429c30a338e64997e5"
      );
      setArticles(res.data.articles);
      console.log(article)
    }
    getArticles();
  }, [])
    let link = "";
    if (props.filter == "" || props.filter == "All") {
      link = "All";
    } else {
      link = props.filter;
    }
  return (
    <div>
      <div className="whiteBox paddingLR0 p50">
        <div className="whiteBox__heading">News</div>
        <Link to={"/NewsPage/" + link} className="viewAll">
          View All
        </Link>
        <div className="newsInfo">
          {article
            .filter((input) => {
            //  if (props.filter === null) {
            //     return input;
            //   }
              if (props.filter === "") {
                return input;
              }
              if (props.filter !== "All") {
                if (input.author === props.filter) {
                  return input;
                }
              } else {
                return input;
              }
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
                  // <div index={index.id}>
                  <div key={title}>
                    <a href="#" className="newsList">
                      <div
                        className="newsList__img"
                        // style={{ background: `url(${news})` }}
                      >
                        <img className="img-style" src={urlToImage} />
                      </div>
                      <h3>
                        {title}
                        {/* <a href={url}></a> */}
                      </h3>

                      <p>{description}</p>
                      <div className="dateTimeBox">
                        <div className="dateInfo">{publishedAt}</div>
                        <br></br>
                        <div>
                          <b>Author: </b>
                          {author}
                        </div>
                      </div>
                    </a>
                    <h3 />
                  </div>
                );
              }
            )}
        </div>
      </div>
    </div>
  );
};

export default News;

// filter((input) => {
            // if ((filter == input.permission) == "suba") {
            //   if ((filter == input.permission) == "suba") {
            //     if ((filter == input.permission) == "suba") {
            //     }
            
            //   }
            //    }
         // })