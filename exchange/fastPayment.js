import React from "react";
import styles from "../styles/exchange/fastPayment.module.scss";
import { MdAdd } from "react-icons/md";

function FastPayment() {
  return (
    <div className={styles.payment}>
      <h2>Fast Payment</h2>
      <div className={styles.badges}>
        <div
          className={styles.badge}
          style={{ backgroundColor: "#202528" }}
        >
          <MdAdd className={styles.span} />
        </div>
        <div
          className={styles.badge}
          style={{ backgroundColor: "#202528" }}
        >
          <span
            className={styles.primaryB}
          ></span>
          <div className="">
            <h5>Training</h5>
            <h4>$50</h4>
          </div>
        </div>
        <div
          className={styles.badge}
          style={{ backgroundColor: "#202528" }}
        >
          <span
            className={styles.warningB}
          ></span>
          <div className="">
            <h5>Internet</h5>
            <h4>$40</h4>
          </div>
        </div>
        <div
          className={styles.badge}
          style={{ backgroundColor: "#202528" }}
        >
          <span className={styles.dangerB}></span>
          <div className="">
            <h5>Gas</h5>
            <h4>$190</h4>
          </div>
        </div>
        <div
          className={styles.badge}
          style={{ backgroundColor: "#202528" }}
        >
          <span
            className={styles.successB}
          ></span>
          <div className="">
            <h5>Movie</h5>
            <h4>$35</h4>
          </div>
        </div>
        <div
          className={styles.badge}
          style={{ backgroundColor: "#202528" }}
        >
          <span
            className={styles.warningB}
          ></span>
          <div className="">
            <h5>Education</h5>
            <h4>$999</h4>
          </div>
        </div>
        <div
          className={styles.badge}
          style={{ backgroundColor: "#202528" }}
        >
          <span
            className={styles.primaryB}
          ></span>
          <div className="">
            <h5>Electricity</h5>
            <h4>$108</h4>
          </div>
        </div>
        <div
          className={styles.badge}
          style={{ backgroundColor: "#202528" }}
        >
          <span
            className={styles.primaryB}
          ></span>
          <div className="">
            <h5>Food</h5>
            <h4>$399</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FastPayment;
