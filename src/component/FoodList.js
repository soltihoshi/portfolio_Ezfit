import { FoodContext } from "../App";
import { useContext } from "react";
import FoodItem from "./FoodItem";

const FoodList = () => {
    const { foodState } = useContext(FoodContext);
    return(
        <div className="FoodList">
            {foodState.map((e,id)=>(
                <FoodItem {...e} key={id}/>
            ))}
        </div>
    )
}
export default FoodList;