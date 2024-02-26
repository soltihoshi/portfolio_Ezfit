import Showcalendar from "../component/Showcalendar"
import Gnb from "../component/Gnb";
import Hdiet from "../component/Hdiet";
import Pedometer from "../component/Pedometer";
import HomeExer from "../component/HomeExer";
import Header from "../component/Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return(
        <div className="Home">
            <Header 
                leftChild={'홈'}
                centerChild={'통계'}
            />
            <Showcalendar />
            <HomeExer />
            <Pedometer />
            <Hdiet />
            <div className="TrainingFeedBtn">
                <p>
                    사람들과 운동 기록을 공유하고 <br />
                    서로의 운동 지식을 나눠보세요!
                </p>
                <button onClick={()=>{navigate('/challpost')}}>오늘 운동 공유하기💪🏻</button>
            </div>
            <Gnb />
        </div>
    );
}

export default Home;