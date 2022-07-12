import styles from '../styles/insights.module.scss'
import { MdAnalytics} from 'react-icons/md'
import { MdBarChart } from 'react-icons/md'
import { MdStackedLineChart } from 'react-icons/md'

function Insights() {
  return (
    <div className={styles.insights}>
      <div
        className={styles.sales}
        style={{ backgroundColor: "#202528" }}
      >
        <MdAnalytics
          className={styles.span}
          style={{ color: "#202528" }}
        />
        <div className={styles.middle}>
          <div className={styles.left}>
            <h3>Total Sales</h3>
            <h1>$25,024</h1>
          </div>
          <div className={styles.progress}>
            <svg>
              <circle
                cx="38"
                cy="38"
                r="36"
              ></circle>
            </svg>
            <div className={styles.numbers}>
              <p>81%</p>
            </div>
          </div>
        </div>
        <small className={styles.muted}>
          {" "}
          Last 24 hours
        </small>
      </div>
      <div
        className={styles.expenses}
        style={{ backgroundColor: "#202528" }}
      >
        <MdBarChart className={styles.span} />
        <div className={styles.middle}>
          <div className={styles.left}>
            <h3>Total Expenses</h3>
            <h1>$14,160</h1>
          </div>
          <div className={styles.progress}>
            <svg>
              <circle
                cx="38"
                cy="38"
                r="36"
              ></circle>
            </svg>
            <div className={styles.numbers}>
              <p>62%</p>
            </div>
          </div>
        </div>
        <small className={styles.muted}>
          {" "}
          Last 24 hours
        </small>
      </div>
      <div
        className={styles.income}
        style={{ backgroundColor: "#202528" }}
      >
        <MdStackedLineChart
          className={styles.span}
        />
        <div className={styles.middle}>
          <div className={styles.left}>
            <h3>Total Income</h3>
            <h1>$10,864</h1>
          </div>
          <div className={styles.progress}>
            <svg>
              <circle
                cx="38"
                cy="38"
                r="36"
              ></circle>
            </svg>
            <div className={styles.numbers}>
              <p>44%</p>
            </div>
          </div>
        </div>
        <small className={styles.muted}>
          {" "}
          Last 24 hours
        </small>
      </div>
    </div>
  );
}

export default Insights