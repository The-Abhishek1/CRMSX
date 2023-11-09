import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

export default function NewsList(props) {
  const [articles, SetArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=crimes&apiKey=e2dcb3fca6e24269aa4dd18e332bb9d7"
      );
      console.log(response);
      SetArticles(response.data.articles);
    };
    getArticles();
  }, []);
  return (
    <div>
      {articles.map((article) => {
        return (
          <NewsItem
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
            theme1={props.theme1}
            theme2={props.theme2}
            theme3={props.theme3}
          ></NewsItem>
        );
      })}
    </div>
  );
}
