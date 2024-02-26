import { useRef, useState } from "react";
import "./PedometerCss.css";

const Pedometer = () => {
    const showModalWalk = useRef();
    const typeWalk = useRef();
    const walkNoti = useRef();
    const maxWalkNoti = useRef();
    const [settingWalk, setSettingWalk] = useState('5000');

    const handleSetWalk = () => {
        showModalWalk.current.style.display = 'block';
        setSettingWalk('');
        typeWalk.current.focus();
    }
    const closeModalWalk = () => {
        if(settingWalk < 5000){
            showModalWalk.current.style.display = 'none';
            setSettingWalk('5000');
        } else if(settingWalk.length >= 6){
            showModalWalk.current.style.display = 'none';
            setSettingWalk('5000');
        }
        showModalWalk.current.style.display = 'none';
    }
    const handleSaveWalk = () => {
        if(settingWalk < 5000){
            typeWalk.current.focus();
            walkNoti.current.style.display = 'block';
            maxWalkNoti.current.style.display = 'none';
        } else if(settingWalk.length >= 6){
            typeWalk.current.focus();
            maxWalkNoti.current.style.display = 'block';
            walkNoti.current.style.display = 'none';
        } else {
            showModalWalk.current.style.display = 'none';
        }
    }

    return (
        <div className="Pedometer">
            <ul>
                <li className="walk_img">
                    <img src={`/img/mainWalk.svg`} />
                </li>
                <li>
                    <div>
                        <p className="walkCount">100</p>
                        <p className="setWalk">/ {settingWalk}</p>
                        <p className="walk">걸음</p>
                    </div>
                </li>
            </ul>
            <div 
                className="setting"
                onClick={handleSetWalk}
            >
                <img 
                    src={`/img/pedometer_setting.svg`}
                />
            </div>
            <div 
                className="modalWalk"
                ref={showModalWalk}
            >
                <img 
                    onClick={closeModalWalk}
                    src={`/img/close.svg`}
                />
                <div className="inputWalk">
                    <input 
                        className="inputWalk"
                        placeholder="목표 걸음 수"
                        value={settingWalk}
                        onChange={(e)=>{setSettingWalk(e.target.value)}}
                        ref={typeWalk}
                    />
                </div>
                <div 
                    className="walkNoti"
                >
                    <div ref={walkNoti}>
                        목표 걸음 수를 입력해주세요.<br />
                        최소 목표 걸음 수는 5,000입니다.
                    </div>
                    <div ref={maxWalkNoti}>
                        최대 목표 걸음 수는 99,999입니다.
                    </div>
                </div>
                <button
                    onClick={handleSaveWalk}
                >저장하기</button>
            </div>
        </div>
    );
}
export default Pedometer;