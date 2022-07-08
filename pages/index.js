import Head from "next/head";
import styles from "../styles/homers.module.scss";
import Insights from "../components/insight";
import Recent from "../components/recents";
import Right from "../components/righter";
import Analystics from "../components/analysticals";
import Exchange from "../exchange/exchanger";
import MonthlyReports from "../exchange/reports";
import FastPayment from "../exchange/fastPayment";
import Canvas from "../exchange/cranvas";
import Investment from "../exchange/investments";
import Transaction from "../exchange/transactions";

import { syn } from "./orders.js";

export default function Home() {
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
      {/* <Top click={click} setClick={setClick} />
      <aside
        className={styles.aside}
        style={{ display: click ? "block" : "" }}
      >
        <SideBar
          click={click}
          val={val}
          handleClick={handleClick}
        />
      </aside> */}
      <main className={styles}>
        <h1>Dashboard {syn}</h1>
        <div className={styles.date}>
          <input type="date" />
        </div>
        <Insights />

        <Exchange />

        <MonthlyReports />

        <FastPayment />

        <Canvas />

        <Recent />
      </main>
      <div className={styles.side}>
        <Investment />
        <Transaction />
        <Right />
        <Analystics />
      </div>
    </div>
  );
}
