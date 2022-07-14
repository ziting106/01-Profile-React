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
            Project Vision
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
            Design Flow
          </a>
        </li>
        <li>
          <a
            href="#concept"
            className={
              hash == "#concept" ? `${style.changeColor}` : `${style.textcolor}`
            }
          >
            Target
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
            Marketing Research
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
        <li>
          <a
            href="#cssIssue"
            className={
              hash == "#cssIssue"
                ? `${style.changeColor}`
                : `${style.textcolor}`
            }
          >
            Challenge 1
          </a>
        </li>
        <li>
          <a
            href="#dataPicture"
            className={
              hash == "#dataPicture"
                ? `${style.changeColor}`
                : `${style.textcolor}`
            }
          >
            Challenge 2
          </a>
        </li>
        <li>
          <a
            href="#dateLine"
            className={
              hash == "#dateLine"
                ? `${style.changeColor}`
                : `${style.textcolor}`
            }
          >
            Challenge 3
          </a>
        </li>
      </ul>
    </div>
  );
}

export default RightFixBar;
