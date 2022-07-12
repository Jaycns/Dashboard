import React, {
  useState,
  useContext,
} from "react";
import styles from "../styles/top.module.scss";
import { MdMenu } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import ThemeContext from "../context/context";
import Nav from "./navi";
//import ThemeContext from "../context/context";

function Top({ setClick, click }) {
  // const { light, dark } =
  //   useContext(ThemeContext);
  const { themeToggler } =
    useContext(ThemeContext);
  //const { toggle } = useContext(ThemeContext);
  const handleOpen = () => setClick(!click);
  const condition = `${styles.span} ${styles.active}`;
  return (
    <div>
      {" "}
      <div
        className={`${styles.top} ${styles.dark}`}
        style={{}}
      >
        <Nav />
        <button onClick={handleOpen}>
          <MdMenu />
        </button>
        <div className={styles.search}>
          <MdSearch />
        </div>
        <div
          className={styles.toggler}
          onClick={themeToggler}
        >
          <MdLightMode className={condition} />
          <MdDarkMode className={condition} />
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
