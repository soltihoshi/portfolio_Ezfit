import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Challengemodal = ({setRemoteModal , remoteModal, setFirst, first}) => {

    const navigate = useNavigate();

    const today = new Date('2024-02-05').getDate();
    const firstDay = new Date(new Date().getFullYear(), 1, 1);
    const endDay = new Date(new Date().getFullYear(), 2, 1);

    const currentDay = firstDay;

    const fullday = [];

    while (currentDay < endDay) {   
        fullday.push(new Date(currentDay));
        currentDay.setDate(currentDay.getDate() + 1); 
    };
    

    const handleTrue = () => {
        setRemoteModal(true);
        setFirst(true);
        navigate('/My');
    };

    const handleFalse = () => {
        setRemoteModal(false);
    };

    useEffect(()=>{
        handleFalse();
    },[]);

    const remainDay = (parseInt(fullday.length) - parseInt(today));

    return(
        <Wrap>
            <Wrapin>
                <Text1>훌륭한 선택을 했어요! 30일 동안의 운동은 건강과 행복을 위한 첫 걸음입니다. 떨리는 마음을 뒤로하고, 강한 의지로 시작해보세요. </Text1>
                <Text1>오늘부터 그린아카데미 님의 도전 시작! </Text1>
                <Text2>챌린지 종료까지 {remainDay}일 남았어요</Text2>
                <Flex>
                    <Flexdiv1 onClick={handleFalse}>다음에 하기</Flexdiv1>
                    <Flexdiv2 onClick={handleTrue}>도전하기</Flexdiv2>
                </Flex>
            </Wrapin>
        </Wrap>
    );
};

export default Challengemodal;

const Wrap = styled.div`
    position: relative;
    text-align: center;
    
`
const Wrapin = styled.div`
    position: absolute;
    top: -450px;
    left : 50%;
    width : 80%;
    transform: translate(-50%,0);
    background-color : #fff;
    padding : 40px 20px 50px 20px;
    border: 2px solid #93ACFF;
    border-radius: 20px;
    box-sizing: border-box;
    overflow: hidden;
`
const Flex = styled.div`
    position: relative;
    display : flex;
    justify-content: space-between;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
`
const Flexdiv1 = styled.div`
    position: absolute; 
    width: 50%;
    left : -30px;
    bottom: -60px;
    text-align: center;
    padding : 20px 10px 30px 20px;
    background-color: #93ACFF;
`
const Flexdiv2 = styled.div`
    position: absolute; 
    width: 50%;
    right : -30px;
    bottom: -60px;
    padding : 20px 20px 30px 11px;
    text-align: center;
    background-color: #93ACFF;
`
const Text1 = styled.div`
    margin-bottom: 10px;
`
const Text2 = styled.div`
    margin-bottom: 50px;
`