import React from "react";
import styles from "../styles/frag.module.scss";
import Right from "../components/right";
//import Investment from "../exchange/investment";
import Transaction from "../exchange/transactions";
import { syn } from "./orders.js";

function Messages() {
  return (
    <main className={styles.frag}>
      <h1>Messages {syn}</h1>
      <div>
        <Right />
        {/* <Investment /> */}
        <Transaction />
        
      </div>
    </main>
  );
}

export default Messages;
