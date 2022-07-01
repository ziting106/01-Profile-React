import React, { useEffect } from "react";
import style from "../css/Charming.module.css";

function Charming() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={style.charming}>
        <img src="http://localhost:3000/img/charming.png" alt="" />
      </div>
      <section>
        <hgroup className={style.project}>
          <h1>PROJECT：</h1>
          <p>Charming柴米網</p>
          <h1>ROLE：</h1>
          <p>網站切版、RWD、主視覺</p>
          <h1>DURATION：</h1>
          <p>Jan - June 2022</p>
        </hgroup>
        <article className={style.challenge}>
          <div>
            <h1>專題簡介：</h1>
            <p>
              柴米網是一個專門販售專業技能的電商平台，無論您的才華為何，
              也許是設計一個網站，也許是幫人組個最強的遊戲牌組，我們都將為您轉化為財富！
              提供給創作者一個無需比稿、自由自在的商業創作空間，
              並且讓所有創作者可以在平台上與其他的會員交流意見、觀看彼此的作品集，並會由官方提供最新的設計資訊給所有的網站用戶。
            </p>
          </div>
          <ul>
            <h1>遇到的挑戰：</h1>
            <a href="/">
              <li>團隊間CSS互相影響怎麼辦？</li>
            </a>
            <a href="/">
              <li>資料庫圖片變數讀取不到？</li>
            </a>
            <a href="/">
              <li>如何串接後端API？</li>
            </a>
            <a href="/">
              <li>Deadline快到了完成度還很低怎麼辦？</li>
            </a>
          </ul>
        </article>
      </section>
      <div className={style.phoneImg}>
        <div>
          <img src="http://localhost:3000/img/charming/charming1.png" alt="" />
          <img src="http://localhost:3000/img/charming/charming2.png" alt="" />
          <img src="http://localhost:3000/img/charming/charming3.png" alt="" />
          <img src="http://localhost:3000/img/charming/charming4.png" alt="" />
          <img src="http://localhost:3000/img/charming/charming5.png" alt="" />
          <img src="http://localhost:3000/img/charming/charming6.png" alt="" />
          <img src="http://localhost:3000/img/charming/charming7.png" alt="" />
          <img src="http://localhost:3000/img/charming/charming8.png" alt="" />
          <img src="http://localhost:3000/img/charming/charming9.png" alt="" />
          <img src="http://localhost:3000/img/charming/charming10.png" alt="" />
          <img src="http://localhost:3000/img/charming/charming11.png" alt="" />
        </div>
        <div className={style.colorlass}></div>
      </div>
      <section>
        <div>
          <img
            src="http://localhost:3000/img/charming/designFlow.webp"
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default Charming;
