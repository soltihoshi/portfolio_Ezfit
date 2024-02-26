import React ,{ useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ExerstateDispatch, CalendarList, FoodContext } from "../App";
import { useContext } from "react";
import './FRecord.css';
import moment from "moment";


const FoodRecord = () => {
    const { dispatchFood } = useContext(FoodContext);
    const navigate = useNavigate();

    const fsubRef = useRef();
    const fmountRef = useRef();
    const GRef = useRef();

    const [id, setId] = useState(null);
    const [subject, setSubject] = useState(null);
    const [fsub, setFsub] = useState('');
    const changeFsub = (e) => {
        setFsub(e.target.value);
    }
    const [Km, setKm] = useState(null) 
    const [count, setCount] = useState(null);
    const [set, setSet] = useState(null)
    const [fkcal, setFkcal] = useState(null)
    const [ekcal, setEkcal] = useState(null)
    const [video, setVideo] = useState(null);
    const [vKcal, setvKcal] = useState(null);
    const [date, setDate] = useState(null)
    const [G, setG] = useState('')
    const changeFmount = (e) => {
        setFmount(e.target.value);
    }
    const changeG = (e) => {
        setG(e.target.value);
    }
    const [fmount, setFmount] = useState('')
    const [walk, setWalk] = useState(null)
    const [setwalk, setSetWalk] = useState(null)
    const [save, setSave] = useState(null)

    const clickSaveFood = () => {
        if(mColor === true){
            if(fsub.length < 1){
                fsubRef.current.focus();
                return
            }
            if(fmount.length < 1){
                fmountRef.current.focus();
                return
            }
        }
        if(gColor === true){
            if(fsub.length < 1){
                fsubRef.current.focus();
                return
            }
            if(G.length < 1){
                GRef.current.focus();
                return
            }
        }

        dispatchFood({
            type: 'CREATE_FOOD',
            data: {
                id,
                subject,
                fsub,
                Km,
                count,
                set,
                fkcal,
                ekcal,
                vKcal,
                video,
                date: moment(new Date).format('YYYY-MM-DD'),
                walk,
                setwalk,
                G,
                fmount,
                save
            }
            
        })
       
        setFkcal('');
        setFmount('');
        setFsub('');
        setG('');
        
    }

    
    const [mInput, setMInput] = useState(2)
    const [gInput, setGInput] = useState(1)
    const [mColor, setMColor] = useState(true)
    const [gColor, setGColor] = useState(false)
    const clickMBtn = () => {
        setMInput(2)
        setGInput(1)
        setGColor(false)
        setMColor(true)
        setG('');
    }
    const clickGBtn = () => {
        setMInput(1)
        setGInput(2)
        setGColor(true)
        setMColor(false)
        setFmount('');
    }

    return (
        <div className="FoodRecord">
            <p className="backHome" onClick={()=>{navigate('/open')}}>취소</p>
            <div className="recordBase">
                <input type="text" placeholder="음식이름" value={fsub} ref={fsubRef} onChange={changeFsub}/>
                </div>
                <div className="recordBtn">
                    <div className="foodMount">
                        <div className="mount">
                            <div className="fBtns">
                                 <p  onClick={clickMBtn} style={{ zIndex: mInput }} className={
                                    mColor ? "mTxt" : "mTxtnone" 
                                 } >개</p>
                                 <p  onClick={clickGBtn} style={{ zIndex: gInput }} className={
                                    gColor ? "gTxt" : "gTxtnone"
                                 } >g</p>
                            </div>
                           <input onChange={changeFmount} type="text" ref={fmountRef} value={fmount} style={{ zIndex: mInput}} className="mInput"/>
                            <input onChange={changeG} type="text" ref={GRef} value={G} style={{ zIndex: gInput }} className="gInput"/>   
                                                                                                   
                        </div>
                        <div className="plusBtn">
                        <button onClick={() => clickSaveFood()}>+</button>
                    </div>  
                    </div>
                </div>
            
        </div>
    )
}

export default FoodRecord;