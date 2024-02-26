import Slider from "react-slick";
import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./VideoDetail.css";
import "./Slider.css";

const VideoDetail = () => {
    const [selectedEmoji1, setSelectedEmoji1] = useState(true);
    const [selectedEmoji2, setSelectedEmoji2] = useState(true);
    const [selectedEmoji3, setSelectedEmoji3] = useState(true);
    const [selectedEmoji4, setSelectedEmoji4] = useState(true);
    const [selectedEmoji5, setSelectedEmoji5] = useState(true);
    const advise1 = useRef();
    const advise2 = useRef();
    const advise3 = useRef();
    const advise4 = useRef();
    const advise5 = useRef();
    const location = useLocation();
    const video = location.state.video;
    const Navigate = useNavigate();

    const handleGoBack = () => {
        Navigate(-1);
    };
    const addVideoList = (videoInfo) => {
        Navigate('/MyVideoList', { state: { video: videoInfo }});
    }
    

    const clickEmoji1 = () => {
        setSelectedEmoji1(true);
        setSelectedEmoji2(false);
        setSelectedEmoji3(false);
        setSelectedEmoji4(false);
        setSelectedEmoji5(false);
        advise1.current.style.display = 'block';
        advise2.current.style.display = 'none';
        advise3.current.style.display = 'none';
        advise4.current.style.display = 'none';
        advise5.current.style.display = 'none';
    }
    const clickEmoji2 = () => {
        setSelectedEmoji1(false);
        setSelectedEmoji2(true);
        setSelectedEmoji3(false);
        setSelectedEmoji4(false);
        setSelectedEmoji5(false);
        advise2.current.style.display = 'block';
        advise1.current.style.display = 'none';
        advise3.current.style.display = 'none';
        advise4.current.style.display = 'none';
        advise5.current.style.display = 'none';
    }

    const clickEmoji3 = () => {
        setSelectedEmoji1(false);
        setSelectedEmoji2(false);
        setSelectedEmoji3(true);
        setSelectedEmoji4(false);
        setSelectedEmoji5(false);
        advise3.current.style.display = 'block';
        advise2.current.style.display = 'none';
        advise1.current.style.display = 'none';
        advise4.current.style.display = 'none';
        advise5.current.style.display = 'none';
    }

    const clickEmoji4 = () => {
        setSelectedEmoji1(false);
        setSelectedEmoji2(false);
        setSelectedEmoji3(false);
        setSelectedEmoji4(true);
        setSelectedEmoji5(false);
        advise4.current.style.display = 'block';
        advise2.current.style.display = 'none';
        advise3.current.style.display = 'none';
        advise1.current.style.display = 'none';
        advise5.current.style.display = 'none';
    }

    const clickEmoji5 = () => {
        setSelectedEmoji1(false);
        setSelectedEmoji2(false);
        setSelectedEmoji3(false);
        setSelectedEmoji4(false);
        setSelectedEmoji5(true);
        advise5.current.style.display = 'block';
        advise2.current.style.display = 'none';
        advise3.current.style.display = 'none';
        advise4.current.style.display = 'none';
        advise1.current.style.display = 'none';
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: false
    };

    return (
        <div className="VideoDetail">
            <div className='DetailHead'>
                <img src="/img/backarrow.svg" onClick={handleGoBack}/>
                <p>{video.YoutubeTitle}</p>
            </div>
            <div style={{ height: '54.11111vw' }} className="DetailVideo">
                <iframe src={video.iframeSrc} frameborder="0" style={{ width: '100%', height: '100%' }} title="Video"></iframe>
            </div>
            <div className="Intensity">
                <div className='UserGrade'>
                    <p>추천 등급</p>
                    <img src={video.UserGrade} />
                </div>
                <p>선택하신 영상의 운동 강도는 괜찮으세요?</p>
                <div className='EmojiFrame'>
                    <div className="colorEmoji">
                        <img
                            src="/img/emogi01.svg"
                            onClick={clickEmoji1}
                            className={`C_Emoji ${selectedEmoji1 ? 'on' : 'off'}`}
                            alt="Emoji 1"
                        />
                        <img
                            src="/img/emogi02.svg"
                            onClick={clickEmoji2}
                            className={`C_Emoji ${selectedEmoji2 ? 'on' : 'off'}`}
                            alt="Emoji 2"
                        />
                        <img
                            src="/img/emogi03.svg"
                            onClick={clickEmoji3}
                            className={`C_Emoji ${selectedEmoji3 ? 'on' : 'off'}`}
                            alt="Emoji 3"
                        />
                        <img
                            src="/img/emogi04.svg"
                            onClick={clickEmoji4}
                            className={`C_Emoji ${selectedEmoji4 ? 'on' : 'off'}`}
                            alt="Emoji 4"
                        />
                        <img
                            src="/img/emogi05.svg"
                            onClick={clickEmoji5}
                            className={`C_Emoji ${selectedEmoji5 ? 'on' : 'off'}`}
                            alt="Emoji 5"
                        />
                        <div className="greyEmoji">
                            <img src="/img/emogi01_g.svg" />
                            <img src="/img/emogi02_g.svg" />
                            <img src="/img/emogi03_g.svg" />
                            <img src="/img/emogi04_g.svg" />
                            <img src="/img/emogi05_g.svg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="chooseEmoji">
                <p ref={advise1}>
                    User님께는 식은 죽 먹기였군요!<br/>
                    조금 더 높은 단계의 운동영상에 도전해보세요.<br/> 
                </p>
                <p ref={advise2}>
                    User님께는 해 볼만한 운동이셨군요!<br/>
                    저강도 반복운동도 충분히 운동효과를 얻으실 수 있어요. <br/> 지루하지 않게 비슷한 운동수준의 영상에 도전해보세요.
                </p>
                <p ref={advise3}>
                    User님께 알맞은 수준의 운동이였나봐요! <br/>
                    무리하지 않는게 좋으니 같은 영상을 한 세트 반복해보시는게 어떠세요?
                </p>
                <p ref={advise4}>
                    User님께는 적합하지 않은 운동이였군요.<br/>
                    조금 더 쉬운 운동 영상 시청!
                </p>
                <p ref={advise5}>
                    User님, 힘들지만 잘해내셨군요! <br/>
                    무리하신다면 내일 운동이 더 힘들어질꺼예요 <br/>
                    오늘은 충분한 휴식을 취하세요. <br/>
                    내일 한 걸음 더 성장한 User님을 만나시게 될꺼예요.
                </p>
            </div>
            <div className='slick'>
                <p>추천 동영상</p>
                <Slider {...settings} className="DetailSlider">  
                    <div><img src="/img/videoID_02.png"/></div>
                    <div><img src="/img/videoID_06.png"/></div>
                    <div><img src="/img/videoID_11.png"/></div>
                    <div><img src="/img/videoID_08.png"/></div>
                    <div><img src="/img/videoID_21.png"/></div>
                    <div><img src="/img/videoID_30.png"/></div>
                    <div><img src="/img/videoID_18.png"/></div>
                    <div><img src="/img/videoID_07.png"/></div>
                    <div><img src="/img/videoID_15.png"/></div>
                    <div><img src="/img/videoID_17.png"/></div>
                    <div><img src="/img/videoID_14.png"/></div>
                    <div><img src="/img/videoID_26.png"/></div>
                    <div><img src="/img/videoID_31.png"/></div>
                    <div><img src="/img/videoID_03.png"/></div>
                </Slider>
            </div>
            <div className="addVideoList">
                <p>열심히 불태우셨나요?🔥</p>
                <p>동영상이 마음에 드셨다면 나의 운동 리스트에 추가해보세요!</p>
                <button onClick={() => addVideoList(video)}>운동 리스트에 추가하기</button>
            </div>
        </div>
    );
}

export default VideoDetail;