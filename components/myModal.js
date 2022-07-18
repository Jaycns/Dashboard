import React, { useContext } from "react";
import styles from "../styles/myModal.module.scss";
import ThemeContext from "../context/context";

function ProductModal() {
  const {
    toggleState,
    state,
    names,
    handleSubmit,
    handleClick,
    handleChange, checked
  } = useContext(ThemeContext);

  return (
    <div
      className={
        toggleState
          ? `${styles.product} ${styles.dark}`
          : styles.product
      }
    >
      <h1>Add Products</h1>

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
          <label> Icon:</label>
          <input
            placeholder="Select Icon"
            value={names.icon}
            type="select"
            name="icon"
            onChange={handleChange}
          />
          <options></options>
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

        {checked? (
          <div className={styles.btn}>
            <button
              className={styles.btn1}
              type="button"
              onClick={handleClick}
            >
              DELETE
            </button>
            <button
              className={styles.btn2}
              type="button"
              onClick={handleClick}
            >
              SAVE
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleClick}
          >
            SUBMIT
          </button>
        )}
      </form>
    </div>
  );
}

export default ProductModal;
