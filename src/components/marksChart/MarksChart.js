import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const MarksChart = () => {
  const data = [
    {
      name: "MileStone 1",
      assignment: 60,
      quiz: 10,
    },
    {
      name: "MileStone 2",
      assignment: 58,
      quiz: 8,
    },
    {
      name: "MileStone 3",
      assignment: 59,
      quiz: 9,
    },
    {
      name: "MileStone 4",
      assignment: 60,
      quiz: 10,
    },
    {
      name: "MileStone 5",
      assignment: 55,
      quiz: 10,
    },
    {
      name: "MileStone 6",
      assignment: 56,
      quiz: 9,
    },
    {
      name: "MileStone 7",
      assignment: 60,
      quiz: 10,
    },
  ];
  return (
    <div>
      <LineChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey='assignment' stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey='quiz' stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
    </div>
  );
};

export default MarksChart;
