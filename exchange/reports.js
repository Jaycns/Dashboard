import React from "react";
import styles from "../styles/exchange/reports.module.scss";

function MonthlyReports() {
  return (
    <div className={styles.reports}>
      <div className={styles.report}>
        <h3>Income</h3>
        <div>
          <details>
            <h1>$29,023</h1>
            <h6 className={styles.success}>
              +3.5%
            </h6>
          </details>
          <p className={styles.muted}>
            Compared to $26,938 last month
          </p>
        </div>
      </div>
      {/* End of Report */}
      <div className={styles.report}>
        <h3>Expenses</h3>
        <div>
          <details>
            <h1>$9,005</h1>
            <h6 className={styles.danger}>
              -6.5%
            </h6>
          </details>
          <p className={styles.muted}>
            Compared to $11,912 last month
          </p>
        </div>
      </div>
      {/* End of Report */}
      <div className={styles.report}>
        <h3>Cashback</h3>
        <div>
          <details>
            <h1>$9,004</h1>
            <h6 className={styles.success}>
              +7.1%
            </h6>
          </details>
          <p className={styles.muted}>
            Compared to $3,028 last month
          </p>
        </div>
      </div>
      {/* End of Report */}
      <div className={styles.report}>
        <h3>Turnover</h3>
        <div>
          <details>
            <h1>$118,224</h1>
            <h6 className={styles.danger}>
              -17.8%
            </h6>
          </details>
          <p className={styles.muted}>
            Compared to $114,234 last month
          </p>
        </div>
      </div>
      {/* End of Report */}
    </div>
  );
}

export default MonthlyReports;
