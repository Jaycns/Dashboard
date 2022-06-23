import styles from "../styles/right.module.scss";
import Image from "next/image";
import photo from "../public/asset/jaycn_pics2.png";
import { useState } from "react";

function Right() {

  return (
    <div className={styles.right}>
      <div className={styles.recent}>
        <h2>Recent Updates</h2>
        <div className={styles.updates}>
          <div className={styles.update}>
            <div className={styles.photo}>
              <Image
                width="50px"
                height="50px"
                src={photo}
                alt="great"
              />
            </div>
            <div className={styles.message}>
              <p>
                <b>Mike Tyson</b> received his
                order of Night lion tech GPS
                drone.
              </p>
              <small className={styles.muted}>
                2 Minutes Ago
              </small>
            </div>
          </div>
          <div className={styles.update}>
            <div className={styles.photo}>
              <Image
                width="50px"
                height="50px"
                src={photo}
                alt="There"
              />
            </div>
            <div className={styles.message}>
              <p>
                <b>Mike Tyson</b> received his
                order of Night lion tech GPS
                drone.
              </p>
              <small className={styles.muted}>
                2 Minutes Ago
              </small>
            </div>
          </div>
          <div className={styles.update}>
            <div className={styles.photo}>
              <Image
                width="50px"
                height="50px"
                src={photo}
                alt="Here there"
              />
            </div>
            <div className={styles.message}>
              <p>
                <b>Mike Tyson</b> received his
                order of Night lion tech GPS
                drone.
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
