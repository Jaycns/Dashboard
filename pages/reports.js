import React, { useContext } from "react";
import Canvas from "../exchange/cranvas";
import styles from "../styles/frag.module.scss";
import { syn } from "./orders.js";
import ThemeContext from "../context/context";
import Transaction from "../exchange/transactions";
import { defaultDate } from "./index";

function Reports() {
  const { toggleState } =
    useContext(ThemeContext);
  // const defaultDate = format(
  //   new Date(),
  //   "MM/dd/yyyy"
  // );
  return (
    <main className={`${styles.frag}`}>
      <h1>Reports {syn}</h1>
      <div className={styles.fraglin}>
        <div
          className={
            toggleState
              ? `${styles.date} ${styles.dark}`
              : styles.date
          }
        >
          <input
            type="date"
            defaultValue={defaultDate}
          />
        </div>
        <Transaction />
        <Canvas />
      </div>
    </main>
  );
}

export default Reports;
