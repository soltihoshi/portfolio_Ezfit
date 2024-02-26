import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import {SettingUserDate} from "../App"
import styled from "styled-components";

import Gnb from "../component/Gnb";
import MypageEdit from "../component/MypageEdit";
import Mypagemodal from "../component/Mypagemodal";
import "../component/Mypagemaincss.css";

const Mypagemain = ({remoteModal, setRemoteModal, setFirst, first}) => {

    const userdata = useContext(SettingUserDate);
    const userGrade = userdata.map((it)=>(it.userGrade));

    const navigate = useNavigate();

    const [ismodal, setIsmodal] = useState(false);
    const [isbodymodal, setIsbodymodal] = useState(false);

    const showModal = () => {
        setIsmodal(true);
    }
    const closeModal = () => {
        setIsmodal(false);
    }

    const showBodyModal = () => {
        setIsbodymodal(true);
    }
    const closeBodyModal = () => {
        setIsbodymodal(false);
    }


    const [bodyweight, setBodyWeight] = useState ('0');
    const [bodymuscle, setBodyMuscle] = useState ('0');
    const [bodyfat, setBodyFat] = useState ('0');

    const changeWeight = (Weight) => {
        setBodyWeight(Weight);
    };
    const changeMuscle = (Muscle) => {
        setBodyMuscle(Muscle);
    };
    const changeFat = (Fat) => {
        setBodyFat(Fat);
    };

    useEffect(()=>{
        if(bodyweight !== ''){
            const changeWeight = (Weight) => {
                setBodyWeight(Weight);
            };
        } else {
            setBodyWeight('0');
        }
        if(bodymuscle !== ''){
            const changeMuscle = (Muscle) => {
                setBodyMuscle(Muscle);
            };
        } else {
            setBodyMuscle('0');
        }
        if(bodyfat !== ''){
            const changeFat = (Fat) => {
                setBodyFat(Fat);
            };
        } else {
            setBodyFat('0');
        }
    },[bodyweight,bodymuscle,bodyfat])

    const targetRef = useRef();
    const textref = useRef();
    const textref2 = useRef();

    useEffect(()=>{
        if (first){
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
            setFirst(false);
        }
    },[remoteModal]);

    const clickRed = () => {
        textref.current.style.display = 'block'; 
    };
    const clickRed2 = () => {
        textref2.current.style.display = 'block'; 
    };
    
    const [imgsrc, setImgsrc] = useState('./img/beginner.png');

    useEffect(()=>{
        if(userGrade[0] === 'beginner'){
            setImgsrc('./img/beginner.png')
        }
        if(userGrade[0] === 'middleClass'){
            setImgsrc('./img/middleClass.png')
        }
        if(userGrade[0] === 'advanced'){
            setImgsrc('./img/advanced.png')
        }
    },[,userGrade]);

    return(
        <div className="Mypagemain">
            <div className="userPicture" >
                <div className="Pictureimg">
                    <img src= "./img/cat01.jpeg" alt="유저 프로필 사진"/>
                </div>
                <div className={isbodymodal ? 'Bodymodal show' : 'Bodymodal'}><Mypagemodal closeBodyModal={closeBodyModal} /></div>
                <p className="userName"><span><img src={imgsrc}/></span>그린아카데미</p>
            </div>
            <div className="Editbutton" onClick={showBodyModal}>편집</div>
            <div className={ismodal ? 'modal show' : 'modal'}><MypageEdit closeModal={closeModal} changeWeight={changeWeight} changeMuscle={changeMuscle} changeFat={changeFat}/></div>
            <div className="myBody">
                <div className="title">
                    <div className="text">나의 신체기록</div>
                    <div className="bodyedit" onClick={showModal}>편집</div>
                </div>
                <div className="bodybadge">
                    <div className="badge1">
                        <img src="./img/MyWeight.svg"/>
                        <p>{bodyweight}kg</p>
                    </div>
                    <div className="badge2">
                        <img src="./img/MyMuscle.svg"/>
                        <p>{bodymuscle}kg</p>
                    </div>
                    <div className="badge3">
                        <img src="./img/MyFat.svg"/>
                        <p>{bodyfat}%</p>
                    </div>
                </div>
            </div>
            <div className="myBadge">
                <div className="title">
                    <div className="text">배지</div>
                    <TextRed ref={textref2}>히히 이거 못만들어쪙 (bTuT)b</TextRed>
                    <div className="bodyedit" onClick={clickRed2}>더보기</div>
                </div>
                <div className="bodybadge">
                    <div className="badge1">
                        <img src="./img/medal03.png"/>
                        <p>10,000걸음 걷기</p>
                    </div>
                    <div className="badge2">
                        <img src="./img/medal01.png"/>
                        <p>첫 피드 업데이트</p>
                    </div>
                    <div className="badge3">
                        <img src="./img/medal02.png"/>
                        <p>첫 챌린지 시작</p>
                    </div>
                </div>
            </div>
            <div className="mygrade">
                <div className="title">
                    <div className="text">나의 기록</div>
                    <TextRed ref={textref}> 이것도 ^^)b...</TextRed>
                    <div className="bodyedit" onClick={clickRed}>더보기</div>
                </div>
                <div className="bodybadge">
                    <div className="badge1">
                        <img src="./img/gradeupstair.png"/>
                        <p>37층 돌파!</p>
                    </div>
                    <div className="badge2">
                        <img src="./img/gradewalking.png"/>
                        <p>78,062보 달성!</p>
                    </div>
                    <div className="badge3">
                        <img src="./img/graderide.png"/>
                        <p>320.5km!</p>
                    </div>
                </div>
            </div>
            <div className={remoteModal ? 'modal show' : 'modal'} ref={targetRef}>
                <div className="modalwrap">
                    <div className="modaltext">나의 챌린지</div>
                    <div className="modalsubject">
                        <img src="./img/challenge01.jpg"/>
                    </div>
                </div>
            </div>
            <Gnb />
        </div>
    );
}
export default Mypagemain;

const TextRed = styled.div`
    display : none;
    color : crimson;
    font-size : 15px;
    font-weight : 600;
    text-align : center;
`
const None = styled.div`
    display : none;
`