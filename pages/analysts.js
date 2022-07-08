import React from "react";
import FastPayment from "../exchange/fastPayment";
import Analystics from "../components/analysticals";
import styles from "../styles/frag.module.scss";
import Exchange from "../exchange/exchanger";
import { syn } from "./orders.js";
import Report from "../exchange/reports";
import Canvas from "../exchange/cranvas";

function Analysts() {
  return (
    <div>
      <main className={styles.frag}>
        <h1>Analystics {syn}</h1>
        <div>
          <Exchange />
          <Report />
          <Analystics />
          <Canvas />
        </div>
      </main>
    </div>
  );
}

export default Analysts;
