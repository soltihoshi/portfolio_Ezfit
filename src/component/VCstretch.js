import Slider from "react-slick";
import React, { useContext } from 'react';
import { MyVideoStateContext } from '../App';
import "./Slider.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const VCstretch = () => {
    const videoDummy = useContext(MyVideoStateContext);
    const navigate = useNavigate('/');

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
    };

    const moveToDetail = (video) => {
        navigate('/VideoDetail', { state: { video } });
    }

    const thumbnails = videoDummy.slice(22, 27).map((video, index) => (
        <div key={index}>
            <div className="thumbnailImg"  >
            <img 
                src={video.Thumbnail} alt={`Thumbnail ${index}`} 
            />
            </div>
            <DetailBg>
                <DetailBtn onClick={() => moveToDetail(video)}>
                    상세보기
                </DetailBtn>
            </DetailBg>
        </div>          
    ));
    
    return (
        <div className="wrap">
            <Slider {...settings} className="Slider">
                {thumbnails}
            </Slider>
        </div>
    );
}

export default VCstretch;

const DetailBg = styled.div`
    width : 95%;
    padding-top : 200px;
    z-index : 100;
`
const DetailBtn = styled.button`
    width : 100%;
    background-color : #93ACFF;
    font-size : 0.9em;
    font-weight : 500;
    color : white;
    border : 1px solid #8993ff;
    padding: 4px 0;
    border-radius : 5px;
    margin-top : 10px;
`
