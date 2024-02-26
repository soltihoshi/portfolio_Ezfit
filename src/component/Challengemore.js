import ChallengemoreCss from "./ChallengmoreCss.css";
import Challengemodal from "./Challengemodal";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Challengemore = ({remoteModal, setRemoteModal, setFirst, first}) => {
    
    const navigate = useNavigate();
    const btnBack = () => {
        navigate('/challenge');
    }

    const handleTrue = () => {
        setRemoteModal(true);
    }
    const handleFalse = () => {
        setRemoteModal(false);
    }
    useEffect(()=>{
        setRemoteModal(false);
    },[])

    const subjectTitle = '30일 챌린지 : 전신운동'

    return(
        <div className="Challengemore">
            <div className="btnBack" onClick={btnBack}>뒤로가기</div>
            <div className="topSubject">{subjectTitle}</div>
            <p className="video" style={{ height: '54.11111vw' }}><iframe src= "https://www.youtube.com/embed/qNesRFa1VmM"  frameborder="0" frameBorder="0" style={{ width: '100%', height: '100%' }}/></p>
            <div className="info">
            이번 달은 전신운동 입니다. 전신운동은 몸의 모든 부분을 활성화하며 균형을 유지하는 전신운동은 건강과 탄력을 책임집니다. 전신을 강화하고 근력을 키우며 더 나은 자세와 에너지를 경험하세요.<br /><br />
            이번 챌린지는 10분 동안 총 15가지의 동작을 진행합니다.
            <br /><br />
                <div className="exer_info">
                1번 동작 : 워밍업 - 허리 돌리기
                <br />
                2번 동작 : 워밍업 - 고관절 회전하기
                <br />
                3번 동작 : 워밍업 - 제자리 걷기
                <br />
                4번 동작 : 양손 머리위로 옆구리 번갈아 숙이기
                <br />
                5번 동작 : 팔꿈치와 무릎을 뒤로 당기며 제자리 걷기
                <br />
                6번 동작 : 허리에 손 얹고 무릎을 두 번씩 들어올리기
                <br />
                7번 동작 : 
                손바닥 들어 올리며 좌우로 발 내딛기
                <br />
                8번 동작 : 점프 않는 팔벌려 뛰기
                <br />
                9번 동작 : 손바닥을 앞에서교차 & 머리위로 교차하며 좌우로 스텝하기
                <br />
                10번 동작 : 팔들어 올리기 2번 + 팔꿈치펴기 2번
                <br />
                11번 동작 : 팔꿈치 좌우로 벌리며 무릎 들어 올리기
                <br />
                12번 동작 : 좌우로 스텝하며 머리위로 손 뻗기
                <br />
                13번 동작 : 두손을 얼굴 높이로 들고 좌우로 발 내딛기
                <br />
                14번 동작 : 허벅지 잡고 좌우로 두 번씩 삭체 숙여 옆구리 운동하기 
                <br />
                15번 동작 : 제자리에서 큰걸음
                <br />
                </div>
            </div>
            <div className="goChallenge">
                <button onClick={handleTrue}> 도전하기 </button>
            </div>
            <div>
                <p className="challengetext">종료된 챌린지</p>
                <div className="endcontent">
                    <div><img src="./img/challenge02.jpg"/></div>
                    <div><img src="./img/challenge03.jpg"/></div>
                </div>
            </div>
            <div  className={remoteModal ? "show" : "modal"}><Challengemodal  remoteModal={remoteModal} setRemoteModal={setRemoteModal} first={first} setFirst={setFirst}/></div>
        </div>
    );
};

export default Challengemore; 
