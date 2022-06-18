import React from "react";
import style from "./Homepage.module.css";
import LazyLinePainter from "lazy-line-painter";

function MainPage() {
  // let el = document.querySelector("#bibiya");
  // let config = { strokeWidth: 10 };
  // let myAnimation = new LazyLinePainter(el, config);
  // myAnimation.paint();

  return (
    <div>
      <header>
        <nav className={style.navbar}>
          <div className={style.logo}>
            <img
              className={style.logo}
              src={`http://localhost:3000/img/appleLogo.gif`}
            />
            <a href="" className={style.name}>
              Angelica Liu
            </a>
          </div>
          <div className={style.item}>
            <a className={style.itemactive} href="">
              設計專案
            </a>
            <a href="">關於我</a>
            <a href="">履歷</a>
            <a href="">聯絡我</a>
          </div>
        </nav>
        <hgroup>
          <p>很高興見到你。</p>
          <p>歡迎參觀我的作品集</p>
          <p>Hi!我是劉芷廷，一名產品設計師，畢業於高雄科技大學創新設計工程系</p>
        </hgroup>
      </header>
    </div>
  );
}

export default MainPage;
