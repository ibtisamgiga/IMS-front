import React from "react";
import DataCard from "../../components/shared/DataCard";
import { useTheme, useMediaQuery } from "@mui/material";
// import { BarChart } from '@mui/icons-material';
// import SalesBarChart from './BarChart';
import Chart from "../../components/shared/Chart";
import "./sadashboard.css";
function SADashboardPage() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const monthlyData = [
    { name: "Jan", sales: 300 },
    { name: "Feb", sales: 800 },
    { name: "Mar", sales: 400 },
    { name: "Apr", sales: 200 },
    { name: "May", sales: 120 },
    { name: "Jun", sales: 600 },
    { name: "Jul", sales: 700 },
    { name: "Aug", sales: 850 },
    { name: "Sep", sales: 900 },
    { name: "Oct", sales: 1000 },
    { name: "Nov", sales: 1200 },
    { name: "Dec", sales: 1300 },
    // ...
  ];
  return (
    <div className="body">
      <h1>Dashboard</h1>
      <div className={isMatch ? "row-md" : "row"}>
        <DataCard
          border={isMatch ? "" : "solid  #e3e3e3 2px"}
          totalCount={200}
          name={"Organization"}
          monthDifference={10}
        />
        <DataCard
          border={isMatch ? "" : "solid  #e3e3e3 2px"}
          totalCount={200}
          name={"Admins"}
          monthDifference={10}
        />
        <DataCard
          border={isMatch ? "" : "solid  #e3e3e3 2px"}
          totalCount={200}
          name={"Pending Complaints"}
          monthDifference={10}
        />
        <DataCard
          totalCount={200}
          name={"Resolved Complaints"}
          monthDifference={10}
        />
      </div>
      <div className="barchart">
        <Chart data={monthlyData} />
      </div>
    </div>
  );
}

export default SADashboardPage;
