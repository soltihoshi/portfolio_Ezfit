import React, { useState, useCallback } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  ResponsiveContainer
} from "recharts";
import "./BarChart.css";
import Header from "./Header";
import Gnb from "./Gnb";

const data = [
    {
      name: "01/01",
      kcal: 412,
      id: 0
    },
    {
      name: "01/02",
      kcal: 574,
      id: 1
    },
    {
      name: "01/03",
      kcal: 735,
      id: 2
    },
    {
      name: "01/04",
      kcal: 280,
      id: 3
    },
    {
      name: "01/05",
      kcal: 768,
      id: 4
    },
    {
      name: "01/06",
      kcal: 480,
      id: 5
    },
    {
      name: "01/07",
      kcal: 349,
      id: 6
    }
];

const Statistics = () => {  

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedData, setSelectedData] = useState(null);
  const handleClick = useCallback(
    (entry: any, index: number) => {
      setActiveIndex(index);
      setSelectedData(data[index]);
    },
    [setActiveIndex]
  );

    return (
        <div className="Statistics">
            <Header 
                leftChild={'홈'}
                centerChild={'통계'}
            />
            <h3>운동량</h3>
            <div className="barChart">
              <ResponsiveContainer
                width="94%"
                height={300}>
                <BarChart
                  data={data}
                  margin={{
                    top: 5,
                    right: 20,
                    left: 10,
                    bottom: 5
                  }}
                  barCategoryGap="5%">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  interval={0} />
                <YAxis width={30} />
                  <Bar
                    dataKey="kcal"
                    barSize={10}
                    radius={10}
                    fill="#eee"
                    onClick={handleClick}>
                    {data.map((entry, index) => (
                      <Cell
                        cursor="pointer"
                        fill={index === activeIndex ? "#93ACFF" : "#ccc"}
                        key={`cell-${index}`}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="dawnBarChart">
              <div className="dawnHead">
                <p>소모 칼로리</p>
                <h2>{selectedData ? selectedData.kcal : data[0].kcal} kcal</h2>
              </div>
                <ResponsiveContainer
                  width="94%"
                  height={80}>
                  <BarChart
                      width={400}
                      height={170}
                      data={selectedData ? [selectedData] : [data[0]]}
                      layout="vertical">
                        <XAxis
                          type="number"
                          domain={[0, 1000]}
                          tickCount={2}
                          axisLine={false} 
                          tickLine={false}
                          stroke="#333"/>
                        <YAxis
                          type="category"
                          dataKey="name"
                          axisLine={false} 
                          dx={-10} 
                          tickLine={false} 
                          style={{ fill: "#333" }} />
                        <Bar
                          radius={50}
                          dataKey="kcal"
                          background={{radius: 20}}
                          fill="#93ACFF">
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <Gnb/>
        </div>
    );
};

export default Statistics;