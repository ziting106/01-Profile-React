import React from "react";
import Style from "./MainPage.module.css";
import myPicture from "../../assets/mypicture1.jpg";

function MainPage() {
  return (
    <div>
      <header>
        <nav className={Style.navbar}>
          <a>Angelica Liu</a>
          <a>網頁設計</a>
          <a>工業設計</a>
          <a>業餘愛好</a>
          <a>
            聯絡我
            <button>line:</button>
            <button>phone:</button>
            <button>mail:</button>
          </a>
        </nav>
          <img className={Style.myPicture} src={myPicture} alt="myPicture" />
      </header>
    </div>
  );
}

export default MainPage;
