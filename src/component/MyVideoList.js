import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const MyVideoList = () => {
    const location = useLocation();
    const videoData = location.state && location.state.video;
    const Navigate = useNavigate();
    const [video, setVideo] = useState();

    const handleGoBack = () => {
        Navigate(-1);
    };

    // useEffect(() => {
    //     const videoData = location.state && location.state.video;
    //     setVideo(videoData);
    // }, [location.state]);

    console.log(video, "넘어오고 있니?");
    // 넘어오는 videoData가 쌓이는 배열 필요함....... 

    return(
        <div className="MyVideoList">
            <div className='DetailHead'>
                <img src="/img/backarrow.svg" onClick={handleGoBack}/>
                <p>나의 운동 리스트</p>
            </div>
            <div>

            </div>
        </div>
    );
}

export default MyVideoList;
