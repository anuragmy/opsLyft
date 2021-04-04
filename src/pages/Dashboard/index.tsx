import React from "react";
import Grid from "@material-ui/core/Grid";
import DataCard from "../../components/DataCard";
import DateRange from "../../components/DateRange";
import Chart from "../../components/Chart";
import {
  MONTH_TO_DATE_ACTIVE_CASES,
  LAST_MONTH_ACTIVE_CASES,
  ESTIMATED_MONTH_END_CASES,
} from "../../constants";

const data = {
  labels: ["Active", "Decreased", "Recovered"],
  datasets: [
    {
      label: "Active Cases",
      data: [12, 19, 3],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Recovered Cases",
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: "rgb(54, 162, 235)",
    },
    {
      label: "Decreased Cases",
      data: [3, 10, 13],
      backgroundColor: "rgb(75, 192, 192)",
    },
  ],
};

const Dashboard = () => {
  return (
    <>
      <Grid container spacing={2} className="grid">
        <Grid item xs={12}>
          <DateRange />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DataCard name={MONTH_TO_DATE_ACTIVE_CASES} />
        </Grid>
        <Grid item sm={6} xs={12} md={4}>
          <DataCard name={LAST_MONTH_ACTIVE_CASES} />
        </Grid>
        <Grid item xs={12} md={4}>
          <DataCard name={ESTIMATED_MONTH_END_CASES} />
        </Grid>
        <Grid item xs={12}>
          <Chart data={data} />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
