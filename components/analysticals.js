import React, { useContext } from "react";
import styles from "../styles/analystics.module.scss";
import { MdShoppingCart } from "react-icons/md";
import { MdLocalMall } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import ThemeContext from "../context/context";

function Analystics() {
  const {
    toggleState,
    handleOpen,
    val,
    state,
    names,
    handleChecked,
    handleClick,
  } = useContext(ThemeContext);
  return (
    <div
      className={
        toggleState
          ? `${styles.analystics} ${styles.dark}`
          : styles.analystics
      }
    >
      <h2>Sales Analystics</h2>
      <div
        className={`${styles.item} ${styles.online}`}
      >
        <div className={styles.icon}>
          <MdShoppingCart
            className={styles.span}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.info}>
            <h3>ONLINE ORDERS</h3>
            <small className={styles.muted}>
              Last 24 hours
            </small>
          </div>
          <h5 className={styles.success}>+39%</h5>
          <h3>3849</h3>
        </div>
      </div>
      <div
        className={`${styles.item} ${styles.offline}`}
      >
        <div className={styles.icon}>
          <MdLocalMall className={styles.span} />
        </div>
        <div className={styles.right}>
          <div className={styles.info}>
            <h3>OFFLINE ORDERS</h3>
            <small className={styles.muted}>
              Last 24 hours
            </small>
          </div>
          <h5 className={styles.danger}>-17%</h5>
          <h3>1100</h3>
        </div>
      </div>
      <div
        className={`${styles.item} ${styles.customers}`}
      >
        <div className={styles.icon}>
          <MdShoppingCart
            className={styles.span}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.info}>
            <h3>NEW CUSTOMERS</h3>
            <small className={styles.muted}>
              Last 24 hours
            </small>
          </div>
          <h5 className={styles.warning}>+25%</h5>
          <h3>849</h3>
        </div>
      </div>

      {state.map((items, index) => {
        return (
          <div
            key={items.id}
            className={`${styles.item} ${styles.customers}`}
            onClick={() =>
              handleChecked(items.id)
            }
          >
            <div className={styles.icon}>
              {items.icon}
            </div>
            <div className={styles.right}>
              <div className={styles.info}>
                <h3>{items.info}</h3>
                <small className={styles.muted}>
                  {items.update}
                </small>
              </div>
              <h5 className={styles.warning}>
                {items.profit}
              </h5>
              <h3>{items.id}</h3>
            </div>
          </div>
        );
      })}
      <div
        onClick={
          val === "Add Products"
            ? handleClick
            : handleOpen
        }
        className={`${styles.item} ${styles.add}`}
      >
        <div className="">
          <MdAdd className={styles.span} />
          <h3>Add Product</h3>
        </div>
      </div>
    </div>
  );
}

export default Analystics;
