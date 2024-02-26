import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const MypageEdit = ({closeModal, changeFat, changeMuscle, changeWeight}) => {

   
    const handleModal = () =>{
        closeModal()
    }

    const [Weight, setWeight] = useState('');
    const [Muscle, setMuscle] = useState('');
    const [Fat, setFat] = useState('');

    const handleWeight = (e) => {
        setWeight(e.target.value);
    }
    const handleMuscle = (e) => {
        setMuscle(e.target.value);
    }
    const handleFat = (e) => {
        setFat(e.target.value);
    }

    const resetValue = () => {
        setWeight('');
        setMuscle('');
        setFat('');
    }

    const changeData = (Weight, Muscle, Fat) => {
        changeWeight(Weight);
        changeMuscle(Muscle);
        changeFat(Fat);
        closeModal();
        resetValue();
    }


    const textref = useRef();
    return(
        <Wrap>
            <WrapIn>
                <Title>신체정보 편집</Title>
                <Closebutton onClick={handleModal}>닫기</Closebutton>
                <Flex>
                    <Text>체중</Text>
                    <input placeholder="현재 체중을 입력해주세요" value={Weight || ''} onChange={handleWeight}/>
                </Flex>
                <Flex>
                    <Text>근육</Text>
                    <input placeholder="현재 근량을 입력해주세요" value={Muscle || ''} onChange={handleMuscle}/>
                </Flex>
                <Flex>
                    <Text>지방</Text>
                    <input placeholder="현재 지방량을 입력해주세요" value={Fat || ''} onChange={handleFat}/>
                </Flex>
                    <p>초기화는 빈칸으로 두신 채 확인을 눌러주세요</p>
                <Flex>
                    <Inbody className="watch" onClick={()=>{changeData(Weight, Muscle, Fat)}}> 확인</Inbody>
                </Flex>
            </WrapIn>
        </Wrap>    
    );
}
export default MypageEdit;

const Wrap = styled.div`
    position: relative;
`
const WrapIn = styled.div`
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translate(-50%, 0);
    width : 70%;
    text-align : center;
    border-radius : 30px;
    padding : 20px 0;
    background-color:#fff;
    border : 2px solid #93ACFF;
`
const Closebutton = styled.div`
    position: absolute;
    top : 18px;
    right : 40px;
    width : 20px;
    height : 20px;
    background-image: url(./img/close.svg);
    background-repeat : no-repeat;
    text-indent : -99999px;
`
const Title = styled.div`
    font-size : 18px;
    margin-bottom : 30px;
`
const Text = styled.div`
    margin-right : 10px;
`
const Flex = styled.div`
    display : flex;
    justify-content : center;
    margin-bottom : 15px;
    font-size : 15px;
    font-weight : 500
`
const Inbody = styled.div`
    display : inline-block;
    width : 100px;
    height : 35px;
    background-color: #93ACFF;
    border-radius : 5px;
    color: #fff;
    font-weight : 600;
    margin-top : 20px;
    line-height : 2.2em;
`
const TextRed = styled.div`
    display : none;
    color : crimson;
    font-size : 15px;
    font-weight : 600;
`