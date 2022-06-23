import React from "react";
import styles from "../styles/exchange/exchange.module.scss";


function Exchange() {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.top}>
          <div className={styles.left}>
            <img src="/Bitcoin.png" />
            <h2>BTC</h2>
          </div>
          <img
            src="/asset/visa.png"
            alt="e"
            className={styles.right}
          />
        </div>
        <div className={styles.middle}>
          <h1>$827,199</h1>
          <img
            src="/asset/chip.png"
            alt="f"
            className={styles.chip}
          />
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <small>Card Holder</small>
            <h5>ELO BUKS</h5>
          </div>
          <div className={styles.right}>
            <div className={styles.expiry}>
              <small>Expiry </small>
              <h5>08/23</h5>
            </div>
            <div className={styles.cvv}>
              <small>CVV</small>
              <h5>123</h5>
            </div>
          </div>
        </div>
      </div>
      {/* End of Card */}
      <div className={styles.card}>
        <div className={styles.top}>
          <div className={styles.left}>
            <img src="/asset/Eth.png" alt="d" />
            <h2>ETH</h2>
          </div>
          <img //master card
            src="/asset/MasterCard.png"
            alt="e"
            className={styles.right}
          />
        </div>
        <div className={styles.middle}>
          <h1>$95,199</h1>
          <img
            src="/asset/chip.png"
            alt="f"
            className={styles.chip}
          />
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <small>Card Holder</small>
            <h5>Chi mama</h5>
          </div>
          <div className={styles.right}>
            <div className={styles.expiry}>
              <small>Expiry </small>
              <h5>08/23</h5>
            </div>
            <div className={styles.cvv}>
              <small>CVV</small>
              <h5>123</h5>
            </div>
          </div>
        </div>
      </div>
      {/* End of Card */}
      <div className={styles.card}>
        <div className={styles.top}>
          <div className={styles.left}>
            <img
              src="/asset/Bitcoin.png"
              alt="d"
            />
            <h2>BTC</h2>
          </div>
          <img
            src="/asset/visa.png"
            alt="e"
            className={styles.right}
          />
        </div>
        <div className={styles.middle}>
          <h1>$74,384</h1>
          <img
            src="/asset/chip.png"
            alt="f"
            className={styles.chip}
          />
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <small>Card Holder</small>
            <h5>Chuboyski Jagz</h5>
          </div>
          <div className={styles.right}>
            <div className={styles.expiry}>
              <small>Expiry </small>
              <h5>08/24</h5>
            </div>
            <div className={styles.cvv}>
              <small>CVV</small>
              <h5>123</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exchange;
