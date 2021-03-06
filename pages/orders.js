import React from "react";
import { useRouter } from "next/router";
import Insights from "../components/insight";
import styles from "../styles/frag.module.scss";
import Recent from "../components/recents";
import Right from "../components/righter";
import Transactions from "../exchange/transactions";

export const syn = ">";
function Orders() {
  const router = useRouter();
  console.log(router.query);

  return (
    <main className={styles.frag}>
      <h1>Orders {syn} </h1>
      <div className={styles.fraglin}>
        <Insights />
        <Transactions />
        <Right />
        <Recent />
      </div>
    </main>
  );
}
// export const getStaticPaths = () => {
//   return {
//     paths: [
//       { params: { orders: "orders" } },
//       { params: { orders: "2" } },
//     ],
//     fallback: false,
//   };
// };

// export const getStaticProps = (context) => {
//   return { props: {} };
// };
export default Orders;
