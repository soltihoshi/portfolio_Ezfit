import { useContext, useEffect, useState } from "react";
import { ExerDispatchContext } from "../App";
import './ExerItem.css';
import { useNavigate } from "react-router-dom";

const ExerciseItem = ({id, subject, fsubject, Km, count, set, fkcal, ekcal,  vkcal ,Video, date, walkcount, settingwalk, savevideo}) => {    
    const navigate = useNavigate()
    return(
        <div className="ExerciseItem">
            <div className="ExerTitle">
                {subject || Video}
            </div>
            <div className="ExerMin">
                <p className={
                    set ? "subCount" : "noCount" 
                }>
                <input readOnly value={count || ""}  /> 
                </p>
                {
                    set ? <p className="txt">개</p> : <p></p>   
                } 
            </div>
            <div className="ExerTotal">
                <p className="subTotal">
                <input 
                    value={
                        set ? set : (Km ? Km : vkcal) || ''
                    } 
                    readOnly
                    />
                </p>
                {
                    subject ? (set ? <p className="txt">set</p> : <p className="txt">km</p>) : <p className="txt">kcal</p>
                } 
                
            </div>
            <p onClick={()=>{navigate('/open')}}>삭제하기</p>
        </div>
    )
}

export default ExerciseItem;