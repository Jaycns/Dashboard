import React, { useState } from "react";
import Top from "../components/tops";
import SideBar from "../components/sidebars";
import styles from "../styles/layout.module.scss";

function Layout({ children }) {
  const [click, setClick] = useState(false);

  return (
    <div className={styles.container}>
      <Top click={click} setClick={setClick} />
      <aside
        className={styles.asider}
        style={{
          display: click ? "block" : "",
          backgroundColor: "#202528",
          boxShadow:
            "1rem 3rem 4rem rgba(0, 0, 0, 0.4)",
        }}
      >
        <SideBar
          click={click}
          setClick={setClick}
        />
      </aside>
      <main className={styles.mainer}>
        {children}
      </main>
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className={styles.muted}>
            Powered by
          </h3>
          <span className={styles.slogo}>
            <img
              src="/asset/jaycn_d.png"
              alt="Vercel Logo"
              width="12px"
              height="16px"
              className={styles.img}
            />
          </span>
          <h3 className={styles.muted}>
            Jaycn with Vercel
          </h3>
        </a>
      </footer> */}
    </div>
  );
}

export default Layout;
