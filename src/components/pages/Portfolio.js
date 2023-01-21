import React from "react";
import JATE from "../../images/JATE.png";
import SNAPI from "../../images/SNAPI.png";
import DEAR from "../../images/DEAR.png";
import KYA from "../../images/KYA.png";
import CHOICE from "../../images/CHOICE.png";
import RTG from "../../images/RTG.png";
import PW_G from "../../images/PW_G.png";
import style from "./portfolio.css";
import { FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <div>
      <h1>Portfolio </h1>
      <div className="images-container-outer">
        <div className="images-container">
          <div>
            <a
              href="https://github.com/Sara-Mill/Artist-Profile"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub color="black" size="34px" />
            </a>
            <a
              href="https://sara-mill.github.io/Artist-Profile/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="project-links">
                Collaboration on a REST API: Artist-Profile
              </p>
              <img
                src={KYA}
                alt="Black background showing with list of top 5 tracks on the left, and a youtube video by the artist on the right."
                className="project-thumbnails"
              ></img>
            </a>
          </div>
        </div>

        <div className="images-container">
          <div>
            <a
              href="https://github.com/Sara-Mill/PWA-text-editor"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub color="black" size="34px" />
            </a>
            <a
              href="https://pwa-jate-mystic-app.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              <p className="project-links">Progressive Web Application</p>
              <img
                src={JATE}
                alt="Black background, with text editor in yellow."
                className="project-thumbnails"
              ></img>
            </a>
          </div>
        </div>

        <div className="images-container">
          <div>
            <a
              href="https://github.com/LizBailey75/DEAR-Reader"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub color="black" size="34px" />
            </a>
            <a
              href="https://dear-reader-22-app.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="project-links">
                Collaboration on a SQL Database: Drop Everything and Read
              </p>
              <img
                src={DEAR}
                alt="book opening up spreading light"
                className="project-thumbnails"
              ></img>
            </a>
          </div>
        </div>

        <div className="images-container">
        <div>
          <a
            href="https://github.com/Sara-Mill/New-Password-Generator"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub color="black" size="34px" />
          </a>
          <a
            href="https://sara-mill.github.io/New-Password-Generator/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="project-links">
              Vanilla Javascript: Password Generator
            </p>
            <img
              src={PW_G}
              alt="white background with dashed boxes displaying generated password, and a red button below"
              className="project-thumbnails"
            ></img>
          </a>
        </div>
      </div>
     
      <div className="images-container">
        <div>
          <a
            href="https://github.com/Sara-Mill/random_team_generator"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub color="black" size="34px" />
          </a>
          <a
            href="https://random-human-picker.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="project-links">React Random Team Generator</p>
            <img
              src={RTG}
              alt="back background with large blue react icon spinning in center, and a toggle bar at top"
              className="project-thumbnails"
            ></img>
          </a>
        </div>
      </div>

      <div className="images-container">
        <div>
          <a
            href="https://github.com/Sara-Mill/Social_Network_API_NoSQL"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub color="black" size="34px" />
          </a>
          <a
            href="https://github.com/Sara-Mill/Social_Network_API_NoSQL"
            target="_blank"
            rel="noreferrer"
          >
            <p className="project-links">Social Network API NoSQL</p>
            <img
              src={SNAPI}
              alt="Black background showing table of employees in white."
              className="project-thumbnails"
            ></img>
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}
