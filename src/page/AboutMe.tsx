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
        <img src="https://bibiya.tw/img/myPic/mypic6.gif" alt="" />
        <div>
          <p>
            2022年6月我剛從資展國際前端班畢業，接受了588個小時的前端課程訓練，最擅長HTML、CSS和JavaScript，也概略的學習了PHP、React、Node.js和MySQL。
          </p>
        </div>
      </div>
      <div className={style.mypic} data-aos="fade-up" data-aos-duration="1000">
        <img src="https://bibiya.tw/img/myPic/mypic7.jpg" alt="" />
        <div>
          <p>
            在2019~2021的一年半裡，我成為了廚師，遇到了一群很棒的伙伴和一位不斷推動我進步的主廚，能夠把工作流程做的流暢順遂是我最開心的事。
          </p>
        </div>
      </div>
      <div className={style.mypic} data-aos="fade-up" data-aos-duration="1000">
        <img src="https://bibiya.tw/img/myPic/mypic2.jpg" alt="" />
        <div>
          <p>
            很慶幸我總是遇到許多溫暖並充滿活力的人，我喜歡團隊合作、組隊打怪，喜歡大家很有效率一起達成目標的感覺，希望自己成為一個對社會有貢獻的人。
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
