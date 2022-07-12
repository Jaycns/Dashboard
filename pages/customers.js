import React from "react";
import styles from "../styles/frag.module.scss";
import Recent from "../components/recents";
import Right from "../components/righter";
import Transactions from "../exchange/transactions";
import { syn } from "./orders";

function Customers() {
  return (
    <main className={`${styles.frag}`}>
      <h1>Customers {syn}</h1>
      <div className={styles.fraglin}>
        <Right />
        <Transactions />
        <Recent />
      </div>
    </main>
  );
}

export default Customers;
