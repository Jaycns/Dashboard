import React from "react";
import styles from "../styles/top.module.scss";
import { MdMenu } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import Nav from "./Nav";

function Top() {
  const handleOpen = () => setClick(true);
  const handleClose = () => setClick(false);
  return (
    <div>
      {" "}
      <div className={styles.top}>
        <Nav handleClose={handleClose} />
        <button
          id="menu-btn"
          onClick={handleOpen}
        >
          <MdMenu />
        </button>
        <div className={styles.search}>
          <MdSearch />
        </div>
        <div
          className={styles.toggler}
          onClick={() =>
            document.body.classList.toggle("dark")
          }
        >
          <MdLightMode className={styles.span} />
          <MdDarkMode
            className={`${styles.span} ${styles.active}`}
          />
        </div>
        <div className={styles.profile}>
          <div className={styles.info}>
            <p>
              Hey, <b>Jaycn</b>
            </p>
            <small className={styles.muted}>
              Admin
            </small>
          </div>
          <div className={styles.photo}>
            <img
              width="50px"
              height="50px"
              src="/asset/jaycn_pics.png"
              alt="Here"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
