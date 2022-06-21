import React, { useState } from "react";
import style from "../css/AboutMe.module.css";
var pageName = "about";

function AboutMe() {
  const [typebar, setNavbar] = useState(false);

  const displayItemType = () => {
    if (window.scrollY) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", displayItemType);
  return (
    <div className={style.aboutMe}>
      <div className={style.myPicture}>
        <p>&#x1F44B; Hi! 我是劉芷廷</p>
        <p>Product Designer</p>
        <p>UI/UX Designer</p>
      </div>
      <img src="http://localhost:3000/img/myPicture2.gif" alt="" />
    </div>
  );
}

export default AboutMe;
