import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from "recharts";


const BarCharts = ({data}) => {

  const [clickBar, setClickBar] = useState();
  const handleClickBar = (e) => {
    setClickBar(data.kcal)
    console.log(clickBar);
  }

  return (
    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: 10,
          bottom: 5
        }}
      barCategoryGap="5%"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="name"
        interval={0}
      />
      <YAxis width={30} />
      <Tooltip
        labelStyle={{
          fontSize: '10px',
          fontWeight: 500
        }}
        wrapperStyle={{
          padding: '2px',
          textAlign: 'center'
        }}
        contentStyle={{
          fontWeight: 600,
          color: '#333',
          fontSize: '14px'
        }}
        cursor={{stroke: '#eee'}}
      />
      <Bar
        dataKey="kcal"
        barSize={10}
        radius={10}
        fill="#93ACFF"
        onClick={handleClickBar}
      />
    </BarChart>
    </ResponsiveContainer>
  );
};

export default BarCharts;