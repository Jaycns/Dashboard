import FastPayment from "../exchange/fastPayment";
import Analystics from "../components/analysticals";
import styles from "../styles/frag.module.scss";
import Exchange from "../exchange/exchanger";
import { syn } from "./orders.js";
import Report from "../exchange/reports";
import Canvas from "../exchange/cranvas";
import ProductModal from "../components/myModal";
import { Modal } from "@mui/material";
import ThemeContext from "../context/context";
import React, { useContext } from "react";

function Analysts() {
  const { modal, handleClose } =
    useContext(ThemeContext);
  return (
    <div>
      <main className={styles.frag}>
        <h1>Analystics {syn}</h1>
        <div className={styles.fraglin}>
          <Exchange />
          <Report />
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
          <Analystics />
          <Canvas />
        </div>
      </main>
    </div>
  );
}

export default Analysts;
