import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Nav from "../components/Nav";
import SideBar from "../components/Sidebar";
import Insights from "../components/Insights";
import Recent from "../components/Recent";
import Right from "../components/Right";
import Analystics from "../components/Analystics";
import React, { useState } from "react";

export default function Home() {
  const [click, setClick] = useState(false);
  const handleOpen = () => setClick(true);
  const handleClose = () => setClick(false);
   const [theme, setTheme] = useState("light");
   const toggleTheme = () => {
     theme == "light"
       ? setTheme("dark")
       : setTheme("light");
   };
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Responsive Dashboard by Jaycn
        </title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <aside className={styles.aside} style={{display: click? 'block': ''}}>
        <Nav handleClose={handleClose} />
        <SideBar click={click} />
      </aside>
      <main className={styles.main}>
        <h1>Dashboard</h1>
        <div className={styles.date}>
          <input type="date" />
        </div>
        <Insights />
        <Recent />
      </main>
      <div className="">
        <Right
          handleOpen={handleOpen}
          click={click}
        />
        <Analystics />
      </div>
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
