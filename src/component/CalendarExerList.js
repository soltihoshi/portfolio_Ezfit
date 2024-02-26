const CalendarExerList = ({subject, count, ekcal, Video, vkcal, set, Km}) => {
    return(
        <div className="content">
            <div className="contentFlex">
                <div className="subject">{subject !== '' ? subject : null}</div>
                <div className="count">{set !== null ? (count + '개 ' + set + 'set') : (Km !== null + Km + 'km')}</div>
                <div className="kcal">{ekcal ? ekcal + 'kcal' : ''}</div>
            </div>
            <div className="contentFlex">
                <div className="video">{Video === null ? '' : Video}</div>
                <div className="kcal">{vkcal ? vkcal + 'kcal' : ''}</div>
            </div>
        </div>
    );
}

export default CalendarExerList; 