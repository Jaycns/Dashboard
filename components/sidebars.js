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
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function SideBar({ click }) {
  const [val, setVal] = useState("Dashboard");
  let initialVal = "";
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("val"))) {
      setVal(
        JSON.parse(
          localStorage.getItem("val") ||
            "Dashboard"
        )
      );
    }
  }, []);
  useEffect(() => {
    if (val !== "Dashboard") {
      localStorage.setItem(
        "val",
        JSON.stringify(val)
      );
    }
  }, [val]);

  console.log(initialVal);
  function handleClick(e) {
    setVal(e.target.getAttribute("name"));
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
            name="/customers"
            onClick={handleClick}
            className={
              val === "/customers"
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
            name="orders"
            onClick={handleClick}
            className={
              val === "orders" && styles.active
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
            name="analysts"
            onClick={handleClick}
            className={
              val === "analysts"
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
            name="messages"
            onClick={handleClick}
            className={
              val === "messages"
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
            name="products"
            onClick={handleClick}
            className={
              val === "products"
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
            name="settings"
            onClick={handleClick}
            className={
              val === "settings"
                ? styles.active
                : ""
            }
          >
            <MdSettings className={styles.span} />
            <h3>Settings</h3>
          </a>
        </Link>
        <Link href="/">
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
