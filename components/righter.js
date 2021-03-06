import styles from "../styles/right.module.scss";
import ThemeContext from "../context/context";
import React, { useContext } from "react";

function Right() {
  const { toggleState } =
    useContext(ThemeContext);
  return (
    <div
      className={
        toggleState
          ? `${styles.right} ${styles.dark}`
          : styles.right
      }
    >
      <div className={styles.recent}>
        <h2>Recent Updates</h2>
        <div className={styles.updates}>
          <div className={styles.update}>
            <div className={styles.photo}>
              <img
                src="/asset/blue.png"
                alt="great"
              />
            </div>
            <div className={styles.message}>
              <p>
                <b>Eleon Musk</b> received his
                order of Night lion tech GPS
                drone.
              </p>
              <small className={styles.muted}>
                3 Days Ago
              </small>
            </div>
          </div>
          <div className={styles.update}>
            <div className={styles.photo}>
              <img
                src="/asset/pink.png"
                alt="There"
              />
            </div>
            <div className={styles.message}>
              <p>
                <b>Julius Caesar</b> received his
                order of Samsung galaxy S22.
              </p>
              <small className={styles.muted}>
                58 Minutes Ago
              </small>
            </div>
          </div>
          <div className={styles.update}>
            <div className={styles.photo}>
              <img
                src="/asset/yellow.png"
                alt="Here there"
              />
            </div>
            <div className={styles.message}>
              <p>
                <b>Steph Chi</b> received her
                order of 16-inch ringLight Gmax
              </p>
              <small className={styles.muted}>
                2 Minutes Ago
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;
