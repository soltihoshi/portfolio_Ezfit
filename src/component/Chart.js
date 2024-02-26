import { useContext, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import {SettingUserDate} from '../App'

const Chart = () => {
    const data = useContext(SettingUserDate);

    const Weight = parseInt(data[0].userWeight);
    const Height = parseInt(data[0].userHeight);
    const Gender = data[0].userGender;
    const Age = parseInt(data[0].userAge);

    const Cacl = Gender === 'female' ?
    (447.6+(9.25*Weight) + (3.1*Height) - (4.33*Age)) :
    (88.4+(14.4*Weight) + (4.8*Height) - (5.68*Age));

   return (
        <PieChart
            data={[
                {
                    value: Cacl.toFixed(1), //값
                    color: "#8993FF", //채워지는 색
                    name: "name1"
                },
            ]}
            startAngle={90} // 시작 각도
            reveal={74} // 퍼센트 치수
            lineWidth={12} //도넛 두께
            background="#f3f3f3" // 색 채워지지 않은 부분
            lenthAngel={360} // 원 모양
            radius={45} // 반지름
            rounded // 동글
            animate // 진입 시 채워지는 스타일
            // 가운데 적히는 글씨, 글씨 스타일
            label={({ dataEntry }) => dataEntry.value > 0 ? dataEntry.value + "Kcal" : ''}
            labelPosition={0} // 라벨 위치
            labelStyle={{
                fontSize: "13px",
                fontWeight: "600",
                fill: "#333333"
            }}
        />
   );
};

export default Chart;