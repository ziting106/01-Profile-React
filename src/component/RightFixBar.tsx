import React from "react";
import style from "../css/RightFixBar.module.css";

function RightFixBar() {
  return (
    <div>
      <ul className={style.rightFixBar}>
        <li>
          <a href="#top">回到最上</a>
        </li>
        <li>
          <a href="#challenge">專題簡介與挑戰</a>
        </li>
        <li>
          <a href="#phoneRWD">手機版RWD演示</a>
        </li>
        <li>
          <a href="#concept">概念發想</a>
        </li>
        <li>
          <a href="#marketingResearch">市場調查</a>
        </li>
        <li>
          <a href="#referTo">需求者環境評估</a>
        </li>
        <li>
          <a href="#designFlow">設計流程</a>
        </li>
        <li>
          <a href="#referTo">Wireframe</a>
        </li>
        <li>
          <a href="#referTo">Style Guide</a>
        </li>
        <li>
          <a href="#referTo">Mockup</a>
        </li>
        <li>
          <a href="#referTo">Prototype</a>
        </li>
      </ul>
    </div>
  );
}

export default RightFixBar;
