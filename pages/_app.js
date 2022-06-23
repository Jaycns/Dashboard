import "../styles/globals.scss";
import styles from "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  
  return (
    <div className={styles.dark}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
