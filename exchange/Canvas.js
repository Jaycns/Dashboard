import React, {
  useState,
  useEffect,
} from "react";
import styles from "../styles/exchange/canvas.module.scss";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Legend,
  Title,
  Tooltip,
} from "chart.js";
ChartJs.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Legend,
  Title,
  Tooltip
);
function Canvas() {
  //create a new chart instance

  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartDataOptions, setchartDataOptions] =
    useState({});
  useEffect(() => {
    setChartData({
      type: "line",
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "BTC",
          data: [
            29374, 33537, 49631, 59095, 57828,
            36684, 33572, 39974, 48847, 48116,
            61004, 37764,
          ],
          borderColor: "red",
          borderWidth: 2,
        },
        {
          label: "ETH",
          data: [
            31500, 41000, 88800, 26000, 46000,
            32698, 5000, 3000, 18656, 24832,
            36844, 54864,
          ],
          borderColor: "blue",
          borderWidth: 2,
        },
      ],
    });
    setchartDataOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "whom'st let the dogs out",
        },
      },
    });
  }, []);
  // set options

  return (
    <div>
      <Line
        data={chartData}
        options={chartDataOptions}
        className={styles.chart}
      />
    </div>
  );
}

export default Canvas;
