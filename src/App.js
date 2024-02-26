import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import styled from 'styled-components';
import moment from "moment";
import './App.css';

import Home from './pages/Home';
import DietInfo from './component/DietInfo';
import Gnb from './component/Gnb';
import Exercise from './pages/Exercise';
import Mypagemain from './pages/Mypagemain';
import Search from './component/Search';
import RecordPage from './component/RecordPage';
import FoodRecordPage from './component/FoodRecordPage';
import Statistic from './component/Statistics';
import Header from './component/Header';
import Freefeed from './component/Freefeed';
import Challenge from './pages/Challenge';
import Challengemore from './component/Challengemore';
import MypageEdit from './component/MypageEdit';
import DietFood from './component/DietFood';
import VideoDetail from './component/VideoDetail';
import MyVideoList from './component/MyVideoList';
import ChallPost from './component/ChallPost';
import ChallengeDetail from './component/ChallengeDetail';
import DietFoodDetail from './component/DietFoodDetail';

export const ExerstateDispatch = React.createContext();
export const CalendarList = React.createContext();
export const SettingUserDate = React.createContext();
export const FoodContext = React.createContext();
export const MyVideoStateContext = React.createContext();
export const MyVideoDispatchContxet = React.createContext();


const VideoDummy = [
    {
        VideoId : 0,
        VideoCategory : `beginner`,
        YoutubeName : `임피티IMPT`,
        UserGrade : `/img/beginner.png`,
        YoutubeTitle : `칼소폭 끝장 뱃살! 체지방 태우는10분 모닝 홈트 땀범벅 걷기홈트!`,
        iframeSrc : `https://www.youtube.com/embed/qNesRFa1VmM`,
        Thumbnail : `/img/videoID_00.png`


    },{
        VideoId : 1,
        VideoCategory : `beginner`,
        YoutubeName : `흥둥이`,
        UserGrade : `/img/beginner.png`,
        YoutubeTitle : `요즘 너무 핫한 445만 유튜버와 신나는 10분 타바타 달려요🔥`,
        iframeSrc : `https://www.youtube.com/embed/XtAh_7AlsB8`,
        Thumbnail : `/img/videoID_01.png`
    },{
        VideoId : 2,
        VideoCategory : `beginner`,
        YoutubeName : `GILHWAN 길환TV`,
        UserGrade : `/img/beginner.png`,
        YoutubeTitle : `[전신 운동] 근육은 늘리고 살은 빼는 홈트 (초급자 추천)`,
        iframeSrc : `https://www.youtube.com/embed/nz5qsvRgK24`,
        Thumbnail : `/img/videoID_02.png`
    },{
        VideoId : 3,
        VideoCategory : `beginner`,
        YoutubeName : `권혁TV`,
        UserGrade : `/img/beginner.png`,
        YoutubeTitle : `Lv.1 운동초보 분들은 이 영상을 무조건 따라 하세요! (떠먹는홈트)`,
        iframeSrc : `https://www.youtube.com/embed/W4SpM2gxGdE`,
        Thumbnail : `/img/videoID_03.png`
    },{
        VideoId : 4,
        VideoCategory : `beginner`,
        YoutebeName : ``,
        UserGrade : `/img/beginner.png`,
        YoutubeTitle : `왕초보 탈출 - 전신운동 초보 홈트 여자`,
        iframeSrc : `https://www.youtube.com/embed/Oz5ts01rzEo`,
        Thumbnail : `/img/videoID_04.png`
    },{
        VideoId : 5,
        VideoCategory : `beginner`,
        YoutubeName : `빵느`,
        UserGrade : `/img/beginner.png`,
        YoutubeTitle : `(스쿼트, 런지 없는) 초급 하체 운동 10분 루틴 - 힘들진 않은데 자극이 너무 좋아요!!`,
        iframeSrc : `https://www.youtube.com/embed/orEGOGBRldQ`,
        Thumbnail : `/img/videoID_05.png`
    },{
        VideoId: 6,
        VideoCategory : `Noiselessness`,
        YoutubeName : `빵느`,
        UserGrade : `/img/beginner.png`,
        YoutubeTitle : `※30분 걷기운동※ 집에서 3km 걸으면서 전신칼로리 불태우기!!`,
        iframeSrc: `https://www.youtube.com/embed/aGOvDH3UY2A`,
        Thumbnail : `/img/videoID_06.png`
    },{
        VideoId: 7,
        VideoCategory : `Noiselessness`,
        YoutubeName : `권혁TV`,
        UserGrade : `/img/advanced.png`,
        YoutubeTitle : `층간소음없이 딱! 15분 체지방 100% 녹여버리는 루틴`,
        iframeSrc: `https://www.youtube.com/embed/CYcLODSeC-c`,
        Thumbnail : `/img/videoID_07.png`
    },{
        VideoId: 8,
        VideoCategory : `Noiselessness`,
        YoutubeName : `빅씨스 Bigsis`,
        UserGrade : `/img/middleClass.png`,
        YoutubeTitle : `서서하는 초보 홈트 - 손목 무릎 부담없는 운동 - 유산소운동 홈트`,
        iframeSrc: `https://www.youtube.com/embed/IXhppj6pwu4`,
        Thumbnail : `/img/videoID_08.png`
    },{
        VideoId: 9,
        VideoCategory : `Noiselessness`,
        YoutubeName : `DeSLun데스런`,
        UserGrade : `/img/advanced.png`,
        YoutubeTitle : `집에서 하기 딱 좋은 무소음 유산소 운동!`,
        iframeSrc: `https://www.youtube.com/embed/aUXg1ftiyx8`,
        Thumbnail : `/img/videoID_09.png`
    },{
        VideoId: 10,
        VideoCategory : `Noiselessness`,
        YoutubeName : `빵느`,
        UserGrade : `/img/beginner.png`,
        YoutubeTitle : `30분 걷기운동 - 집에서 걸으면서 칼로리 소모 폭탄 + 육수 샤워`,
        iframeSrc: `https://www.youtube.com/embed/OF3wpPZs2aI`,
        Thumbnail : `/img/videoID_10.png`
    },{
        VideoId: 11,
        VideoCategory : `Noiselessness`,
        YoutubeName : `여리나핏`,
        UserGrade : `/img/beginner.png`,
        YoutubeTitle : `층간 소음 걱정 없이 체중 감량 보장! 딱 5분 운동!`,
        iframeSrc: `https://www.youtube.com/embed/cl5cc1_5zZc`,
        Thumbnail : `/img/videoID_11.png`
    },{
        VideoId : 12,
        VideoCategory : `OverWeight`,
        YoutubeName : `랭콩`,
        UserGrade : `/img/beginner.png`,
        YoutubeTitle : `고도비만운동 확실히 무리하지 않게!`,
        iframeSrc : `https://www.youtube.com/embed/_ffhxHV630A`,
        Thumbnail : `/img/videoID_12.png`
    },{
        VideoId : 13,
        VideoCategory : `OverWeight`,
        YoutubeName : `FoxgymTV`,
        UserGrade : `/img/middleClass.png`,
        YoutubeTitle : `고도비만을 위한 타바타! 관절 무리 없는 누구나 쉽게 따라할 수 있는 10분 타바타`,
        iframeSrc : `https://www.youtube.com/embed/mr6huOD8B4c`,
        Thumbnail : `/img/videoID_13.png`
    },{
        VideoId : 14,
        VideoCategory : `OverWeight`,
        YoutubeName : `모멘트핏 록코치`,
        UserGrade : `/img/beginner.png`,
        YoutubeTitle : `한달에 15kg 빼는 운동이 있다! 왕초보도 집에서 쉽게 할 수 있는 방법 (초보O 고도비만O 손목부담X)`,
        iframeSrc : `https://www.youtube.com/embed/raMno_7W7xM`,
        Thumbnail : `/img/videoID_14.png`
    },{
        VideoId : 15,
        VideoCategory : `OverWeight`,
        YoutubeName : `Thankyou BUBU`,
        UserGrade : `/img/middleClass.png`,
        YoutubeTitle : `집에서 칼로리 불태우는 걷기 유산소운동 [칼소폭 순한맛]`,
        iframeSrc : `https://www.youtube.com/embed/t70t-sklypk`,
        Thumbnail : `/img/videoID_15.png`
    },        {
        VideoId : 16,
        VideoCategory : `Partial`,
        YoutubeName : `힙으뜸`,
        UserGrade : `/img/middleClass.png`,
        YoutubeTitle : ` 하루 10분!!!! 지옥에서 돌아온 🔥복근 2주 챌린지🔥`,
        iframeSrc : `https://www.youtube.com/embed/u69sq7iWm1A`,
        Thumbnail : `/img/videoID_16.png`
    },{
        VideoId : 17,
        VideoCategory : `Partial`,
        YoutubeName : `메루치양식장_체중증량TV`,
        UserGrade : `/img/beginner.png`,
        YoutubeTitle : `내 몸에 날개를 달아줘!ㅣ이소룡 '광배근' 만들기`,
        iframeSrc : `https://www.youtube.com/embed/kTrgOD3j9nE`,
        Thumbnail : `/img/videoID_17.png`
    },{
        VideoId : 18,
        VideoCategory : `Partial`,
        YoutubeName : `제이제이살롱드핏`,
        UserGrade : `/img/beginner.png`,
        YoutubeTitle : `승모근 안쓰는 💪직각어깨 만들기 10분 따라하기`,
        iframeSrc : `https://www.youtube.com/embed/dpFqSZ52jGk`,
        Thumbnail : `/img/videoID_18.png`
    },{
        VideoId : 19,
        VideoCategory : `Partial`,
        YoutubeName : `권혁TV`,
        UserGrade : `/img/advanced.png`,
        YoutubeTitle : `Lv.3.5 장비없이 등과 이두를 동시에 조져 버리는 루틴! (떠먹는 홈트)`,
        iframeSrc : `https://www.youtube.com/embed/SyiMVdWBP7Y`,
        Thumbnail : `/img/videoID_19.png`
    },{
        VideoId : 20,
        VideoCategory : `Partial`,
        YoutubeName : `힙으뜸`,
        UserGrade : `/img/beginner.png`,
        YoutubeTitle : `[ENG] (층간소음X, 설명O) 복근운동과 유산소를 한번에❗️ 서서하는 복근운동 1탄🔥`,
        iframeSrc : `https://www.youtube.com/embed/kETh8T3it4k`,
        Thumbnail : `/img/videoID_20.png`
    },{
        VideoId : 21,
        VideoCategory : `Partial`,
        YoutubeName : `이지은 다이어트 Jiny diet`,
        UserGrade : `/img/middleClass.png`,
        YoutubeTitle : `앞벅지 볼록, 뒷벅지 셀룰라이트, 허벅지 안쪽살 모조리 불태우고🔥 [여리탄탄 일자 허벅지] 되는 7일 루틴`,
        iframeSrc : `https://www.youtube.com/embed/dpBYYEhdofI`,
        Thumbnail : `/img/videoID_21.png`
    },{
        VideoId : 22,
        VideoCategory : `Stretch`,
        YoutubeName : `자세요정 JSYJ`,
        UserGrade : `/img/beginner.png`,
        YoutubeTitle : `딱 10분! 거북목, 버섯증후군이 있다면 이 운동 제발 하셔야 합니다! 일자목, 거북목 스트레칭, 버섯증후군 교정운동`,
        iframeSrc : `https://www.youtube.com/embed/kgCj8UUEWjU`,
        Thumbnail : `/img/videoID_22.png`
    },{
        VideoId : 23,
        VideoCategory : `Stretch`,
        YoutubeName : `물리치료사.PT재석`,
        UserGrade : `/img/beginner.png`,
        YoutubeTitle : `고관절 스트레칭, 물리치료사 추천!`,
        iframeSrc : `https://www.youtube.com/embed/0GEx801-mD4`,
        Thumbnail : `/img/videoID_23.png`
    },{
        VideoId : 24,
        VideoCategory : `Stretch`,
        YoutubeName : `에일린 mind yoga`,
        UserGrade : `/img/beginner.png`,
        YoutubeTitle : `어깨통증의 원인 '라운드숄더' 교정하는 요가 | 어깨 스트레칭, 굽은어깨 교정운동`,
        iframeSrc : `https://www.youtube.com/embed/SZpAdC0_6-g`,
        Thumbnail : `/img/videoID_24.png`
    },{
        VideoId : 25,
        VideoCategory : `Stretch`,
        YoutubeName : `피지컬갤러리`,
        UserGrade : `/img/beginner.png`,
        YoutubeTitle : `자기전, 아침에 눈뜨자마자 따라하는 스트레칭`,
        iframeSrc : `https://www.youtube.com/embed/aTcbqto_Tg0`,
        Thumbnail : `/img/videoID_25.png`
    },{
        VideoId : 26,
        VideoCategory : `Stretch`,
        YoutubeName : `힙으뜸`,
        UserGrade : `/img/beginner.png`,
        YoutubeTitle : `심으뜸 매일 아침 10분 스트레칭ㅣ2023 리뉴얼`,
        iframeSrc : `https://www.youtube.com/embed/50WCSpZtdmA`,
        Thumbnail : `/img/videoID_26.png`
    },{
        VideoId : 27,
        VideoCategory : `Stretch`,
        YoutubeName : `운동하는데이브`,
        UserGrade : `/img/beginner.png`,
        YoutubeTitle : `퇴근후 온몸을 녹여버리는 20분 체형교정 전신스트레칭 [주4일 루틴] 개정판`,
        iframeSrc : `https://www.youtube.com/embed/OxJc9klgcvs`,
        Thumbnail : `/img/videoID_27.png`
    },{
        VideoId : 28,
        VideoCategory : `UnderWeight`,
        YoutubeName : `메루치양식장_체중증량TV`,
        UserGrade : `/img/advanced.png`,
        YoutubeTitle : `마른여자 3kg 볼륨업! 홈트 프로그램 (30min)`,
        iframeSrc : `https://www.youtube.com/embed/7NssBJnEBDc`,
        Thumbnail : `/img/videoID_28.png`
    },{
        VideoId : 29,
        VideoCategory : `UnderWeight`,
        YoutubeName : `라미하우스Ramyhaus`,
        UserGrade : `/img/beginner.png`,
        YoutubeTitle : `7분의 기적 멸치탈출 홈트레이닝! 마른여자의 반란이 시작된다!`,
        iframeSrc : `https://www.youtube.com/embed/Or4VSZDYgJw`,
        Thumbnail : `/img/videoID_29.png`
    },{
        VideoId : 30,
        VideoCategory : `UnderWeight`,
        YoutubeName : `메루치양식장_체중증량TV`,
        UserGrade : `/img/beginner.png`,
        YoutubeTitle : `마른사람을 위한 홈트레이닝 7가지`,
        iframeSrc : `https://www.youtube.com/embed/w3gWihhhVcc`,
        Thumbnail : `/img/videoID_30.png`
    },{
        VideoId : 31,
        VideoCategory : `UnderWeight`,
        YoutubeName : `짐콕 [GYMKOK]`,
        UserGrade : `/img/middleClass.png`,
        YoutubeTitle : `[홈트레이닝] 마른사람 추천 운동 - 하체, 어깨 | 마른몸이 고민인 너, 굴곡지고 볼륨있는 몸을 원해? 그렇다면 근력 운동이 답이지!`,
        iframeSrc : `https://www.youtube.com/embed/SuamCX9tMOc`,
        Thumbnail : `/img/videoID_31.png`
    },{
        VideoId : 32,
        VideoCategory : `UnderWeight`,
        YoutubeName : `권혁TV`,
        UserGrade : `/img/middleClass.png`,
        YoutubeTitle : `Lv.2 꽉! 차는 머슬핏 만드는 팔 루틴 (이두,삼두) 덤벨필요`,
        iframeSrc : `https://www.youtube.com/embed/qkQdIMW1xlw`,
        Thumbnail : `/img/videoID_32.png`
    }
]

const dummyList = [
    {
        id : 0,
        subject : '걷기',
        fsubject : '고구마',
        Km : '3.85',
        count: null,
        set: null,
        fkcal : '96',
        ekcal : '76',
        Video : '븨디오링크',
        vkcal : '136',
        date : new Date('2024-01-01').getTime(),
        walkcount : '5600',
        settingwalk :'7500',
        g : null,
        fmount : 2,
        savevideo : '저장븨디오'
    },
    {
        id : 1,
        subject : '달리기',
        fsubject : '닭가슴살 샐러드',
        Km : '7',
        count: null,
        set: null,
        fkcal : '320',
        ekcal : '166',
        Video : '븨디오링크2',
        vkcal : '186',
        date : new Date('2024-01-06').getTime(),
        walkcount : '2310',
        settingwalk :'8000',
        g : '332',
        fmount : null,
        savevideo : '저장븨디오2'
    },
    {
        id : 2,
        subject : '푸시업',
        fsubject : '단호박',
        Km : null,
        count : '248',
        set : '652',
        fkcal : '156',
        ekcal : '235',
        Video : '븨디오링크3',
        vkcal : '1812',
        date : new Date('2024-01-10').getTime(),
        walkcount : '251',
        settingwalk :'12430',
        g : '150',
        fmount : null,
        savevideo : '저장븨디오3'
    },
    ]
 
let newState = dummyList;

const reducer = (state, action) =>{
    switch(action.type){
        case 'CREATE' : {
            const newItem = {
                ...action.data
            }
            newState = [newItem, ...newState];
            break;
        }
        case 'EDIT' : {
            newState = state.map((item) => item.id === action.data.id ? {...action.data} : item) ;
            break; 
        }
        case 'DATEREMOVE' : {
            newState = state.filter((item)=> moment(item.date).format('YYYY-MM-DD') !== moment(action.targetDate).format('YYYY-MM-DD'));
            break;
        }
        default : return state;
    }
    return newState;
};

  const initialState = [];

const foodReducer = (state, action) => {
    switch (action.type) {
      case 'CREATE_FOOD':
        return [...state, action.data];
      default:
        return state;
    }
  };

  const videoreducer = (state, action) => {
    let newState = [];
    switch(action.type){
        case 'VIDEO_INTI' : {
            return action.video;
        }
        case 'VIDEO_CREATE' : {
            const MyVideo = {
                ...action.video
            }
            newState = [MyVideo, ...newState];
            break;
        }
        case 'VIDEO_REMOVE' : {
            newState = state.filter((item => item.id !== action.targetID));
            break;
        }
        default :
            return state;
    }
    return newState;
};

const Layout = ({content}) => {
    return(
            <Wrapper>
                <Header />
                {content}
                <Gnb />
            </Wrapper>
    );
}


function App() {

    const [data, dispatch] = useReducer(reducer, []);
    const dateId = useRef(3);
    const [dumm, setDumm] = useState(dummyList);

    const [videoData, setVideoData] = useState(dummyList);
    const [foodState, dispatchFood] = useReducer(foodReducer, initialState);
    const [video, videoDispatch] = useReducer(videoreducer, VideoDummy);

    const onCreate = (id, subject, fsubject, Km, count, set, fkcal, ekcal, vkcal ,Video, date, walkcount, settingwalk, g, fmount, savevideo,) => {
        dispatch({
          type : 'CREATE',
          data : {
            id: dateId.current,
            subject,
            fsubject,
            Km ,
            count ,
            set,
            fkcal,
            ekcal,
            Video,
            vkcal,
            date : moment(new Date).format('YYYY-MM-DD'),
            walkcount,
            settingwalk,
            g,
            fmount,
            savevideo,
          }
        })
        dateId.current +=1;
      };

    const dateRemove = (targetDate) => {
        dispatch({
            type : 'DATEREMOVE',
            targetDate
        });
    }


    useEffect(()=>{
        dateRemove();
    },[]);

    const CreateMyVideo = (VideoCategory, YoutubeName, UserGrade, YoutubeTitle, iframeSrc, Thumbnail) => {
        videoDispatch({
            type : 'VIDEO_CREATE',
            video : {
                VideoId : video.current,
                VideoCategory,
                YoutubeName,
                UserGrade,
                YoutubeTitle,
                iframeSrc,
                Thumbnail
            }
        });
    };
    
    const RemoveMyVideo = (targetID) => {
        videoDispatch({
            type : 'VIDEO_REMOVE',
            targetID
        });
    }

    // 모달창 on,off 함수 
    const [remoteModal, setRemoteModal] = useState(false); 
    const [first, setFirst] = useState(false);
    // 마이페이지 유저데이터 전역변수 선언
    const [userAge, setUserAge] = useState();
    const [userGender, setUserGender] = useState();
    const [userWeight, setUserWeight] = useState();
    const [userHeight, setUserHeight] = useState(); 
    const [userGrade, setUserGrade] = useState();
    // 마이페이지 유저데이터 변화 함수 선언
    const userData = (age, gender, weight, height, grade) => {
        setUserAge(age);
        setUserGender(gender);
        setUserWeight(weight);
        setUserHeight(height);
        setUserGrade(grade);
    }
    // 마이페이지 유저데이터 보관
    const userSettingdata = [{
        userAge : userAge,
        userGender :userGender,
        userWeight :userWeight,
        userHeight:userHeight,
        userGrade:userGrade
    }];
    
  return (
    <CalendarList.Provider value={data}>
        <MyVideoStateContext.Provider value={video}>
            <MyVideoDispatchContxet.Provider value={{CreateMyVideo, RemoveMyVideo}}>
                <ExerstateDispatch.Provider value={{onCreate, dateRemove, userData}}>
                    <SettingUserDate.Provider value={userSettingdata}>
                        <FoodContext.Provider value={{ foodState, dispatchFood }}>
                            <BrowserRouter>
                                <div className='App'>
                                    <Routes path="/" element={<Layout/>}>
                                        <Route path='/open' element={<Home />} />
                                        <Route path='/Exercise' element={<Exercise />}/>
                                        <Route path='/dietinfo' element={<DietInfo />}/>
                                        <Route path='/search' element={<Search />}/>
                                        <Route path='/My' element={<Mypagemain remoteModal={remoteModal} setRemoteModal={setRemoteModal} first={first} setFirst={setFirst}/>} />
                                        <Route path='/record' element={<RecordPage dumm={dumm} />}/>
                                        <Route path='/frecord' element={<FoodRecordPage/>}/>
                                        <Route path='/statistic' element={<Statistic/>}/>
                                        <Route path='/challenge' element={<Challenge/>}/>
                                        <Route path='/freefeed' element={<Freefeed/>}/>
                                        <Route path='/challengemore' element={<Challengemore remoteModal={remoteModal} setRemoteModal={setRemoteModal} first={first} setFirst={setFirst}/>} />
                                        <Route path='/mypageEdit' element={<MypageEdit/>} />
                                        <Route path='/feed' element={<DietFood/>} />
                                        <Route path='/VideoDetail' element={<VideoDetail/>} />
                                        <Route path='/MyVideoList' element={<MyVideoList/>} />
                                        <Route path='/challpost' element={<ChallPost/>} />
                                        <Route path='/challenge/:id' element={<ChallengeDetail />}/>
                                        <Route path='/diet/:id' element={<DietFoodDetail />}/>
                                    </Routes>
                                </div>
                            </BrowserRouter>
                        </FoodContext.Provider>
                    </SettingUserDate.Provider>
                </ExerstateDispatch.Provider>
            </MyVideoDispatchContxet.Provider>
        </MyVideoStateContext.Provider>
    </CalendarList.Provider>
  );
}

export default App;

const Wrapper = styled.div`
    width: 100%;
`;
