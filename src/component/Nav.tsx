import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import style from "../css/Nav.module.css";

import AboutMe from "../page/AboutMe";
function Nav() {
  // let pageURL = new URL("https://bibiya.com/about");
  const location = useLocation();
  let pageName = location.pathname;
  // alert(pageName);
  return (
    <div className={style.navBar}>
      <nav>
        <div className={style.logoName}>
          <img src={`http://localhost:3000/img/appleLogo.gif`} />
          <Link to={`/`}>Angelica Liu</Link>
        </div>
        <div className={style.item}>
          <Link
            to={`/`}
            className={pageName == "/" ? `${style.itemactive}` : ""}
          >
            設計專案
          </Link>
          <Link
            to={`/about`}
            className={pageName == "/about" ? `${style.itemactive}` : ""}
          >
            關於我
          </Link>
          <Link
            to={`/resume`}
            className={pageName == "/resume" ? `${style.itemactive}` : ""}
          >
            履歷
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
