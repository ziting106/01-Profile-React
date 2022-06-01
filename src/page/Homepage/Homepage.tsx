import React from "react";
import Homepage from "./Homepage.module.css";
import logo from "../../img/appleLogo.gif";

function MainPage() {
  return (
    <div>
      <header>
        <nav className={Homepage.navbar}>
          <div>
            <img className={Homepage.logo} src={logo} />
            <a href="">Angelica Liu</a>
          </div>
          <div>
            <a href="">設計專案</a>
            <a href="">關於我</a>
            <a href="">履歷</a>
            <a href="">聯絡我</a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default MainPage;
