import React, { useContext } from "react";
import Analystics from "../components/analysticals";
import styles from "../styles/frag.module.scss";
import { syn } from "./orders.js";
import ThemeContext from "../context/context";
function AddProducts() {
  const {
    toggleState,
    state,
    names,
    handleSubmit,
    handleClick,
    handleChange,
    checked,
    handleDelete,
    handleSave,
  } = useContext(ThemeContext);
  return (
    <main className={`${styles.frag}`}>
      <h1>Add Products {syn}</h1>
      <div className={styles.fraglin}>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <div
            className={styles.title}
            tabIndex={-1}
          >
            <label>Title:</label>
            <input
              placeholder="ONLINE ORDERS"
              name="title"
              value={names.title}
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className={styles.icon}>
            <label>Icon:</label>
            <select
              className={styles.select}
              placeholder="ICONS"
              onChange={handleChange}
              value={names.icon}
              name="icon"
            >
              <option>Hats</option>
              <option>Banana</option>
              <option>Saucy</option>
              <option>Football</option>
              <option>Kinematics</option>
              <option>ShowMax</option>
            </select>
          </div>
          <div className={styles.info}>
            <label>Info:</label>
            <input
              placeholder="NEW DEALERS"
              value={names.info}
              type="text"
              name="info"
              onChange={handleChange}
            />
          </div>
          <div className={styles.las}>
            <label>Sales Profit:</label>
            <input
              placeholder="+29%"
              value={names.profit}
              type="text"
              name="profit"
              onChange={handleChange}
            />
          </div>
          <div className={styles.las}>
            <label>Updated:</label>
            <input
              placeholder="Last 2 hours"
              value={names.update}
              type="text"
              name="update"
              onChange={handleChange}
            />
          </div>
          <div className={styles.las}>
            <label>Sales ID:</label>
            <input
              placeholder="812"
              value={names.id}
              type="text"
              name="id"
              onChange={handleChange}
            />
          </div>
        </form>
        <Analystics />
      </div>
    </main>
  );
}

export default AddProducts;
