import React from "react";
import n from "./News.module.css";
import Header from "../Header/Header";

export default function NewsItem({
  title,
  description,
  url,
  urlToImage,
  themeSettings,
  theme,
}) {
  return (
    <>
      <div className={n.newsapp} style={themeSettings}>
        <div className={n.newsitem} style={theme}>
          <h3 className={n.h3} style={themeSettings}>
            <a className={n.a} href={url} style={themeSettings}>
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
