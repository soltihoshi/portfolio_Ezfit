
const CalendarFoodList = ({fsub, G, fkcal, fmount}) => {
    return(
        <div className="content">
            <div className="contentFlex">
                            <div className="subject">{fsub}</div>
                            <div className="count">{G ? G+'g' : fmount + '개'}</div>
                            <div className="kcal">{fkcal} kcal </div>
                        </div>
        </div>
    );
};

export default CalendarFoodList;