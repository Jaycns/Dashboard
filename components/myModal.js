import React, { useContext } from "react";
import styles from "../styles/myModal.module.scss";
import ThemeContext from "../context/context";

function ProductModal() {
  const { toggleState } =
    useContext(ThemeContext);
  return (
    <div
      className={
        toggleState
          ? `${styles.product} ${styles.dark}`
          : styles.product
      }
    >
      <h1>Add Products</h1>

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
          <label>Sales Profit:</label>
          <input
            placeholder="+29%"
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
          <label>Sales ID:</label>
          <input
            placeholder="812"
            value=""
            type="text"
          />
        </div>
        <button type="button">SUBMIT</button>
      </form>
    </div>
  );
}

export default ProductModal;
