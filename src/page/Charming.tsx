import React, { useEffect, useRef, useState } from "react";
import style from "../css/Charming.module.css";
import RightFixBar from "../component/RightFixBar";

function Charming() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <RightFixBar />
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
        <article id="challenge" className={style.challenge}>
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
      {/* 手機版圖片 */}
      <div id="phoneRWD" className={style.phoneImg}>
        <div className={style.charmingFImg}>
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
      <div id="concept" className={style.kickoff}>
        <div className={style.kickoffText}>
          <h1>概念發想</h1>
          <p>
            一開始我們在選擇專題主題時，第一的考量其實是組員們各自對於這個專題的期待，詢問了大家的專題目標，有人想做出令自己驕傲的網站，有人希望練習框架、擺在履歷上好看，有些人希望做出能夠後續發展，在市場上具有競爭力的網站。最後總結起來就是『不乏一點創新，但主要目的為精進大家coding技術的網站』。
          </p>
        </div>
        <div className={style.kickoffImg}>
          <button>
            <img
              src="http://localhost:3000/img/charming/firstThinking.webp"
              alt=""
            />
            <img src="http://localhost:3000/img/charming/target.webp" alt="" />
          </button>
        </div>
      </div>
      <section>
        <div id="marketingResearch" className={style.marketingResearch}>
          <img src="http://localhost:3000/img/charming/referTo.webp" alt="" />
          <div>
            <h1>市場調查</h1>
            <p>
              經過主題票選後，我們決定做「打工網」，於是開始參考市場現有的找工作平台，包含大陸的「豬八戒網」、台灣的「104、1111人力銀行」、「meet.jobs」、「小雞打工」，其中最打動我們的是——以色列創作者接案平台「fiverr」。fiverr的經營模式讓我們不禁反思：為什麼在台灣，專業技能不能像在蝦皮買東西一樣，容易取得、種類多樣、還能貨比三家呢？
            </p>
          </div>
        </div>
        <div id="referTo" className={style.marketingResearch}>
          <div>
            <h1>需求者環境評估</h1>
            <p>
              台灣是一個設計力豐沛的國家，除了2016年被選為世界設計之都，根據教育部截至108年度的統計，台灣共有109所大專院校開設藝術學門科系，學生總數達到10.2萬，過去20年已累積培養超過30萬名藝術領域的畢業生，在國際設計競賽中也是屢創佳績，如2022年世界1,973位IF設計得獎者中，就有205位來自台灣。
            </p>
          </div>
          <img src="http://localhost:3000/img/charming/referTo.webp" alt="" />
        </div>
        <div id="designFlow">
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