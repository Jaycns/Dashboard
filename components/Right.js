import styles from "../styles/right.module.scss";
import { MdMenu } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import Image from "next/image";
import profile from "../asset/jaycn_pics.png";
import photo from "../asset/jaycn_pics2.png";
import { useState } from 'react';

function Right ({ handleOpen }) {
  const [theme, setTheme] = useState('light');
  
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
              'dark'
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
              src={ profile }
              alt="Here"
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
                src={ photo }
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
                src={ photo }
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
                src={ photo }
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
