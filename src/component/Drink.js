
import { useState } from "react";
import ModalDrink from "./ModalDrink";

const Drink = () => {

    const [openModal, setOpenModal] = useState(false);
    const handleClick = (e) => {
        setOpenModal(true);
    }

    const [drinkWater, setDrinkWater] = useState(0);

    const waterPlus = () => {
        if(drinkWater < 2){
            setDrinkWater(+(drinkWater + 0.2).toFixed(2))
        }
    };
    const waterMinus = () => {
        if(drinkWater > 0){
            setDrinkWater(+(drinkWater - 0.2).toFixed(2))
        }
    };

    return (
        <div className="Drink">
            <p className="DTitle">음수량</p>
            <button className="DietBtn"
                onClick={handleClick}
            >i</button>
            <div className="cup"><img src="/img/water.svg" alt="물컵" /></div>
            <div className="drinkBtn">
                <button
                    onClick={waterMinus}
                ><img src="/img/remove.png" alt="마이너스" /></button>
                <p>{drinkWater}<span> L</span></p>
                <button
                    onClick={waterPlus}
                ><img src="/img/add.png" alt="플러스" /></button>
            </div>
            {openModal && <ModalDrink setOpenModal={setOpenModal} />}
        </div>
    );
};

export default Drink;