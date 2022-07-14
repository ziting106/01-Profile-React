import React, { useEffect } from "react";
import { useState } from "react";
import style from "../css/Homepage.module.css";
import { BsArrowDown } from "react-icons/bs";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <header className={style["mainpage-header"]}>
        <hgroup>
          <p>歡迎參觀我的作品集</p>
          <p>&#x1F44B; Hi! 我是劉芷廷</p>
          <p>產品設計師</p>
          <p>網頁視覺設計師</p>
          <BsArrowDown className={style.icon} />
        </hgroup>
      </header>

      <div className={style.charming}>
        <h1 data-aos="slide-up" data-aos-duration="1000">
          01 - Charming 柴米網
        </h1>
        <p data-aos="slide-up" data-aos-duration="1000">
          2022/01 - 2022/06
        </p>

        <div
          className={style.videoCharming}
          data-aos="slide-up"
          data-aos-duration="1000"
        >
          <p>
            柴米網是一個專門販售專業技能的電商平台，
            提供給創作者一個無需比稿、自由自在的商業創作空間，
            並且讓所有創作者可以在平台上與其他的會員交流意見、觀看彼此的作品集，並會由官方提供最新的設計資訊給所有的網站用戶。
          </p>
          <div>
            <iframe
              title="charming"
              src="https://www.youtube.com/embed/DOxdF6H7_KE"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className={style.seeMore} data-aos="fade" data-aos-duration="1000">
          <Link to={`/charming`}>
            <button>看更多 →</button>
          </Link>
        </div>
      </div>

      <div className={style.if}>
        <div data-aos="slide-up" data-aos-duration="1000">
          <hgroup>
            <Link to={`/self-reliance`}>
              <p>02 - Self-Reliance 難民自立救助APP</p>
              <p>2017/01 - 2017/06</p>
            </Link>
          </hgroup>
          <div className={style.ifImg}>
            <p>
              促進難民與當地社會的連結，讓他們能夠藉由短期工作、成為志工來獲取在地人民的認同感，並有更多機會減少當地人民對難民的恐懼與偏見。而難民也能因此獲得報酬，立即解決當前遇到的生活困難，進而達到預防犯罪的效果。
            </p>
            <div>
              <img
                src={`http://localhost:3000/img/2022-homepage/design-talent-award.jpg`}
                alt=""
              />
              <p>IF Design Talent Award</p>
            </div>
          </div>
        </div>
        <div className={style.seeMore} data-aos="fade" data-aos-duration="1000">
          <Link to={`/self-reliance`}>
            <button>看更多 →</button>
          </Link>
        </div>
      </div>
      <div className={style.momBaby}>
        <div data-aos="slide-up" data-aos-duration="1000">
          <hgroup>
            <Link to={`/mom&baby`}>
              <p>03 - Mom＆Baby 嬰兒床邊床</p>
              <p>2017/12 - 2018/06</p>
            </Link>
          </hgroup>
          <div className={style.videoCharming}>
            <p>
              新生寶寶特別需要細心照顧，因此我們將三種媽媽最常使用的嬰兒床功能：換尿布的護理台、搖床和床邊床做結合，
              使媽媽照顧寶寶時更方便優雅。
            </p>
            <div className={style.video}>
              <iframe
                title="Mom & Baby"
                src="https://www.youtube.com/embed/TNYtCwUVT6Q"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div
            className={style.seeMore}
            data-aos="fade"
            data-aos-duration="1000"
          >
            <Link to={`/mom&baby`}>
              <button>看更多 →</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
