import React from "react";
import ReactDOM from "react-dom";
import { useLocation, useParams, Link } from "react-router-dom";
import style from "../css/Nav.module.css";

import AboutMe from "../page/AboutMe";

// document.querySelector("#apple").onclick = () => {
//   scrollTo(0, 0);
// };
// 抓到瀏覽器路徑來讓navBar的項目在被點擊後更換style
function Nav() {
  // let pageURL = new URL("https://bibiya.com/about");
  const location = useLocation();
  let pageName = location.pathname;
  // alert(pageName);
  return (
    <div id="apple" className={style.navBar}>
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
            id="apple"
            to={`/about`}
            className={pageName == "/about" ? `${style.itemactive}` : ""}
          >
            關於我
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
