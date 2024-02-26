import { useEffect, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";

import "./GnbCss.css";

const Gnb = () => {
    const navigate = useNavigate();
    const [path, setPath] = useState('/');

    const location = useLocation();
    
    const [homeimg, setHomeimg] = useState();
    const [exerimg, setExerimg] = useState();
    const [feedimg, setFeedimg] = useState();
    const [myimg, setMyimg] = useState();

    const onHome = () => {
        navigate('/open');
        setPath('/open');
        window.scrollTo(0,0);
    };
    const onExercise = () => {
        navigate('/Exercise');
        setPath('/Exercise');
        window.scrollTo(0,0);
    };
    const onFeed = () => {
        navigate('/challenge');
        setPath('/challenge');
        window.scrollTo(0,0);
    };
    const onMy = () => {
        navigate('/My');
        setPath('/My');
        window.scrollTo(0,0);
    };

    useEffect(()=>{
        setPath(`${location.pathname}`)

        if (path === '/open' || path === '/statistic') {
            setHomeimg('/img/homeOn.svg');
        } else {
            setHomeimg('/img/home.svg');
        }
        if (path === '/Exercise') {
            setExerimg('/img/exerciseOn.svg');
        } else {
            setExerimg('/img/exercise.svg');
        }
        if (path === '/feed' || path ==='/challenge' || path === '/freefeed') {
            setFeedimg('/img/feedOn.svg');
        } else {
            setFeedimg(`/img/feed.svg`);
        }
        if (path === '/My') {
            setMyimg('/img/myPageOn.svg');
        } else {
            setMyimg('/img/myPage.svg');
        }
    },[path]);

    return (
        <div className="GnbWrap">
            <ul className="Gnb">
                <li className="home" onClick={onHome}>
                    <div>
                        <img src={homeimg} className = {path === '/open' || path === '/statistic' ? 'on' : 'off'}  />
                    </div>
                    <p className = {path === '/open' || path === '/statistic' ? 'on' : 'off'}>홈</p>
                </li>
                <li className="exercise" onClick={onExercise}>
                    <div>
                        <img src={exerimg} className={path === '/Exercise' ? 'on' : 'off'} />
                    </div>
                    <p className = {path === '/Exercise' ? 'on' : 'off'}>운동</p>
                </li>
                <li className="feed" onClick={onFeed}>
                    <div>
                        <img src={feedimg} className={path === '/feed' || path ==='/challenge' || path === '/freefeed' ? 'on' : 'off'} />
                    </div>
                    <p className = {path === '/feed' || path ==='/challenge' || path === '/freefeed' ? 'on' : 'off'}>피드</p>
                </li> 
                <li className="myPage" onClick={onMy}>
                    <div>
                        <img src={myimg} className={path === '/My'? 'on' : 'off'}/>
                    </div>
                    <p className = {path === '/My'? 'on' : 'off'}>마이</p>
                </li> 
            </ul>
        </div>
    );
}
export default Gnb;
