import { Navigate, useNavigate } from 'react-router-dom';
import './DietInfo.css';


const DietInfo = () => {
    const naviPrev = useNavigate();

    return (
        <div className="DietInfo">
            <div className="infoHeader">
                <p className="prevBtn">
                    <button
                        onClick={() => {naviPrev('/open')}}
                    ><img src="/img/left.png" alt="뒤로가기" /></button>
                </p>
                <p className="infoTitle">
                    굶어서 살 빼면 안 되는 이유
                </p>
            </div>
            <div className="infoContent">
                <div className="infoPhoto">
                    <img src="img/dietInfo.jpeg" alt="굶지마" />
                </div>
                <div className="infoTxt">
                    살 빼려고 음식을 안 먹었는데 오히려 살찌는 이유가 뭘까요? <br /><br />

                    섭취하는 칼로리가 줄면 체중이 일시적으로 줄 수는 있습니다. 
                    장기적으로는 신체에 문제가 생기고 다시 살이 찌기 쉬운 몸으로 변합니다. <br /><br />

                    갑자기 먹는 양을 줄이면 우리 몸은 이를 비상 상황으로 여기고, 
                    몸속 에너지를 아끼기 위해 노력합니다. 이로 인해 몸의 기초대사량이 
                    줄어들고 지방을 잘 축적하는 몸으로 변하죠. 이런 몸 상태에서 다시 
                    식사량을 늘리면 몸에 지방이 쉽게 축적돼 살이 잘 붙습니다. 
                    살이 찌고 빠지는 것이 자주 반복되면, 근육은 줄고 지방은 늘면서 
                    콩팥질환과 담낭질환 등에도 취약해집니다. <br /><br />

                    살을 건강하게 빼려면 무작정 굶지 말고 하루에 평소보다 500kcal 정도를 
                    적게 먹는 게 적절합니다. 탄수화물 섭취를 조금 줄이고 
                    단백질을 충분히 먹는 것도 효과적입니다. <br /><br />

                    기름기 많은 음식은 줄이고 채소와 과일을 충분히 먹어서 
                    건강하게 다이어트에 성공하세요!
                </div>
            </div>
        </div>
    );
};
export default DietInfo;