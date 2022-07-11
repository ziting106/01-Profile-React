import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import style from "../css/RightFixBar.module.css";

function RightFixBar() {
  const location = useLocation();
  let hash = location.hash;

  // 如何消除URL受到跳轉連結影響的問題？
  //   anchorPoint(idName){
  //   document.querySelector(idName).scrollIntoView(true);
  // }

  // const topH1 = document.getElementById("topH1");
  // topH1.scrollIntoView(true);
  // const tobtmH1 = document.getElementById("tobtmH1");
  // tobtmH1.scrollIntoView(false);

  return (
    <div>
      {/* <div>
        <h1 id="topH1">1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
        <h1>5</h1>
        <h1>6</h1>
        <h1 id="tobtmH1">7</h1>
      </div> */}

      <ul className={style.rightFixBar}>
        <li>
          <a
            href="#top"
            className={
              hash == "#top" ? `${style.changeColor}` : `${style.textcolor}`
            }
          >
            Top
          </a>
        </li>
        <li>
          <a
            href="#challenge"
            className={
              hash == "#challenge"
                ? `${style.changeColor}`
                : `${style.textcolor}`
            }
          >
            專題簡介與挑戰
          </a>
        </li>
        <li>
          <a
            href="#designFlow"
            className={
              hash == "#designFlow"
                ? `${style.changeColor}`
                : `${style.textcolor}`
            }
          >
            設計流程
          </a>
        </li>
        <li>
          <a
            href="#concept"
            className={
              hash == "#concept" ? `${style.changeColor}` : `${style.textcolor}`
            }
          >
            概念發想
          </a>
        </li>
        <li>
          <a
            href="#marketingResearch"
            className={
              hash == "#marketingResearch"
                ? `${style.changeColor}`
                : `${style.textcolor}`
            }
          >
            市場調查
          </a>
        </li>
        <li>
          <a
            href="#referTo"
            className={
              hash == "#referTo" ? `${style.changeColor}` : `${style.textcolor}`
            }
          >
            需求者環境評估
          </a>
        </li>
        <li>
          <a
            href="#sidemap"
            className={
              hash == "#sidemap" ? `${style.changeColor}` : `${style.textcolor}`
            }
          >
            Side Map
          </a>
        </li>
        <li>
          <a
            href="#wireframe"
            className={
              hash == "#wireframe"
                ? `${style.changeColor}`
                : `${style.textcolor}`
            }
          >
            Wireframe
          </a>
        </li>
        <li>
          <a
            href="#styleGuide"
            className={
              hash == "#styleGuide"
                ? `${style.changeColor}`
                : `${style.textcolor}`
            }
          >
            Style Guide
          </a>
        </li>
        <li>
          <a
            href="#mockup"
            className={
              hash == "#mockup" ? `${style.changeColor}` : `${style.textcolor}`
            }
          >
            Mockup
          </a>
        </li>
        <li>
          <a
            href="#prototype"
            className={
              hash == "#prototype"
                ? `${style.changeColor}`
                : `${style.textcolor}`
            }
          >
            Prototype
          </a>
        </li>
        <li>
          <a
            href="#phoneRWD"
            className={
              hash == "#phoneRWD"
                ? `${style.changeColor}`
                : `${style.textcolor}`
            }
          >
            RWD
          </a>
        </li>
      </ul>
    </div>
  );
}

export default RightFixBar;
