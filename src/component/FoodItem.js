import { useNavigate } from 'react-router-dom';
import './FRecord.css';

const FoodItem = ({fsub,G,fmount}) => {

    return(
        <div className="FoodItem">
            <div className='Food'>
                {fsub}
            </div>
            <div className='FoodMount'>
                <div className='mountNum'>
                    {G || fmount}
                </div>
                <p className='mountTxt'>
                    {
                        G ? 'g' : '개'
                    }
                </p>
            </div>
            
        </div>
    )
}
export default FoodItem;