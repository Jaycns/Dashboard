import React from "react";
import styles from "../styles/exchange/transaction.module.scss";
import { MdChevronRight } from "react-icons/md";
import { MdHeadphones } from "react-icons/md";
import { MdShoppingBag } from "react-icons/md";
import { MdSportsEsports } from "react-icons/md";
import { MdRestaurant } from "react-icons/md";

function Transaction() {
  return (
    <div className={styles.transactions}>
      <div className={styles.header}>
        <h2>Recent Transactions</h2>
        <a href="#">
          More <MdChevronRight className="" />
        </a>
      </div>
      <div className={styles.transaction}>
        <div className={styles.service}>
          <div
            className={`${styles.icon} ${styles.purple}`}
          >
            <MdHeadphones
              fill="purple"
              className={styles}
            />
          </div>
          <div className={styles.details}>
            <h4>Music</h4>
            <p>20.11.2021</p>
          </div>
        </div>
        <div className={styles.detail}>
          <div
            className={`${styles.card} ${styles.dangerB}`}
          >
            <img
              src="/asset/visa.png"
              alt="visa"
            />
          </div>
          <div className={styles.details}>
            <p>*2757</p>
            <small className={styles.muted}>
              Credit Card
            </small>
          </div>
        </div>
        <h4>$20</h4>
      </div>
      {/* End of transaction */}
      <div className={styles.transaction}>
        <div className={styles.service}>
          <div
            className={`${styles.icon} ${styles.dangerA}`}
          >
            <MdShoppingBag fill="red" />
          </div>
          <div className={styles.details}>
            <h4>Shopping</h4>
            <p>20.11.2021</p>
          </div>
        </div>
        <div className={styles.detail}>
          <div
            className={`${styles.card} ${styles.purpleB}`}
          >
            <img
              src="/asset/MasterCard.png"
              alt="master"
            />
          </div>
          <div className={styles.details}>
            <p>*2757</p>
            <small className={styles.muted}>
              Credit Card
            </small>
          </div>
        </div>
        <h4>$20</h4>
      </div>
      {/* End of transaction */}
      <div className={styles.transaction}>
        <div className={styles.service}>
          <div
            className={`${styles.icon} ${styles.successB}`}
          >
            <MdRestaurant fill="green" />
          </div>
          <div className={styles.details}>
            <h4>Restaurant</h4>
            <p>20.11.2021</p>
          </div>
        </div>
        <div className={styles.detail}>
          <div
            className={`${styles.card} ${styles.primaryB}`}
          >
            <img
              src="/asset/visa.png"
              alt="visa"
            />
          </div>
          <div className={styles.details}>
            <p>*2757</p>
            <small className={styles.muted}>
              Credit Card
            </small>
          </div>
        </div>
        <h4>$20</h4>
      </div>
      {/* End of transaction */}
      <div className={styles.transaction}>
        <div className={styles.service}>
          <div
            className={`${styles.icon} ${styles.primaryBf}`}
          >
            <MdSportsEsports fill="blue" />
          </div>
          <div className={styles.details}>
            <h4>Games</h4>
            <p>20.11.2021</p>
          </div>
        </div>
        <div className={styles.detail}>
          <div
            className={`${styles.card} ${styles.purpleB}`}
          >
            <img
              src="/asset/MasterCard.png"
              alt="visa"
            />
          </div>
          <div className={styles.details}>
            <p>*2757</p>
            <small className={styles.muted}>
              Master Card
            </small>
          </div>
        </div>
        <h4>$20</h4>
      </div>
      {/* End of transaction */}
    </div>
  );
}

export default Transaction;
