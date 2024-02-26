import "./ExerciseCateCss.css";
import { useState, useRef } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const ExerciseCate = () => {
    const [openCate, setOpenCate] = useState(false);
    const location = useLocation();
    const Navigate = useNavigate();
    // const video = location.state.video;
    const cateRef = useRef();

    const handleCate = () => {
        setOpenCate((e) => !e);
    }
    const MyVideoList = () => {
        Navigate('/MyVideoList')
    }
    return (
        <div className="ExerciseCate">
            <div className="cate" onClick={handleCate}>
                <img src={`./img/category.svg`} />
            </div>
            <div 
                className={openCate ? 'openCate show' : 'openCate'}
                ref={cateRef}
            >
                <div className="myVideo"><button onClick={MyVideoList}>나의 운동 리스트</button></div>
                <div className="BeginnerVideo"><button>초급 동영상</button></div>
                <div className="intermediateVideo"><button>중급 동영상</button></div>
                <div className="advancedVideo"><button>고급 동영상</button></div>
            </div>
        </div>
    );
}
export default ExerciseCate;