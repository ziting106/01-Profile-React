import React, { useEffect } from "react";
import { useState } from "react";
import style from "../css/Homepage.module.css";
import { BsArrowDown } from "react-icons/bs";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
// const navbar = document.getElementById("navbar");
// const sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.scrollY >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [typebar, slideinUp] = useState(false);

  const displayItemType = () => {
    if (window.scrollY >= 20) {
      slideinUp(true);
    } else {
      slideinUp(false);
    }
  };
  const [typebar1, slideinUp1] = useState(false);

  const displayItemType1 = () => {
    if (window.scrollY >= 800) {
      slideinUp1(true);
    } else {
      slideinUp1(false);
    }
  };
  const [typebar2, slideinUp2] = useState(false);

  const displayItemType2 = () => {
    if (window.scrollY >= 1500) {
      slideinUp2(true);
    } else {
      slideinUp2(false);
    }
  };

  window.addEventListener("scroll", displayItemType, { passive: true });
  window.addEventListener("scroll", displayItemType1, { passive: true });
  window.addEventListener("scroll", displayItemType2, { passive: true });

  return (
    <section>
      <header className={style["mainpage-header"]}>
        <hgroup>
          <p>歡迎參觀我的作品集</p>
          <p>&#x1F44B; Hi! 我是劉芷廷</p>
          <p>一名產品設計師</p>
          <p>畢業於國立高雄科技大學創新設計工程系。</p>
          <BsArrowDown className={style.icon} />
        </hgroup>
      </header>

      <div className={style.charming}>
        <div className={typebar ? `${style.slideinUP}` : `${style.noneSlide}`}>
          <Link to={`/charming`}>
            <p>01 - Charming 柴米網</p>
            <p>2022/01 - 2022/06</p>
            <p>
              柴米網是一個專門販售專業技能的電商平台，
              提供給創作者一個無需比稿、自由自在的商業創作空間，
              並且讓所有創作者可以在平台上與其他的會員交流意見、觀看彼此的作品集，並會由官方提供最新的設計資訊給所有的網站用戶。
            </p>
          </Link>
          <Link to={`/charming`} className={style.introduceImg}></Link>
        </div>
      </div>
      <div className={style.if}>
        <div className={typebar1 ? `${style.slideinUP}` : `${style.noneSlide}`}>
          <Link to={`/self-reliance`}>
            <p>02 - Self-Reliance 難民自立救助APP</p>
            <p>2017/01 - 2017/06</p>
            <p>
              促進難民與當地社會的連結，讓他們能夠藉由短期的工作或成為志工，來獲取在地人民的認同感，並有更多機會與他們成為朋友，進而減少人民對難民的恐懼與偏見。而難民也能因此獲得報酬，立即得解決當前遇到的生活困難，最終達到預防犯罪的效果。
            </p>
          </Link>
          <Link to={`/self-reliance`} className={style.ifImg}>
            <div>
              <img
                src={`http://localhost:3000/img/2022-homepage/self-reliance.jpg`}
                alt=""
              />
              <p>概念設計表版</p>
            </div>
            <div>
              <img
                src={`http://localhost:3000/img/2022-homepage/design-talent-award.jpg`}
                alt=""
              />
              <p>IF Design Talent Award</p>
            </div>
          </Link>
        </div>
      </div>
      <div className={style.momBaby}>
        <div className={typebar2 ? `${style.slideinUP}` : `${style.noneSlide}`}>
          <Link to={`/mom&baby`}>
            <p>03 - Mom＆Baby 嬰兒床邊床</p>
            <p>2017/12 - 2018/06</p>
            <p>
              新生寶寶特別需要細心照顧，因此我們將三種媽媽最常使用的嬰兒床功能：
            </p>
            <p>
              換尿布的護理台、搖床和床邊床做結合， 使媽媽照顧寶寶時更方便優雅。
            </p>
          </Link>
          <Link to={`/mom&baby`}>
            <div className={style.momBabyImg}>
              <img
                src={`http://localhost:3000/img/2022-homepage/Mom&Baby.jpg`}
                alt=""
              />
              <div className={style.video}>
                <iframe
                  title="Mom & Baby"
                  src="https://www.youtube.com/embed/TNYtCwUVT6Q"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
