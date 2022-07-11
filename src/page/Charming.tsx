import React, { useEffect, useRef, useState } from "react";
import style from "../css/Charming.module.css";
import RightFixBar from "../component/RightFixBar";
import { stdout } from "process";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Charming() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let hash = window.location.hash;
  if (hash === "#sidemap") alert(hash);
  return (
    <>
      <div>
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
        <article
          id="challenge"
          className={`${style.challenge} ${style.changeColor}`}
          data-aos="fade"
        >
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
      {/* 設計流程 */}
      <div id="designFlow" className={style.backgroundColor} data-aos="fade">
        <figure>
          <img
            src="http://localhost:3000/img/charming/designFloor.webp"
            alt=""
          />
        </figure>
      </div>
      {/* 概念發想 */}
      <section id="concept" className={style.concept} data-aos="fade">
        <div>
          <h1>概念發想</h1>
          <p>
            一開始我們在選擇專題主題時，第一的考量其實是組員們各自對於這個專題的期待，詢問了大家的專題目標，有人想做出令自己驕傲的網站，有人希望練習框架、擺在履歷上好看，有些人希望做出能夠後續發展，在市場上具有競爭力的網站。最後總結起來就是『不乏一點創新，但主要目的為精進大家coding技術的網站』。
          </p>
        </div>
        <div>
          <img
            src="http://localhost:3000/img/charming/firstThinking.webp"
            alt=""
          />
          {/* <img src="http://localhost:3000/img/charming/target.webp" alt="" /> */}
        </div>
      </section>
      {/* 市場調查 */}
      <div
        id="marketingResearch"
        className={style.backgroundColor}
        data-aos="fade"
      >
        <div className={style.backgroundColorImg}>
          <img src="http://localhost:3000/img/charming/referTo.webp" alt="" />
        </div>
        <div className={style.backgroundColorText}>
          <h1>市場調查</h1>
          <p>
            經過主題票選後，我們決定做「打工網」，於是開始參考市場現有的找工作平台，包含大陸的「豬八戒網」、台灣的「104、1111人力銀行」、「meet.jobs」、「小雞打工」，其中最打動我們的是——以色列創作者接案平台「fiverr」。fiverr的經營模式讓我們不禁反思：為什麼在台灣，專業技能不能像在蝦皮買東西一樣，容易取得、種類多樣、還能貨比三家呢？
          </p>
        </div>
      </div>
      {/* 需求者環境評估 */}
      <section id="referTo" className={style.concept} data-aos="fade">
        <div className={style.referTo}>
          <h1>需求者環境評估</h1>
          <p>
            台灣是一個設計力豐沛的國家，除了2016年被選為世界設計之都，根據教育部截至108年度的統計，台灣共有109所大專院校開設藝術學門科系，學生總數達到10.2萬，過去20年已累積培養超過30萬名藝術領域的畢業生，在國際設計競賽中也是屢創佳績，如2022年世界1,973位IF設計得獎者中，就有205位來自台灣。
          </p>
        </div>
        <div>
          <img src="http://localhost:3000/img/charming/graduater.webp" alt="" />
          <p>大專校院藝術學門開設校數及學生數</p>
        </div>
      </section>
      {/* sidemap */}
      <div id="sidemap" className={style.sidemap} data-aos="fade">
        <figure>
          <img src="http://localhost:3000/img/charming/sideMap.webp" alt="" />
        </figure>
      </div>
      {/* wireframe */}
      <section id="wireframe" className={style.wireframe} data-aos="fade">
        <div className={style.text}>
          <h1>Wireframe</h1>
          <p>
            採用Figma繪製，在Wireframe部分我負責首頁和活動頁面，首頁分為登入前、登入後兩種，這樣區分的目的是讓初次來到網站的人可以透過登入前首頁來認識網站，登入後則出現一些客製化的網站資訊。
          </p>
        </div>
        <img src="http://localhost:3000/img/charming/wireframe.webp" alt="" />
      </section>
      {/* style guide */}
      <div id="styleGuide" className={style.styleGuide} data-aos="fade">
        <figure>
          <div className={style.text}>
            <h1>Style Guide</h1>
            <p></p>
          </div>
          <div className={style.styleGuideImg}>
            <img
              src="http://localhost:3000/img/charming/styleGuide1.webp"
              alt=""
            />
            <img
              src="http://localhost:3000/img/charming/styleGuide2.webp"
              alt=""
            />
            <img
              src="http://localhost:3000/img/charming/styleGuide3.webp"
              alt=""
            />
            <img
              src="http://localhost:3000/img/charming/styleGuide4.webp"
              alt=""
            />
            <img
              src="http://localhost:3000/img/charming/styleGuide5.webp"
              alt=""
            />
            <img
              src="http://localhost:3000/img/charming/styleGuide6.webp"
              alt=""
            />
            <img
              src="http://localhost:3000/img/charming/styleGuide7.webp"
              alt=""
            />
            <img
              src="http://localhost:3000/img/charming/styleGuide8.webp"
              alt=""
            />
            <img
              src="http://localhost:3000/img/charming/styleGuide9.webp"
              alt=""
            />
            <img
              src="http://localhost:3000/img/charming/styleGuide10.webp"
              alt=""
            />
          </div>
        </figure>
      </div>
      {/* Mockup */}
      <section id="mockup" className={style.mockup} data-aos="fade">
        <div className={style.text}>
          <h1>Mockup</h1>
          <p></p>
        </div>
        <div>
          <img
            src="http://localhost:3000/img/charming/mockup/mockupTotal.webp"
            alt=""
          />
        </div>
      </section>
      {/* Prototype */}
      <div id="prototype" className={style.prototype} data-aos="fade">
        <div className={style.text}>
          <h1>Prototype</h1>
          <p></p>
        </div>
        <div className={style.prototypeImg}>
          <div>
            <p>首頁</p>
            <img
              src={`http://localhost:3000/img/charming/web/mainpage.jpg`}
              alt=""
            />
          </div>
          <div>
            <p>商品首頁</p>
            <img
              src={`http://localhost:3000/img/charming/web/mainpage_product.jpg`}
              alt=""
            />
          </div>
          <div>
            <p>商品詳細頁</p>
            <img
              src={`http://localhost:3000/img/charming/web/productdetail.jpg`}
              alt=""
            />
          </div>
          <div>
            <p>購物流程一：開始結帳</p>
            <img
              src={`http://localhost:3000/img/charming/web/cart1.jpg`}
              alt=""
            />
          </div>
          <div>
            <p>購物流程二：確認訂單</p>
            <img
              src={`http://localhost:3000/img/charming/web/cart2.jpg`}
              alt=""
            />
          </div>
          <div>
            <p>賣家中心</p>
            <img
              src={`http://localhost:3000/img/charming/web/mySell_product.jpg`}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* 手機版RWD */}
      <section id="phoneRWD" className={style.phoneRWD} data-aos="fade">
        <div className={style.text}>
          <h1>RWD</h1>
          <p></p>
        </div>
        <div className={style.phoneImg}>
          <div className={style.charmingFImg}>
            <img
              src="http://localhost:3000/img/charming/phone/charming1.png"
              alt=""
            />
            <img
              src="http://localhost:3000/img/charming/phone/charming2.png"
              alt=""
            />
            <img
              src="http://localhost:3000/img/charming/phone/charming3.png"
              alt=""
            />
            <img
              src="http://localhost:3000/img/charming/phone/charming4.png"
              alt=""
            />
            <img
              src="http://localhost:3000/img/charming/phone/charming5.png"
              alt=""
            />
            <img
              src="http://localhost:3000/img/charming/phone/charming6.png"
              alt=""
            />
            <img
              src="http://localhost:3000/img/charming/phone/charming7.png"
              alt=""
            />
            <img
              src="http://localhost:3000/img/charming/phone/charming8.png"
              alt=""
            />
            <img
              src="http://localhost:3000/img/charming/phone/charming9.png"
              alt=""
            />
            <img
              src="http://localhost:3000/img/charming/phone/charming10.png"
              alt=""
            />
            <img
              src="http://localhost:3000/img/charming/phone/charming11.png"
              alt=""
            />
          </div>
          <div className={style.colorlass}></div>
        </div>
        <a href="https://github.com/Billy302/Charming" className={style.github}>
          <button> Github {"→"} </button>
        </a>
      </section>
      <RightFixBar />
    </>
  );
}

export default Charming;
