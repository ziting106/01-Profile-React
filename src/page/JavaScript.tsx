import React from "react";
import { Link } from "react-router-dom";
import style from "../css/JavaScript.module.css";

function JavaScript() {
  return (
    <section className={style.linkcolor}>
      <Link to={`/challenge1`}>
        <hgroup>
          <p>Challenge.1</p>
          <p>猜數字</p>
        </hgroup>
      </Link>
      <Link to={`/challenge2`}>Challenge.2</Link>
      <Link to={`/challenge3`}>Challenge.3</Link>
      <Link to={`/challenge4`}>Challenge.4</Link>
      <Link to={`/challenge4`}>Challenge.5</Link>
    </section>
  );
}

export default JavaScript;
