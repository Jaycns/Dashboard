import React from "react";
import styles from "../styles/frag.module.scss";
import Right from "../components/righter";
//import Investment from "../exchange/investment";
import Transaction from "../exchange/transactions";
import { syn } from "./orders.js";

function Messages() {
  return (
    <main className={styles.frag}>
      <h1>Messages {syn}</h1>
      <div className={styles.fraglin}>
        <Right />
        {/* <Investment /> */}
        <Transaction />
      </div>
    </main>
  );
}

export default Messages;
