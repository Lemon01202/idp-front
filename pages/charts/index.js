import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2';
import styles from '../../styles/charts.module.scss';
import { useSocket } from '../../src/context/use-socket';
import { format, compareAsc } from 'date-fns';
import { randomDate } from '../../src/utils/getRandomDate';
import Layout from "../../src/components/layout/layout";

const Charts = () => {
  const { chartData } = useSocket();
  const date = [];

  chartData && chartData.map(() => {
    date.push(randomDate(new Date(2010, 0, 1), new Date()));
  })

  date.sort(compareAsc);

  const formattedDate = date.map((item) => {
    return format(item, 'MM/dd/yyyy');
  })

  const data = {
    labels: formattedDate,
    datasets: [
      {
        label: "Charts",
        data: chartData,
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgb(173, 255, 86)",
          "rgb(207, 86, 255)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(173, 255, 86, 1)",
          "rgba(207, 86, 255, 1)",
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <Layout>
      <div className={styles.chartContainer}>
        <Bar data={data} width={50} height={35} />
      </div>
    </Layout>
  );
};

export default Charts;