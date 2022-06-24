import { MdClose } from "react-icons/md";
import styles from "../styles/nav.module.scss";

function Nav({ handleClose }) {
  return (
    <div className={styles.toop}>
      <div className={styles.logo}>
        <img
          src="/asset/jaycn_d.png"
          width="40px"
          height="40px"
          alt="Just in"
          className={styles.img}
        />
        <h2>
          JAY
          <span className={styles}>CN</span>
        </h2>
      </div>
      <div
        className={styles.btn}
        id="close-btn"
        onClick={handleClose}
      >
        <MdClose />
      </div>
    </div>
  );
}
export default Nav;
