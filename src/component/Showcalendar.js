import React, { useContext, useEffect, useState } from 'react';
import { CalendarList, FoodContext} from '../App.js';


import moment from "moment";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../component/Calendar.css'

import Calendarmodal from './Calendarmodal.js';

const Showaclendar = () => {

    
    const [value, onChange] = useState(new Date()); 
    const data = useContext(CalendarList); 
    const {foodState} = useContext(FoodContext); 
    const [modalOpen, setModalOpen] = useState(false); 

    const dayList = data.length > 0 ? data.map((it) => (moment(new Date(it.date)).format('YYYY-MM-DD'))) : foodState.map((item)=>(moment(new Date(item.date)).format('YYYY-MM-DD')));


    const showModal = (date) => {
        onChange(date);
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const prevDay = () =>{
        onChange(
            new Date(value.getFullYear(), value.getMonth() , value.getDate() -1 )
        )
    }
    const nextDay = () =>{
        onChange(
            new Date(value.getFullYear(), value.getMonth() , value.getDate() +1 )
        )
    }

    const addContent = ({date}) => {
        const contents = [];
        if (dayList.find((day) => day === moment(date).format('YYYY-MM-DD'))) {
            contents.push(
              <>
                <div className="dots"></div>
              </>
            );
          }
          return <div>{contents}</div>;
    }

    return(
        <div className="Home">
            <Calendar 
                onChange={onChange}
                value={value}
                formatDay={(locale, date) => moment(date).format("DD")}
                next2Label={null}
                prev2Label={null}
                tileContent={addContent}
                calendarType = "hebrew"
                onClickDay = {(value, event) => showModal(value) }
                navigationAriaLabel={null}
            >
            </Calendar>
            <div className={modalOpen ? 'modal show' : 'modal'}><Calendarmodal showModal={showModal} closeModal={closeModal} value={value} prevDay={prevDay} nextDay={nextDay} dayList={dayList}/></div>
        </div>
    );
}
export default Showaclendar;
