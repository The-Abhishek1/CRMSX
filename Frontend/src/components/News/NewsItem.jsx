import React from "react";
import n from "./News.module.css";
import Header from "../Header/Header";

export default function NewsItem({
  title,
  description,
  url,
  urlToImage,
  theme1,
  theme2,
  theme3,
}) {
  return (
    <>
      <div className={n.newsapp} style={theme1}>
        <div className={n.newsitem} style={theme2}>
          <h3 className={n.h3} style={theme2}>
            <a className={n.a} href={url} style={theme2}>
              {title}
            </a>
          </h3>
          <img className={n.newsimage} src={urlToImage} alt={url} />
          <p className={n.p}>{description}</p>
        </div>
      </div>
    </>
  );
}
