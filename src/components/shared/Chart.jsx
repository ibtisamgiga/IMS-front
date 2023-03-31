import React from "react";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Chart = ({ data, multi }) => {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      {multi ? (
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            barSize={60}
            margin={{ bottom: 20 }}
            dataKey="pv"
            fill="#5184ec"
          />
          <Bar
            barSize={60}
            margin={{ bottom: 20 }}
            dataKey="uv"
            fill="#2ab38e"
          />
        </BarChart>
      ) : (
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="sales"
            fill="#5184ec"
            barSize={60}
            margin={{ bottom: 20 }}
          />
        </BarChart>
      )}
    </ResponsiveContainer>
  );
};

export default Chart;
