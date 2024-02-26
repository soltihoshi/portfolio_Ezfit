import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const MypageCmodal = ({setNumber}) => {
    
    const pageref = useRef()
    const nonepage = () => {
        pageref.current.style.display = 'none';
    }
    const clickcheck = () => {
        setNumber(false);
        nonepage();
    }
    
    return(
        <Wrap ref={pageref}>
            <Wrapin>
                이달의 챌린지가 등록되었습니다. <br />
                멋진 선택을 응원합니다.<br />
                천천히 조금씩 도전해보세요.
                <Timer onClick={clickcheck}>확인</Timer>
            </Wrapin>
        </Wrap>
    );
}
export default MypageCmodal;

const Wrap = styled.div`
    position: relative;
`
const Wrapin = styled.div`
    position : absolute;
    top : -550px;
    left : 50%;
    transform: translate(-50%,0);
    width : 70%;
    background-color : #fff;
    border : 2px solid #8993FF;
    text-align : center;
    font-size : 16px;
    font-weight : 600;
    line-height : 2em;
    padding : 30px 20px;
    border-radius : 15px;
`
const Timer = styled.div`
    width : 30px;
    padding : 0 10px;
    margin : 10px auto 0 auto;
    font-size : 15px;
    border : 1px solid #8993FF;
    border-radius : 5px;
`
