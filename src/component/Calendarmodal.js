import { useContext, useEffect, useState } from 'react';
import { CalendarList, ExerstateDispatch, FoodContext } from '../App.js';
import moment from "moment";

import CalendarExerList from './CalendarExerList.js';
import CalendarFoodList from './CalendarFoodList.js';

import './Calendarmodal.css';


const Calendarmodal = ({closeModal, value, prevDay, nextDay}) => {
    
    
    const {dateRemove} = useContext(ExerstateDispatch);

    const calendarData = useContext(CalendarList);
    const { foodState } = useContext(FoodContext);


    const currentDay = `${new Date(value).getFullYear()}년 ${new Date(value).getMonth()+1}월 ${new Date(value).getDate()}일`

    const moveNext = () => {
        nextDay();
    }
    const movePrev = () => {
        prevDay();
    }
    const handlecloseModal = () => {
        closeModal();
    }

    const handledateRemove = (date) => {
        const confirmed = window.confirm('삭제한 데이터는 복구할 수 없습니다.');
        if (confirmed) {
            dateRemove(date);
            closeModal();
        }
    };

    const morning = new Date(value);
    morning.setHours(0, 0, 0, 0);

    const afternoon = new Date(value);
    afternoon.setHours(23, 59, 59, 999);

    const filterDate = calendarData.filter((item) =>
        morning <= new Date(item.date) && new Date(item.date) <= afternoon
    );

    const filterDate2 = foodState.filter((item) =>
        morning <= new Date(item.date) && new Date(item.date) <= afternoon
    );
    
    return(
        <div className="Calendarmodal">
            <div className="Showdetail">
                <div className="detailTop">
                    <span className="backbtn" onClick={handlecloseModal}>뒤로가기</span>
                    <div className="carlendar">
                        <span className="prev" onClick={movePrev}>이전</span>
                        <div className="day">{currentDay}</div>
                        <span className="next" onClick={moveNext}>다음</span>
                    </div>
                    <span className="remove" onClick={()=>{handledateRemove(moment(value).format('YYYY-MM-DD'))}}>삭제하기</span>
                </div>
                <div className="exer">
                    <div className="top">
                        <div className="title">운동</div>
                        <button className="modify">편집</button>
                    </div>
                    <div>
                        {filterDate.length > 0 ? filterDate.map((it)=>(<CalendarExerList key={it.id} {...it} />)) : '기록되지 않았어요'}
                    </div>
                </div>
                <div className="food">
                    <div className="top">
                        <div className="title">식단</div>
                        <button className="modify">편집</button>
                    </div>
                    <div>
                        {filterDate2.length > 0 ? filterDate2.map((e)=>(<CalendarFoodList key={e.id} {...e}/>)) : '기록되지 않았어요'}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calendarmodal;