import React from "react";
import Analystics from "../components/analysticals";
import styles from "../styles/frag.module.scss";
import { syn } from "./orders.js";

function AddProducts() {
  return (
    <main className={`${styles.frag}`}>
      <h1>Add Products {syn}</h1>
      <div className={styles.fraglin}>
        <form className={styles.form}>
          <div className={styles.title}>
            <label>Title:</label>
            <input
              placeholder="ONLINE ORDERS"
              //value=""
              type="text"
            />
          </div>
          <div className={styles.icon}>
            <label> Icon:</label>
            <input
              placeholder="Select Icon"
              value=""
              type="select"
            />
            <options></options>
          </div>
          <div className={styles.info}>
            <label>Info:</label>
            <input
              placeholder="NEW DEALERS"
              value=""
              type="text"
            />
          </div>
          <div className={styles.las}>
            <label>Updated:</label>
            <input
              placeholder="Last 2 hours"
              value=""
              type="text"
            />
          </div>
          <div className={styles.las}>
            <label>Sales Profit:</label>
            <input
              placeholder="+29%"
              value=""
              type="text"
            />
          </div>
          <div className={styles.las}>
            <label>Sales ID:</label>
            <input
              placeholder="812"
              value=""
              type="text"
            />
          </div>
        </form>
        <Analystics />
      </div>
    </main>
  );
}

export default AddProducts;
