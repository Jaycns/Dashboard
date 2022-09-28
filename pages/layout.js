import React, {
  useState,
  useContext,
} from "react";
import Top from "../components/tops";
import SideBar from "../components/sidebars";
import styles from "../styles/layout.module.scss";
import ThemeContext from "../context/context";
import ProductModal from "../components/myModal";
import { Modal } from "@mui/material";

function Layout({ children }) {
  const [click, setClick] = useState(false);
  const { toggleState, modal, handleClose } =
    useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <Top click={click} setClick={setClick} />
      <aside
        className={styles.asider}
        style={{
          display: click ? "block" : "",
          backgroundColor: toggleState
            ? "#202528"
            : "",
          boxShadow: toggleState
            ? "1rem 3rem 4rem rgba(0, 0, 0, 0.4)"
            : "",
        }}
      >
        <SideBar
          click={click}
          setClick={setClick}
        />
      </aside>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <ProductModal />
        </div>
      </Modal>
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
