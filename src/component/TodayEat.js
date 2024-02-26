import { useState } from "react";
import './TodayEat.css';

const TodayEat = () => {

    const [eat, setEat] = useState(0);

    const recordEat = () => {
        setEat(eat + 100);
    };

    return (
        <div className="TodayEat">
            <div>
                <p>아침</p>
                <button onClick={recordEat}>플러스</button>
                <p className="eat">
                    {eat}
                    <span> kcal</span>
                </p>
            </div>
            <div>
                <p>점심</p>
            </div>
            <div className="last">
                <p>저녁</p>
            </div>
        </div>
    );
};

export default TodayEat;
