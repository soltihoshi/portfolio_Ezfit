import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DietLeftItem = ({dietTitle, dietKcal}) => {

    const dietBtn = useNavigate();

    return (
        <div className="DietLeftItem">
            <p className="DTitle">{dietTitle}</p>
            <button className="DietBtn" onClick={() => {dietBtn('/frecord')}}>
                <img src="/img/add.png" alt="오늘 먹은 것" />
            </button>
            <div className="DietLeftBottom">
                <p>
                    {dietKcal}
                    <span> kcal</span>
                </p>
            </div>
        </div>
    );
};

export default DietLeftItem;

// 아점저 먹은거 기록하는 컴포넌트