import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

import Gnb from "../component/Gnb";
import FeedHeader from "../component/FeedHeader";

const Challenge = () => {

    const challengeDummyList = [
        {
            id: 0,
            cate: 'challenge',
            nickName: '박뫄뫄',
            photo: '/img/cat01.jpeg',
            content: '챌린지 완료까지 D-30!! 한 달만 더 해보자 파이팅!!!💪'
        },
        {
            id: 1,
            cate: 'challenge',
            nickName: '헬린이처음보나',
            photo: '/img/cat02.jpeg',
            content: '일주일에 최소 2번 이상 만보씩 걸으니까 체력이 엄청 늘어난 것 같다! 잠도 엄청 잘 자는 중...😪😪'
        },
        {
            id: 2,
            cate: 'challenge',
            nickName: '홈트',
            photo: '/img/cat03.jpeg',
            content: '새해, 새로운 목표! 이번 달은 꾸준한 운동으로 건강한 습관을 만들어보자. 함께 동참해 주세요! 💪'
        },
        {
            id: 3,
            cate: 'challenge',
            nickName: '닉네임',
            photo: '/img/cat04.jpeg',
            content: '오늘의 목표: 더 나은 버전의 나를 만들기! 함께 30일 동안의 운동 챌린지에 동참해서 스스로에게 도전하기!! 💥'
        },
        {
            id: 4,
            cate: 'challenge',
            nickName: '유저1',
            photo: '/img/cat05.jpeg',
            content: '운동은 나의 자신감! 오늘도 꾸준히 노력하자.💙'
        },
        {
            id: 5,
            cate: 'challenge',
            nickName: '집가고싶다',
            photo: '/img/cat06.jpeg',
            content: '다이어트는 몸과 마음의 건강을 동시에 챙기는 여정. 오늘도 운동으로 건강탑 한번 쌓아보자. 👊 👊 '
        },
        {
            id: 6,
            cate: 'challenge',
            nickName: '취업하고싶어요',
            photo: '/img/cat07.jpeg',
            content: '친구랑 같이 챌린지 중💙 다같이 건강하게 오래오래 보자!!'
        },
        {
            id: 7,
            cate: 'challenge',
            nickName: '나도멋진커리어우먼하고싶다',
            photo: '/img/cat08.jpeg',
            content: '회사 스트레스는 운동으로🤜🤜'
        },
        {
            id: 8,
            cate: 'challenge',
            nickName: '저도취업할래요',
            photo: '/img/cat09.jpeg',
            content: '여유로운 주말, 야외에서의 운동이 최고다! 공원에서 산책이나 조깅하면 맑은 공기 한가득😍 자연인이 된 기분🌳🌳'
        },
        {
            id: 9,
            cate: 'challenge',
            nickName: '퇴근하고운동하는삶살고싶다',
            photo: '/img/cat10.jpeg',
            content: '요즘 앉아만 있으니까 스트레칭의 중요성을 깨닫고 있음😢 바빠도 하루 10분 스트레칭 꼭 하기!!'
        },
        {
            id: 10,
            cate: 'challenge',
            nickName: '아주원시적인코드구나',
            photo: '/img/cat11.jpeg',
            content: '"오늘은 몸이 너무 피곤해서 가벼운 스트레칭만...ㅠㅠ 컨디션이 좋지 않은 날은 가볍게라도 운동하자🧘‍♀️'
        },
        {
            id: 11,
            cate: 'challenge',
            nickName: '채찍피티보다나은게뭐니',
            photo: '/img/cat12.jpeg',
            content: '땀흘리며 뛰는 건 진짜 죽을 맛😭 그래도 다 뛰고 천천히 걸을 때는 그렇게 개운할 수가 없다!😜 처음엔 힘들겠지만, 운동이 내 일상의 한 부분이 될 수 있도록 노력하자!'
        }
    ]

    const navigate = useNavigate();

    const goDetail = () =>{
        navigate('/challengemore')
    }

    const goWrite = () => {
        navigate('/challpost');
    }

    return (
        <div className="Challenge">
            <FeedHeader/>
            <div className="challengeBn">
                <p className="cTxt">현재 <span>278</span>명이 챌린지 진행 중이에요!</p>
                <p className="cBtn">
                    <button onClick={()=>{navigate('/challengemore')}}>도전하러 가기 &gt;</button>
                </p>
            </div>
            <div className="cFeed">
                <h3>챌린지</h3>
                <div className="cPhoto">
                    {challengeDummyList.map((challenge) => (
                        <div key={challenge.id}>
                            <Link to={`/challenge/${challenge.id}`} state={{ challengeDummyList }}>
                                <img src={challenge.photo} alt={`챌린지 이미지 ${challenge.id}`} />
                            </Link>
                        </div>
                    ))}
                    {challengeDummyList.map((challenge) => (
                        <div key={challenge.id}>
                            <Link to={`/challenge/${challenge.id}`} state={{ challenge }}>
                                <img src={challenge.photo} alt={`챌린지 이미지 ${challenge.id}`} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <button className="writing" onClick={goWrite}>
                <img src="/img/addW.png" alt="글쓰기" />
            </button>
            <Gnb />
        </div>
    );
};

export default Challenge;