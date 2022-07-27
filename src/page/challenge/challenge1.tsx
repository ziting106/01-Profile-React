import React from "react";

function challenge1() {
  let guessScore = Math.trunc(Math.random() * 20) + 1;
  console.log(guessScore);
  //   let score = document.querySelector(".score").textContent;
  //   let highscore = 0;

  // 太常出現的程式碼創一個function放它
  //   const message = function (message: string) {
  //     document.querySelector(".message").textContent = message;
  //   };
  /*-------------------------------*/

  // 重新開始遊戲，將一切數值還原成最原本樣態
  //   document.querySelector(".again").addEventListener("click", function () {
  //     guessScore = Math.trunc(Math.random() * 20) + 1;
  //     console.log(guessScore);
  //     message("Start guessing...");
  //     document.querySelector(".guess").value = "";
  //     document.querySelector("body").style.backgroundColor = "#222";
  //     score = 20;
  //     document.querySelector(".score").textContent = 20;
  //     document.querySelector(".number").textContent = "?";
  //   });
  /*-------------------------------*/

  // 簡化的寫法
  //   document.querySelector(".check").addEventListener("click", function () {
  //     const inputScore = Number(document.querySelector(".guess").value);
  //     if (guessScore === inputScore) {
  //       message("恭喜過關！❤️😍");
  //       document.querySelector(".number").textContent = guessScore;
  //       document.querySelector("body").style.backgroundColor = "#60B6DB";
  //       // 紀錄最高分
  //       highscore = score > highscore ? score : highscore;
  //       // 呈現最高分
  //       document.querySelector(".highscore").textContent = highscore;
  //     } else {
  //       if (score > 1) {
  //         message(guessScore < inputScore ? "低一點👇🏻！" : "高一點☝🏻！");
  //         score--;
  //         document.querySelector(".score").textContent = score;
  //       } else {
  //         message("🤪輸囉！");
  //         document.querySelector("body").style.backgroundColor = "red";
  //         document.querySelector(".number").textContent = guessScore;
  //       }
  //     }
  //   });
  /*-------------------------------*/
  return (
    <div>
      <header className="tyy">
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again">Again!</button>
        <div className="number">?</div>
      </header>
      <main>
        <section className="left">
          <input type="number" className="guess" />
          <button className="btn check">Check!</button>
        </section>
        <section className="right">
          <p className="message">Start guessing...</p>
          <p className="label-score">
            💯 Score: <span className="score">20</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">0</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default challenge1;
