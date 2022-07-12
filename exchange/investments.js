import React, { useContext } from "react";
import styles from "../styles/exchange/investment.module.scss";
import { MdChevronRight } from "react-icons/md";
import { format } from "date-fns";
import ThemeContext from "../context/context";

function Investment() {
  const timeLet = new Date();
  const timeNow = format(
    timeLet,
    "d MMM ',' yyyy"
  );
  const timeD = format(timeLet, "h':'mm aaa");
  const { toggleState } =
    useContext(ThemeContext);
  return (
    <div className={styles.right}>
      <div
        className={
          toggleState
            ? `${styles.investments} ${styles.dark}`
            : styles.investments
        }
      >
        <div className={styles.header}>
          <h2>Investments</h2>
          <a href="#">
            More <MdChevronRight />
          </a>
        </div>
        <div className={styles.investment}>
          <img
            src="/asset/unilever.png"
            alt="This is Africa"
          />
          <h4>Unilever</h4>
          <div className={styles.dater}>
            <p>{timeNow}</p>
            <small className={styles.muted}>
              {timeD}
            </small>
          </div>
          <div className={styles.bonds}>
            <p>1402</p>
            <small className={styles.muted}>
              Bonds
            </small>
          </div>
          <div className={styles.amount}>
            <h4>$20,033</h4>
            <small className={styles.muted}>
              -4.27%
            </small>
          </div>
        </div>
        <div className={styles.investment}>
          <img
            src="/asset/mcdonalds.png"
            alt="This is Africa"
          />
          <h4>McDonald's</h4>
          <div className={styles.dater}>
            <p>{timeNow}</p>
            <small className={styles.muted}>
              {timeD}
            </small>
          </div>
          <div className={styles.bonds}>
            <p>1402</p>
            <small className={styles.muted}>
              Bonds
            </small>
          </div>
          <div className={styles.amount}>
            <h4>$30,033</h4>
            <small className={styles.muted}>
              +5.27%
            </small>
          </div>
        </div>
        <div className={styles.investment}>
          <img
            src="/asset/tesla.png"
            alt="This is Africa"
          />
          <h4>Tesla</h4>
          <div className={styles.dater}>
            <p>{timeNow}</p>
            <small className={styles.muted}>
              {timeD}
            </small>
          </div>
          <div className={styles.bonds}>
            <p>1402</p>
            <small className={styles.muted}>
              Bonds
            </small>
          </div>
          <div className={styles.amount}>
            <h4>$20,033</h4>
            <small className={styles.muted}>
              -1.39%
            </small>
          </div>
        </div>
        <div className={styles.investment}>
          <img
            src="/asset/monster.png"
            alt="This is Africa"
          />
          <h4>Monster</h4>
          <div className={styles.dater}>
            <p>{timeNow}</p>
            <small className={styles.muted}>
              {timeD}
            </small>
          </div>
          <div className={styles.bonds}>
            <p>1402</p>
            <small className={styles.muted}>
              Bonds
            </small>
          </div>
          <div className={styles.amount}>
            <h4>$20,033</h4>
            <small className={styles.muted}>
              +39.27%
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investment;
