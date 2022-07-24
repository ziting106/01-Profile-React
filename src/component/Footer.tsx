import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import style from "../css/Footer.module.css";
function Footer() {
  const location = useLocation();
  let pageName = location.pathname;
  return (
    <div
      className={
        pageName == "/charming"
          ? `${style.footer} ${style.charmingFooter}`
          : `${style.footer}` && pageName == "/self-reliance"
          ? `${style.footer} ${style.selfRelianceFooter}`
          : `${style.footer}` && pageName == "/mom&baby"
          ? `${style.footer} ${style.momBabyFooter}`
          : `${style.footer}`
      }
    >
      <div>
        <a href="https://www.facebook.com/profile.php?id=100001521969089">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/angelica20220630/">
          <FaInstagram />
        </a>
        <a href="https://github.com/ziting106">
          <FaGithub />
        </a>
      </div>

      <p>Angelica since 2022</p>
    </div>
  );
}

export default Footer;
