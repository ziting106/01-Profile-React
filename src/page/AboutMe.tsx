import React, { useState, useEffect } from "react";
import style from "../css/AboutMe.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
// 返回顶部

function AboutMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [typebar, setNavbar] = useState(false);

  const displayItemType = () => {
    if (window.scrollY) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", displayItemType);
  return (
    <section className={style.aboutMe} id="apple">
      <div className={style.myPicture}>
        <p>&#x1F44B; Hi! 我是劉芷廷</p>
        <p>Product Designer</p>
        <p>UI/UX Designer</p>
      </div>

      <div className={style.mypic} data-aos="fade-up" data-aos-duration="1000">
        <img src="http://localhost:3000/img/myPic/mypic6.gif" alt="" />
        <div>
          <p>
            2022年6月從資展國際前端班畢業，我是一名產品設計師、前端程式初學者，2022年6月從資展國際前端班畢業，接受了588個小時的前端課程訓練，除了HTML、CSS、JavaScript外，也學習了PHP、React、Reasrful
            API、Node.js和MySQL。能以React框架獨立切版出無須後端資料庫的網站，並製作RWD響應式網站。
          </p>
        </div>
      </div>
      <div className={style.mypic} data-aos="fade-up" data-aos-duration="1000">
        <img src="http://localhost:3000/img/myPic/mypic7.jpg" alt="" />
        <div>
          <p>
            在2019~2021的一年半裡，我短暫的成為了廚師，遇到了一群很棒的伙伴和一位不斷推動我進步的主廚，每天都在SPRINT，每天都在學習，每天都需要與伙伴們密集的溝通、無間的合作，在廚房，『做』比『想』重要的多，溝通』與『人和』是職場幸福度的核心。
          </p>
        </div>
      </div>
      <div className={style.mypic} data-aos="fade-up" data-aos-duration="1000">
        <img src="http://localhost:3000/img/myPic/mypic2.jpg" alt="" />
        <div>
          <p>
            很慶幸我總是遇到許多溫暖並充滿活力的人，大學好朋友、主廚、我的室友們等等，
            我喜歡團隊合作、組隊打怪，喜歡大家很有效率一起達成目標的感覺，希望自己同樣帶給別人開心與歡笑，設計出好的產品，溫暖這個世界一點點。
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
