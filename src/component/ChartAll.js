import { useState } from "react";
import Chart from "./Chart.js";
import ModalChart from "./ModalChart.js";

const ChartAll = () => {

    const [openModal, setOpenModal] = useState(false);
    const handleClick = (e) => {
        setOpenModal(true);
    }

    return (
        <div className="ChartAll">
            <button className="DietBtn"
                onClick={handleClick}
            >i</button>
            <p className="labelKcal">남은 칼로리</p>
            <Chart />
            {openModal && <ModalChart setOpenModal={setOpenModal} />}
        </div>
    );
};
export default ChartAll;