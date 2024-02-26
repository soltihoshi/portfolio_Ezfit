import React ,{ useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createContext, useContext } from "react";
import { ExerstateDispatch, CalendarList } from "../App";
import './Record.css';
import moment from "moment";

const Record = ({isEdit, originData}) => {

    const titleRef = useRef();
    const setRef = useRef();
    const kmRef = useRef();
    const countRef = useRef();
    
    const data = useContext(CalendarList);
    const {onCreate} = useContext(ExerstateDispatch);
    const navigate = useNavigate();

    const [id, setId] = useState(null);
    const [subject, setSubject] = useState('');
    const [fsub, setFsub] = useState(null);
    const [Km, setKm] = useState('');
    const [count, setCount] = useState('');
    const [set, setSet] = useState('');
    const [fkcal, setFkcal] = useState(null);
    const [ekcal, setEkcal] = useState(null);
    const [video, setVideo] = useState(null);
    const [vKcal, setvKcal] = useState(null);
    const [date, setDate] = useState(null);
    const [walk, setWalk] = useState(null);
    const [setwalk, setSetWalk] = useState(null);
    const [G, setG] = useState(null);
    const [fmount, setFmount] = useState(null);
    const [save, setSave] = useState(null);

    const changeKm = (e) => {
        setKm(e.target.value);
    };
    
    const changeSet = (e) => {
        setSet(e.target.value);
    };
   
    

    const changeSubject = (e) => {
        setSubject(e.target.value);
    };
    
    const changeCount = (e) => {
        setCount(e.target.value);
    };
    
    const [selectedOption, setSelectedOption] = useState('set');

    const changeOp = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleSubmit = () => {
        if(selectedOption === 'set'){
            if(subject.length < 1){
                titleRef.current.focus();
                return;
            }
            if(count.length < 1){
                countRef.current.focus();
                return;
            }
            if(set.length < 1){
                setRef.current.focus();
                return;
            }
        }
        if(selectedOption === 'km'){
            if(subject.length < 1){
                titleRef.current.focus();
                return;
            }
            if(Km.length < 1){
                kmRef.current.focus();
                return;
            }
        }
            setSubject('')
            setCount('')
            setKm('')   
            setSet('')
            
        onCreate(id, subject, fsub, Km,  count ,  set,  fkcal, ekcal,  vKcal, video, date, walk, setwalk, G, fmount, save);   
    }
    const canDate = () => {
        setSubject('');
        setCount('');
        setKm('');
        setSet('');
        navigate('/open')
    };
    return(
        <div className="Record">
            <div className="homeclose">
                <p className="backHome" onClick={()=>{navigate('/open')}}>취소</p>
                <p className="RecordClose" onClick={canDate}>확인</p>
            </div>
            <div className="recordBase">
                <input className='recordInput' type="text" placeholder="운동 이름/동영상 제목" ref={titleRef} value={subject} onChange={changeSubject}/>
                <div className="recordBtn">
                    <div className="rBtn">
                            {
                                selectedOption === 'set'
                                ? <input className='recordInput' type="text" ref={countRef} value={count} onChange={changeCount}/>
                                : null
                            }
                            {
                                selectedOption === 'set'
                                ? <p className="recordTxt">개</p>
                                : null
                            }
                            {
                                selectedOption === 'set'
                                ? <input className='recordInput' type="text" ref={setRef} value={set || ''} onChange={changeSet}/>
                                : <input className='recordInput' type="text" ref={kmRef} value={Km || ''} onChange={changeKm}/>
                            }
                        <select value={selectedOption} onChange={changeOp}>
                            <option className="recordTxt" name='set' value='set'>SET</option>
                            <option className="recordTxt" name='km' value='km'>KM</option>
                         </select>    
                    </div>        
                    <div className="plusBtn">
                        <button onClick={handleSubmit}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Record;