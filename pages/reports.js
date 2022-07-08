import React from "react";
import Canvas from "../exchange/canvas";
import styles from "../styles/frag.module.scss";
import { syn } from "./[orders]";

function Reports() {
  return (
    <main className={`${styles.frag}`}>
      <h1>Reports {syn}</h1>
      <div>
        <div className={styles.date}>
          <input type="date" />
        </div>
        <Canvas />
      </div>
    </main>
  );
}

export default Reports;
