import React from "react";
import { useSelector } from "react-redux";
import { AgChartsReact } from "ag-charts-react";
function MyPieChart(props) {
  const dataArray = useSelector((state) => state.votes.data);
  const options = {
    data: dataArray,
    title: {
      text: "The favorite number ",
      fontSize: 28,
    },
    subtitle: {
      text: "statistic",
    },
    series: [
      {
        type: "pie",
        angleKey: "amount",
        labelKey: "voted_number",

        callout: {
          strokeWidth: 2,
        },
        fills: [
          "#587C7C",
          "#003F5E",
          "#007C84",
          "#E9D662",
          "#9EA615",
          "#BBE0CE",
          "#FEDCC1",
          "#F7A08C",
          "#F15640",
        ],
      },
    ],
  };
  return (
    <div>
      <div style={{ margin: "50px" }}>
        <AgChartsReact classname="pieChart" options={options} />
      </div>
    </div>
  );
}

export default MyPieChart;
