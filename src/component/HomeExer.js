import { useNavigate } from 'react-router-dom';

import './HomeExer.css';
import Record from './Record';

const HomeExer = () => {
    const navigate = useNavigate();

    const navigateRecord = () => {
        navigate("/record")
    }
    return (
        <div className="homeExer">
            <div className='total'>
                <h3>오늘 운동량</h3>
                <div className='kcal'>300kcal</div>
                <button onClick={navigateRecord}>기록하기</button>
                <div className='morekcal'>어제보다 <span>100kcal</span> 더 불태웠어요</div>
            </div>
        </div>
    )
}

export default HomeExer;