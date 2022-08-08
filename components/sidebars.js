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
import { MdHouse } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { useRouter } from "next/router";
import {
  useState,
  useEffect,
  useContext,
} from "react";
import Link from "next/link";
import ThemeContext from "../context/context";

export default function SideBar({
  click,
  setClick,
}) {
  const { val, setVal } =
    useContext(ThemeContext);

  function handleClick(e) {
    setVal(e.target.getAttribute("name"));
    setTimeout(() => {
      setClick(!click);
    }, 500);

    localStorage.setItem(
      "val",
      JSON.stringify(
        e.target.getAttribute("name")
      )
    );
  }
  const router = useRouter();
  return (
    <div className={styles.sidebar}>
      <div
        className={
          click
            ? `${styles.open}`
            : `${styles.links}`
        }
      >
        <Link as="/" href="/">
          <a
            name="Dashboard"
            onClick={handleClick}
            className={
              val === "Dashboard"
                ? styles.active
                : ""
            }
          >
            <MdDashboard
              className={styles.span}
            />
            <h3>Dashboard</h3>
          </a>
        </Link>
        <Link as="/customers" href="/customers">
          <a
            name="Customers"
            onClick={handleClick}
            className={
              val === "Customers"
                ? styles.active
                : ""
            }
          >
            <MdPersonOutline
              className={styles.span}
            />
            <h3>Customers</h3>
          </a>
        </Link>
        <Link as="/orders" href="/orders">
          <a
            name="Orders"
            onClick={handleClick}
            className={
              val === "Orders" && styles.active
            }
          >
            <MdReceiptLong
              className={styles.span}
            />
            <h3>Orders</h3>
          </a>
        </Link>
        <Link as="/analysts" href="/analysts">
          <a
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
        </Link>
        <Link as="/messages" href="/messages">
          <a
            name="Messages"
            onClick={handleClick}
            className={
              val === "Messages"
                ? styles.active
                : ""
            }
          >
            <MdMailOutline
              className={styles.span}
            />
            <h3>Messages</h3>
            <span className={styles.messages}>
              26
            </span>
          </a>
        </Link>
        <Link as="/products" href="/products">
          <a
            name="Products"
            onClick={handleClick}
            className={
              val === "Products"
                ? styles.active
                : ""
            }
          >
            <MdInventory
              className={styles.span}
            />
            <h3>Products</h3>
          </a>
        </Link>
        <Link as="/countries" href="/countries">
          <a
            name="Countries"
            onClick={handleClick}
            className={
              val === "Countries"
                ? styles.active
                : ""
            }
          >
            <MdHouse className={styles.span} />
            <h3>Countries</h3>
          </a>
        </Link>
        <Link as="/reports" href="/reports">
          <a
            name="reports"
            onClick={handleClick}
            className={
              val === "reports"
                ? styles.active
                : ""
            }
          >
            <MdReportGmailerrorred
              className={styles.span}
            />
            <h3>Reports</h3>
          </a>
        </Link>
        <Link href="/">
          <a
            name="Settings"
            onClick={handleClick}
            className={
              val === "Settings"
                ? styles.active
                : ""
            }
          >
            <MdSettings className={styles.span} />
            <h3>Settings</h3>
          </a>
        </Link>
        <Link
          as="/addProducts"
          href="/addProducts"
        >
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
        </Link>
        <Link href="/">
          <a className="">
            <MdLogout className={styles.span} />
            <h3>Logout</h3>
          </a>
        </Link>
      </div>
    </div>
  );
}
