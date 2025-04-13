import React, { use } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DetailsChart = ({ chartData }) => {
  const cData = use(chartData);
  const data = cData.data;
  //   console.log(data);
  return (
    <div className="mt-32 max-w-11/12 mx-auto">
      <h2 className="lg:text-6xl md:text-5xl text-4xl text-center mb-20">
        Our Progress Last-Year
      </h2>
      <div className="flex lg:flex-row md:flex-row flex-col gap-24">
        <div className="lg:w-7xl w-full ">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis dataKey="attended" />
              <Tooltip />
              <Legend />
              <Bar dataKey="successful" fill="#28a745" />
              <Bar dataKey="attended" className="fill-orange-400" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="lg:w-7xl w-full">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis dataKey="attended" />
              <Tooltip />
              <Legend />
              <Bar dataKey="successRate" fill="#28a745" />
              <Bar dataKey="attended" className="fill-orange-400" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DetailsChart;
