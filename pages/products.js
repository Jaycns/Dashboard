import React from "react";
import Insights from "../components/insights";
import FastPayment from "../exchange/fastPayment";
import Investment from "../exchange/investment";
import styles from "../styles/frag.module.scss";
import { syn } from "./[orders]";

function Products() {
  return (
    <main className={styles.frag}>
      <h1>Products{syn}</h1>
      <div>
        <Insights />
        <FastPayment />
        {/* <Investment /> */}
      </div>
    </main>
  );
}

export default Products;
