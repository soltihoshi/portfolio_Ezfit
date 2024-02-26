import { useNavigate } from 'react-router-dom';
import DietLeft from './DietLeftItem';
import DietRight from './DietRight';
import './Hdiet.css';

const dietTitle = ['아침', '점심', '저녁'];
const dietKcal = '칼로리 샘플';

const Hdiet = () => {

    const dietInfo = useNavigate();

    return (
        <div className="Hdiet">
            <h3>식단관리</h3>
            <div className="dietList">
                <DietRight />
                <div className="DietLeft">
                    <DietLeft 
                        dietTitle={dietTitle[0]}
                        dietKcal={dietKcal}
                    />
                    <DietLeft 
                        dietTitle={dietTitle[1]}
                        dietKcal={dietKcal}
                    />
                    <DietLeft 
                        dietTitle={dietTitle[2]}
                        dietKcal={dietKcal}
                    />
                </div>
            </div>
            <div className="DInfo" onClick={() => {dietInfo('/dietinfo')}}>
                <p className="infoTitle">무작정 굶으면 살이 더 찐다고?</p>
                <p>다이어트 하려고 굶었는데 오히려 살이 더 찌는 이유는?</p>
            </div>
        </div>
    );
}

export default Hdiet;