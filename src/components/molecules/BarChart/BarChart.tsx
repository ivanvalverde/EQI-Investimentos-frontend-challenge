import React from "react";
import {
  BarChart as Chart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";
import { labels } from "../../../shared/enums";
import { ChartInfo } from "../../../shared/types";
import useWindowDimensions from "../../hooks/useWindowDimensions";

interface IBarChartProps {
  apiData?: ChartInfo[];
}

export const BarChart = ({ apiData }: IBarChartProps): JSX.Element => {
  const { width } = useWindowDimensions();
  return (
    <ResponsiveContainer
      width="100%"
      height={width! < 640 ? "30%" : "70%"}
      className="mt-7 mobile:h-2/5"
    >
      <Chart
        data={apiData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" axisLine={false} height={40}>
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
        <Legend iconType={"circle"} />
        <Bar dataKey="Sem aporte" stackId="a" fill="#000" />
        <Bar dataKey="Com aporte" stackId="a" fill="#ed8e53" />
      </Chart>
    </ResponsiveContainer>
  );
};
