import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { isConstructorDeclaration } from "typescript";
import style from "../css/RightFixBar.module.css";

function RightFixBar() {
  //讀取Charming.tsx裡的ID、對應位置
  const challenge = document.querySelector("#challenge");
  const designFlow = document.querySelector("#designFlow");
  const concept = document.querySelector("#concept");
  const marketingResearch = document.querySelector("#marketingResearch");
  const referTo = document.querySelector("#referTo");
  const sidemap = document.querySelector("#sidemap");
  const wireframe = document.querySelector("#wireframe");
  const styleGuide = document.querySelector("#styleGuide");
  const mockup = document.querySelector("#mockup");
  const prototype = document.querySelector("#prototype");
  const phoneRWD = document.querySelector("#phoneRWD");
  const cssIssue = document.querySelector("#cssIssue");
  const dataPicture = document.querySelector("#dataPicture");
  const dateLine = document.querySelector("#dateLine");

  //點擊top置頂
  const scrollBtn = () => window.scrollTo(0, 0);
  //移至challenge
  const toChallenge = () => challenge?.scrollIntoView();
  const toDesignFlow = () => designFlow?.scrollIntoView();
  const toConcept = () => concept?.scrollIntoView();
  const toMarketingResearch = () => marketingResearch?.scrollIntoView();
  const toReferTo = () => referTo?.scrollIntoView();
  const toSitemap = () => sidemap?.scrollIntoView();
  const toWireframe = () => wireframe?.scrollIntoView();
  const toStyleGuide = () => styleGuide?.scrollIntoView();
  const toMockup = () => mockup?.scrollIntoView();
  const toPrototype = () => prototype?.scrollIntoView();
  const toPhoneRWD = () => phoneRWD?.scrollIntoView();
  const toCssIssue = () => cssIssue?.scrollIntoView();
  const toDataPicture = () => dataPicture?.scrollIntoView();
  const toDateLine = () => dateLine?.scrollIntoView();

  return (
    <div className={style.rightFixBar}>
      <button className={style.btn} onClick={scrollBtn}>
        TOP
      </button>
      <button className={style.btn} onClick={toChallenge}>
        Project Vision
      </button>
      <button className={style.btn} onClick={toDesignFlow}>
        Design Flow
      </button>
      <button className={style.btn} onClick={toConcept}>
        Target
      </button>
      <button className={style.btn} onClick={toMarketingResearch}>
        Marketing Research
      </button>
      <button className={style.btn} onClick={toReferTo}>
        環境評估
      </button>
      <button className={style.btn} onClick={toSitemap}>
        Sitemap
      </button>
      <button className={style.btn} onClick={toWireframe}>
        Wireframe
      </button>
      <button className={style.btn} onClick={toStyleGuide}>
        Style Guide
      </button>
      <button className={style.btn} onClick={toMockup}>
        Mockup
      </button>
      <button className={style.btn} onClick={toPrototype}>
        Prototype
      </button>
      <button className={style.btn} onClick={toPhoneRWD}>
        RWD
      </button>
      <button className={style.btn} onClick={toCssIssue}>
        Challenge 1
      </button>
      <button className={style.btn} onClick={toDataPicture}>
        Challenge 2
      </button>
      <button className={style.btn} onClick={toDateLine}>
        Challenge 3
      </button>
    </div>
  );
}

export default RightFixBar;
