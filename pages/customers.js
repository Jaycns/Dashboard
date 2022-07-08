import React from "react";
import styles from "../styles/frag.module.scss";
import Recent from "../components/recent";
import Right from "../components/right";
import Transactions from "../exchange/transactions";
import { syn } from "./[orders]";

function Customers() {
  return (
    <main className={`${styles.frag}`}>
      <h1>Customers {syn}</h1>
      <div>
        <Right />
        <Transactions />
        <Recent />
      </div>
    </main>
  );
}

export default Customers;