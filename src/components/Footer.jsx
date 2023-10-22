import React from "react";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import "../styles/footer.css";

const info = [
  "mail icon",
  "dirección icon",
  "tel icon",
  "whatsapp icon",
  "redes 1 icon",
  "redes 2 icon",
];

function Footer() {
  return (
    <div className="footer-main-container">
      <div className="us-container">
        <a href="/us" target="_blank" rel="noopener noreferrer">
          us
        </a>
      </div>
      <div className="media-container">
        <div className="ig-container">
          <a
            href="http://instagram.com/liston_rosa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="" />
          </a>
        </div>

        <div className="fb-container">
          <a
            href="http://facebook.com/listonrosa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="" />
          </a>
        </div>
      </div>

      <div className="contact-container">
        {info.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </div>
    </div>
  );
}

export default Footer;
