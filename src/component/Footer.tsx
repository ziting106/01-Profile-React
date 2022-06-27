import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import style from "../css/Footer.module.css";
function Footer() {
  return (
    <div className={style.footer}>
      <div>
        <a href="https://www.facebook.com/profile.php?id=100001521969089">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/bebyadiary/">
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
