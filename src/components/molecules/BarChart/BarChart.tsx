import React from "react";
import {
  BarChart as Chart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
  Text,
} from "recharts";
import { labels } from "../../../shared/enums";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const BarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="70%" className="mt-5">
      <Chart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="name"
          axisLine={false}
          height={50}
        >
          <Label
            value={labels.TIME}
            position="insideBottom"
            className="text-xxs"
          />
        </XAxis>
        <YAxis axisLine={false} tick={false}>
          <Label
            value={labels.VALUE}
            angle={-90}
            position="insideLeft"
            className="text-xxs"
          />
          <Label
            value={labels.PROJECTION_OF_VALUES}
            position={{ x: 180, y: 0 }}
            className="font-bold text-sm"
          />
        </YAxis>
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#000" />
        <Bar dataKey="uv" stackId="a" fill="#ed8e53" />
      </Chart>
    </ResponsiveContainer>
  );
};
