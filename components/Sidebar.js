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

export default function SideBar({
  handleClick,
  val,
}) {
  return (
    <div className={styles.sidebar}>
      <a
        href="#"
        name="Dashboard"
        onClick={handleClick}
        className={
          val === "Dashboard" ? styles.active : ""
        }
      >
        <MdDashboard className={styles.span} />
        <h3>Dashboard</h3>
      </a>
      <a
        name="Customers"
        onClick={handleClick}
        className={
          val === "Customers" ? styles.active : ""
        }
      >
        <MdPersonOutline
          className={styles.span}
        />
        <h3>Customers</h3>
      </a>
      <a
        href="#"
        name="Orders"
        onClick={handleClick}
        className={
          val === "Orders" ? styles.active : ""
        }
      >
        <MdReceiptLong className={styles.span} />
        <h3>Orders</h3>
      </a>
      <a
        href="#"
        name="Analystics"
        onClick={handleClick}
        className={
          val === "Analystics"
            ? styles.active
            : ""
        }
      >
        <MdOutlineInsights
          className={styles.span}
        />
        <h3>Analystics</h3>
      </a>
      <a
        href="#"
        name="Messages"
        onClick={handleClick}
        className={
          val === "Messages" ? styles.active : ""
        }
      >
        <MdMailOutline className={styles.span} />
        <h3>Messages</h3>
        <span className={styles.messages}>
          26
        </span>
      </a>
      <a
        href="#"
        name="Products"
        onClick={handleClick}
        className={
          val === "Products" ? styles.active : ""
        }
      >
        <MdInventory className={styles.span} />
        <h3>Products</h3>
      </a>
      <a
        href="#"
        name="Reports"
        onClick={handleClick}
        className={
          val === "Reports" ? styles.active : ""
        }
      >
        <MdReportGmailerrorred
          className={styles.span}
        />
        <h3>Reports</h3>
      </a>
      <a
        href="#"
        name="Settings"
        onClick={handleClick}
        className={
          val === "Settings" ? styles.active : ""
        }
      >
        <MdSettings className={styles.span} />
        <h3>Settings</h3>
      </a>
      <a
        name="Add Products"
        onClick={handleClick}
        className={
          val === "Add Products"
            ? styles.active
            : ""
        }
      >
        <MdAdd className={styles.span} />
        <h3>Add Products</h3>
      </a>
      <a href="" className="">
        <MdLogout className={styles.span} />
        <h3>Logout</h3>
      </a>
      {/* <div className={ styles.updates }>
        <MdUpdate />
        <h4>Updates Available</h4>
        <p>Security Updates</p>
        <p>General Updates</p>
        <a href="#">Update Now</a>
      </div> */}
    </div>
  );
}
