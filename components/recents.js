import styles from "../styles/recent.module.scss";
import ThemeContext from "../context/context";
import React, { useContext } from "react";

function Recent() {
  const { toggleState } =
    useContext(ThemeContext);
  return (
    <div
      className={
        toggleState
          ? `${styles.recent} ${styles.dark}`
          : styles.recent
      }
    >
      <h2>Recent Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Number</th>
            <th>Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Foldable Mini Drone</td>
            <td>85631</td>
            <td>Due</td>
            <td className={styles.warning}>
              Pending
            </td>
            <td className={styles.primary}>
              Details
            </td>
          </tr>
          <tr>
            <td>Iphone 11 pro Max</td>
            <td>74901</td>
            <td>Complete</td>
            <td className={styles.warning}>
              Delivered
            </td>
            <td className={styles.primary}>
              Details
            </td>
          </tr>
          <tr>
            <td>Hisense Air fryer</td>
            <td>71632</td>
            <td>Due</td>
            <td className={styles.warning}>
              Pending
            </td>
            <td className={styles.primary}>
              Details
            </td>
          </tr>
          <tr>
            <td>Siemens Solar Inverter</td>
            <td>32431</td>
            <td>Due</td>
            <td className={styles.warning}>
              Pending
            </td>
            <td className={styles.primary}>
              Details
            </td>
          </tr>
          <tr>
            <td>Samsung galaxy S22</td>
            <td>85631</td>
            <td>Pre-order</td>
            <td className={styles.warning}>
              Delivered
            </td>
            <td className={styles.primary}>
              Details
            </td>
          </tr>
          <tr>
            <td> 16-inch RingLight Gmax</td>
            <td>43531</td>
            <td>Due</td>
            <td className={styles.warning}>
              Pending
            </td>
            <td className={styles.primary}>
              Details
            </td>
          </tr>
        </tbody>
      </table>
      <a href="#">Show All</a>
    </div>
  );
}

export default Recent;
