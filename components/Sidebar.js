import styles from "../styles/sidebar.module.scss";
import { MdDashboard } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";
import { MdReceiptLong } from "react-icons/md";
import { MdOutlineInsights } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { MdInventory } from "react-icons/md";
import { MdReportGmailerrorred } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdLogout } from "react-icons/md";

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <a href="#" className="">
        <MdDashboard className={styles.span} />
        <h3>Dashboard</h3>
      </a>
      <a href="" className="">
        <MdPersonOutline
          className={styles.span}
        />
        <h3>Customers</h3>
      </a>
      <a href="" className="">
        <MdReceiptLong className={styles.span} />
        <h3>Orders</h3>
      </a>
      <a href="" className="">
        <MdOutlineInsights
          className={styles.span}
        />
        <h3>Analystics</h3>
      </a>
      <a href="" className={styles}>
        <MdMailOutline className={styles.span} />
        <h3>Messages</h3>
        <span className={styles.messages}>
          26
        </span>
      </a>
      <a href="" className="">
        <MdInventory className={styles.span} />
        <h3>Products</h3>
      </a>
      <a href="" className="">
        <MdReportGmailerrorred
          className={styles.span}
        />
        <h3>Reports</h3>
      </a>
      <a href="" className="">
        <MdSettings className={styles.span} />
        <h3>Settings</h3>
      </a>
      <a href="" className="">
        <MdAdd className={styles.span} />
        <h3>Add Products</h3>
      </a>
      <a href="" className="">
        <MdLogout className={styles.span} />
        <h3>Logout</h3>
      </a>
    </div>
  );
}
