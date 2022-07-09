import React, {
  useState,
} from "react";
import styles from "../styles/top.module.scss";
import { MdMenu } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import Nav from "./navi";
//import ThemeContext from "../context/context";

function Top({ setClick, click }) {
  // const { light, dark } =
  //   useContext(ThemeContext);
  const [toggler, setToggler] = useState(false);
  const themeToggler = () => setToggler(!toggler);
  const handleOpen = () => setClick(!click);
 
  return (
    <div>
      {" "}
      <div className={styles.top} style={{}}>
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
          <MdLightMode
            className={
              toggler
                ? styles.span
                : `${styles.span} ${styles.active}`
            }
          />
          <MdDarkMode
            className={
              toggler
                ? `${styles.span} ${styles.active}`
                : styles.span
            }
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
