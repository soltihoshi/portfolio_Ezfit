import { useState } from "react";
import FeedHeader from "./FeedHeader";
import Gnb from "./Gnb";
import { Link, useNavigate } from 'react-router-dom';
import TagBox from "./TagBox";
import './Feed.css';

const DietFood = () => {

    const navigate = useNavigate()

    const goWrite = () => {
        navigate('/challpost')
    }

    const dietDummyList = [
        {
            id: 0,
            cate: 'dietFood',
            nickName: '박뫄뫄',
            photo: '/img/food01.jpg',
            content: '샐러드는 더 맛있게! 고구마와 삶은 달걀이 들어간 따뜻한 샐러드로 온몸에 영양 주입 🍠🥚' 
       },
       {
           id:1,
           cate: 'dietFood',
           nickName: '김이박최',
           photo: '/img/food02.jpg',
           content: '간단한 간식으로 그릭요거트볼💜'
       },
       {
           id: 2,
           cate: 'dietFood',
           nickName: '로또1등당첨기원',
           photo: '/img/food03.jpg',
           content: '오늘의 다이어트 식단 🥗 푸짐한 샐러드와 닭가슴살, 그리고 과일 한 조각! 건강한 하루 시작하기 💪'
       },
       {
           id: 3,
           cate: 'dietFood',
           nickName: '리썰컴퍼니재밌음',
           photo: '/img/food04.jpg',
           content: '집에서 손쉽게 만드는 비빔국수! 간단한데 개미친맛이다 진짜ㅠ 🍜😋'
       },
       {
           id: 4,
           cate: 'dietFood',
           nickName: '집가서자고싶다',
           photo: '/img/food05.jpg',
           content: '다이어트 중이라면 양배추쌈이 최고! 곤약쌀 넣었더니 칼로리 걱정 없이 양껏 먹을 수 있음!!🥗🌱'
       },
       {
           id: 5,
           cate: 'dietFood',
           nickName: '박뫄뫄',
           photo: '/img/food06.jpg',
           content: '키토김밥으로 빠르게 챙기는 저탄고지 식단! 회를 숭덩 썰어넣으니까 진짜 맛있다🍙🥩'
       },
       {
           id: 6,
           cate: 'dietFood',
           nickName: '내일점심뭐먹지',
           photo: '/img/food07.jpg',
           content: '일상 속 일반식! 오늘은 맛있는 제육😍 든든하게 식사하기 🍛🥢'
       },
       {
           id: 7,
           cate: 'dietFood',
           nickName: '저녁뭐먹지',
           photo: '/img/food08.jpg',
           content: '다이어트 중인데, 오늘은 간단하게 그릭요거트와 견과류로 하루 마무리! 칼로리도 적게 섭취하면서 영양은 충분히 챙기기 🥦🥜'
       },
       {
           id: 8,
           cate: 'dietFood',
           nickName: '점심뭐먹지',
           photo: '/img/food09.jpg',
           content: '매일 먹어도 질리지 않는 고소한 샐러드! 브로콜리와 아보카도로 건강 챙기기 🥦🥑 '
       },
       {
           id: 9,
           cate: 'dietFood',
           nickName: '지금너무싱싱미역상태',
           photo: '/img/food10.jpg',
           content: '운동 전에는 단백질 충전! 쉐이크 한 잔으로 에너지 보충하기 🏋️‍♂️ 홈트하다 첫 헬스장 가는 중...'
       },
       {
           id: 10,
           cate: 'dietFood',
           nickName: '빅뫄뫄',
           photo: '/img/food11.jpg',
           content: '다이어트 중에도 간식은 필수! 로우칼로리 곤약젤리로 달달하게 누리기. 🍬'
       },
       {
           id: 11,
           cate: 'dietFood',
           nickName: '김뫄뫄',
           photo: '/img/food12.jpg',
           content: '치킨 먹는 치팅데이! 허니,레드 반반이랑 맥주까지 한잔...하고 싶지만 참았다ㅠ 🍻🍗 '
       }
    ]

    return (
        <div className="DietFood">
            <FeedHeader/>
            <TagBox />
            <div className="cPhoto">
                {dietDummyList.map((diet) => (
                    <div key={diet.id}>
                        <Link to={`/diet/${diet.id}`} state={{ dietDummyList }}>
                            <img src={diet.photo} alt={`챌린지 이미지 ${diet.id}`} />
                        </Link>
                    </div>
                ))}
                {dietDummyList.map((diet) => (
                    <div key={diet.id}>
                        <Link to={`/diet/${diet.id}`} state={{ dietDummyList }}>
                            <img src={diet.photo} alt={`챌린지 이미지 ${diet.id}`} />
                        </Link>
                    </div>
                ))}
            </div>
            <button className="writing" onClick={goWrite}>
                <img src="/img/addW.png" alt="글쓰기" />
            </button>
            <Gnb />
        </div>
    );
};

export default DietFood;