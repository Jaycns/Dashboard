import "../styles/globals.scss";
import { ThemeProvider } from '../context/context'
import Layout from "./layout";

function MyApp({ Component, pageProps }) {
  
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
