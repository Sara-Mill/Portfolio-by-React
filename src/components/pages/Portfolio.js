import React from "react";
import JATE from "../../images/JATE.png";
import SNAPI from "../../images/SNAPI.png";
import DEAR from "../../images/DEAR.jpg";
import style from "./portfolio.css";

export default function About() {
  return (
    <div>
      <h1>Portfolio </h1>
      <div className="images">
        <a href="https://pwa-jate-mystic-app.herokuapp.com">
          <div id="" class="d-flex justify-content-center align-items-center">
            <p class="project-links">Progressive Web Application</p>
          </div>
          <img
            src={JATE}
            alt="Black background, with text editor in yellow"
            class="project-thumbnails"
            style={style}
          ></img>
        </a>
        <a href="https://github.com/Sara-Mill/Social_Network_API_NoSQL">
          <div class="d-flex justify-content-center align-items-center">
            <p class="project-links">Social Network API NoSql</p>
          </div>
          <img
            src={SNAPI}
            alt="Black background showing table of employees in white."
            class="project-thumbnails"
            style={style}
          ></img>
        </a>
        <a href="https://dear-reader-22-app.herokuapp.com/">
          <div id = "DEAR" class="d-flex justify-content-center align-items-center">
            <p class="project-links">Drop Everything And Read</p>
          </div>
          <img
            src={DEAR}
            alt="book opening up spreading light"
            class="project-thumbnails"
            style={style}
          ></img>
        </a>
      </div>
    </div>
  );
}
