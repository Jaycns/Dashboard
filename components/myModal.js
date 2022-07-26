import React, { useContext } from "react";
import styles from "../styles/myModal.module.scss";
import ThemeContext from "../context/context";
import { MdShoppingCart } from "react-icons/md";
import { MdLocalMall } from "react-icons/md";
import Select from "react-select";

function ProductModal() {
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
  const options = [
    {
      value: "chocolate",
      label: <MdShoppingCart />,
    },
    {
      value: "strawberry",
      label: <MdShoppingCart />,
    },
    { value: "vanilla", label: <MdLocalMall /> },
  ];
  const value = options.value;
  const selectedOption = options.find(
    (option) => option.value === value
  );

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
          <label>Icon:</label>
          {/* <select
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
            <option>
              <MdLocalMall
                style={{ color: "black" }}
              />
            </option>
            <option>
              <MdShoppingCart />
            </option>
          </select> */}
          <Select
            options={options}
            className={styles.select}
            value={selectedOption}
            handleChange={(e, selectedOption) =>
              e.target.selectedOption.value
            }
          />
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

        {checked ? (
          <div className={styles.btn}>
            <button
              className={styles.btn1}
              type="button"
              onClick={handleDelete}
            >
              DELETE
            </button>
            <button
              className={styles.btn2}
              type="button"
              onClick={handleSave}
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
