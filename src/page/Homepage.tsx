import React, { useState } from "react";
import style from "../css/Homepage.module.css";
import LazyLinePainter from "lazy-line-painter";
import { BsArrowDown } from "react-icons/bs";

function MainPage() {
  // let el = document.querySelector("#bibiya");
  // let config = { strokeWidth: 10 };
  // let myAnimation = new LazyLinePainter(el, config);
  // myAnimation.paint();
  const [typebar, setNavbar] = useState(false);

  const displayItemType = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", displayItemType);

  return (
    <div>
      <header className={style["mainpage-header"]}>
        <nav>
          <div className={style.logoName}>
            <img src={`https://bibiya.tw/img/appleLogo.gif`} />
            <a href="">Angelica Liu</a>
          </div>
          <div className={style.item}>
            <a className={style.itemactive} href="">
              設計專案
            </a>
            {/* <a href="">繪畫</a> */}
            <a href="">關於我</a>
            <a href="https://www.cakeresume.com/s--D2KiLan6MGxtg3JIPfRrAA--/bibiya">
              履歷
            </a>
          </div>
        </nav>

        <hgroup>
          <p>歡迎參觀我的作品集</p>
          <p>&#x1F44B; Hi! 我是劉芷廷</p>
          <p>一名產品設計師</p>
          <p>畢業於國立高雄科技大學創新設計工程系。</p>
          <BsArrowDown className={style.icon} />
        </hgroup>
      </header>

      <div className={style.charming}>
        <a href="">
          <p>01 - Charming 柴米網</p>
          <p>2022/01 - 2022/06</p>
          <p>
            柴米網是一個專門販售專業技能的電商平台，
            提供給創作者一個無需比稿、自由自在的商業創作空間，
            並且讓所有創作者可以在平台上與其他的會員交流意見、觀看彼此的作品集，並會由官方提供最新的設計資訊給所有的網站用戶。
          </p>
        </a>
        <a href="" className={style.introduceImg}>
          <div>
            <img
              src={`https://bibiya.tw/img/2022-homepage/web/mainpage.png`}
              alt=""
            />
            <p>首頁</p>
          </div>
          <div>
            <img
              src={`https://bibiya.tw/img/2022-homepage/web/mainpage_product.png`}
              alt=""
            />
            <p>商品首頁</p>
          </div>
          <div>
            <img
              src={`https://bibiya.tw/img/2022-homepage/web/productdetail.png`}
              alt=""
            />
            <p>商品詳細頁</p>
          </div>
          <div>
            <img
              src={`https://bibiya.tw/img/2022-homepage/web/cart1.png`}
              alt=""
            />
            <p>購物流程一：開始結帳</p>
          </div>
          <div>
            <img
              src={`https://bibiya.tw/img/2022-homepage/web/cart2.png`}
              alt=""
            />
            <p>購物流程二：確認訂單</p>
          </div>
          <div>
            <img
              src={`https://bibiya.tw/img/2022-homepage/web/mySell_product.png`}
              alt=""
            />
            <p>賣家中心</p>
          </div>
        </a>
      </div>
      <div className={style.if}>
        <a href="">
          <p>02 - Self-Reliance 難民自立救助APP</p>
          <p>2017/01 - 2017/06</p>
          <p>
            促進難民與當地社會的連結，讓他們能夠藉由短期的工作或成為志工，來獲取在地人民的認同感，並有更多機會與他們成為朋友，進而減少人民對難民的恐懼與偏見。而難民也能因此獲得報酬，立即得解決當前遇到的生活困難，最終達到預防犯罪的效果。
          </p>
        </a>
        <a href="" className={style.ifImg}>
          <div>
            <img
              src={`https://bibiya.tw/img/2022-homepage/self-reliance.png`}
              alt=""
            />
            <p>概念設計表版</p>
          </div>
          <div>
            <img
              src={`https://bibiya.tw/img/2022-homepage/design-talent-award.png`}
              alt=""
            />
            <p>IF Design Talent Award</p>
          </div>
        </a>
      </div>
      <div className={style.momBaby}>
        <a href="">
          <p>03 - Mom＆Baby 嬰兒護理床邊床</p>
          <p>2017/12 - 2018/06</p>
          <p>
            新生寶寶特別需要細心照顧，因此我們將三種媽媽最常使用的嬰兒床功能：
          </p>
          <p>
            換尿布的護理台、搖床和床邊床做結合， 使媽媽照顧寶寶時更方便優雅。
          </p>
        </a>
        <a href="" className={style.momBabyImg}>
          <div>
            <img
              src={`https://bibiya.tw/img/2022-homepage/Mom&Baby.jpg`}
              alt=""
            />
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/TNYtCwUVT6Q"
              allowFullScreen
            ></iframe>
          </div>
        </a>
      </div>
    </div>
  );
}

export default MainPage;
