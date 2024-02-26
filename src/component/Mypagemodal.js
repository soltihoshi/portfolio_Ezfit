import { useContext, useEffect, useState } from "react";
import {ExerstateDispatch} from "../App"
import './Mypagemodalcss.css';

const Mypagemodal = ({closeBodyModal}) => {

    const {userData} = useContext(ExerstateDispatch);

    const [userAge, setUserAge] = useState();
    const [userGender, setUserGender] = useState();
    const [userWeight, setUserWeight] = useState();
    const [userHeight, setUserHeight] = useState(); 
    const [userGrade, setUserGrade] = useState();

    const [beClick, setBeClick] = useState(true);
    const [miClick, setMiClick] = useState(false);
    const [adClick, setADClick] = useState(false);

    const handleCloseModal = () =>{
        closeBodyModal(false);
    }

    const clickBe = () =>{
        setBeClick(true);
        setMiClick(false);
        setADClick(false)
    }
    const clickMi = () =>{
        setBeClick(false);
        setMiClick(true);
        setADClick(false)
    }
    const clickAd = () =>{
        setBeClick(false);
        setMiClick(false);
        setADClick(true)
    }

    useEffect(()=>{
    },[])
    
    
    const handleage = (e) => {
        setUserAge(e.target.value);
    };
    const handlegender = (gender) => {
       setUserGender(gender);
    };
    const handleweight = (e) => {
        setUserWeight(e.target.value);
    };
    const handleheight = (e) => {
        setUserHeight(e.target.value);
    };

    const bodydataSave = (age, gender, weight, height, grade) => {
        userData(age, gender, weight, height, grade);
        closeBodyModal(false);
    }
    
    return(
        <div className="Mypagemodal">
            <div className="mymodalIn">
                <div className="bodyTitle">BMI 신체기록</div>
                <div className="userGender">
                    <p className="bodytext">성별</p>
                    <div className="genderFlex">
                        <div className="flexIn">
                            <label>
                                <input
                                type="radio"
                                value="male"
                                checked={userGender === 'male'}
                                onChange={() => handlegender('male')}
                            />
                            </label>
                            <div>남자</div>
                        </div>
                        <div className="flexIn">
                            <label>
                                <input
                                type="radio"
                                value="female"
                                checked={userGender === 'female'}
                                onChange={() => handlegender('female')}
                            />
                            </label>
                            <div>여자</div>
                        </div>
                    </div>
                </div>
                <div className="userAge">
                    <p className="bodytext">나이</p>
                    <input 
                        type="text"
                        placeholder="나이를 입력해주세요"
                        value={userAge}
                        onChange={handleage}
                    />
                </div>
                <div className="userHeight">
                    <p className="bodytext">키</p>
                    <input 
                        type="text"
                        placeholder="키를 입력해주세요"
                        value={userHeight}
                        onChange={handleheight}
                    />
                </div>
                <div className="userWeight">
                    <p className="bodytext">몸무게</p>
                    <input 
                        type="text"
                        placeholder="몸무게를 입력해주세요"
                        value={userWeight}
                        onChange={handleweight}
                    />
                </div>
                <div className="bmiInfo">
                    성별, 키, 체중 정보는 적정 칼로리와 칼로리 소모량, 
                    운동 중 심박수 범위와 같은 값을 계산하는데 사용됩니다.
                    정보를 반드시 입력할 필요는 없지만, 입력하면 건강과 
                    관련된 더 정확한 정보를 받아볼 수 있습니다.
                </div>
                <div className="exerGrade">
                    <p className="bodytext">운동 수행능력</p>
                    <div className="gradeWrap">
                    <div className="beginnerGrade">
                            <label>
                                <img className="gradeimg" src={beClick ? 'img/beginner.png' : 'img/beginnerGrey.png'} alt="하" onClick={clickBe}/>
                                <input
                                type="radio"
                                value="beginner"
                                checked={userGrade === 'beginner'}
                                onChange={() => setUserGrade('beginner')}
                                />
                            </label>
                        </div>
                        <div className="middleClassGrade">
                            <label>
                                <img className="gradeimg" src={miClick ? 'img/middleClass.png' : 'img/middleClassGrey.png'} alt="중" onClick={clickMi} />
                                <input
                                type="radio"
                                value="middleClass"
                                checked={userGrade === 'middleClass'}
                                onChange={() => setUserGrade('middleClass')}
                                />
                            </label>
                        </div>
                        <div className="advancedGrade">
                            <label>
                                <img className="gradeimg" src={adClick ? 'img/advanced.png' : 'img/advancedGrey.png'} alt="상" onClick={clickAd}/>
                                <input
                                type="radio"
                                value="advanced"
                                checked={userGrade === 'advanced'}
                                onChange={() => setUserGrade('advanced')}
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <p onClick={handleCloseModal}>취소</p>
                    <p onClick={()=>{bodydataSave(userAge,userGender,userWeight,userHeight,userGrade)}}>저장</p>
                </div>
            </div>
        </div>
    );
}

export default Mypagemodal;