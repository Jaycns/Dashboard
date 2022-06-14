import "../styles/globals.scss";
import styles from "../styles/globals.scss";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.dark}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
