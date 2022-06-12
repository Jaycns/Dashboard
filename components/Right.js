import styles from "../styles/right.module.scss";
import { MdMenu } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import Image from "next/image";
import profile from "../images/jaycn_pics.png";
import photo from "../images/jaycn_pics2.png";

function Right({ handleOpen }) {
  return (
    <div className={styles.right}>
      <div className={styles.top}>
        <button
          id="menu-btn"
          onClick={handleOpen}
        >
          <MdMenu />
        </button>
        <div
          className={styles.toggler}
          onClick={ () =>
            document.body.classList.toggle(
              styles.dark
            )
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
            <Image
              width="50px"
              height="50px"
              src={profile}
            />
          </div>
        </div>
      </div>
      <div className={styles.recent}>
        <h2>Recent Updates</h2>
        <div className={styles.updates}>
          <div className={styles.update}>
            <div className={styles.photo}>
              <Image
                width="50px"
                height="50px"
                src={photo}
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
