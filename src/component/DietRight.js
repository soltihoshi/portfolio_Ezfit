import { useState } from "react";
import ChartAll from "./ChartAll.js";
import Drink from "./Drink";

const DietRight = () => {

    return (
        <div className="DietRight">
            <Drink />
            <ChartAll />
        </div>
    );
};

export default DietRight;