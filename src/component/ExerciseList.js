import { CalendarList, ExerstateContext } from "../App";
import ExerciseItem from "./ExerciseItem";
import { useContext } from "react";
import { useState } from "react";


const ExerciseList = () => {

    const data = useContext(CalendarList);   
    
    return (
        <div className="ExerciseList">
            <div className="ExerItem">
                {data.map((e,id)=>(
                    <ExerciseItem {...e} key={id} />
                ))}
                
            </div>
            
              
        </div>
    )
}



export default ExerciseList;