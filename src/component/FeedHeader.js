import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FeedHeader = ({leftChild, centerChild, rightChild, lastChild}) => {
    const [path, setPath] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    
    const [selectchallenge, setSelectChallenge] = useState(false);
    const [selectfeed, setSelectFeed] = useState(false);
    const [selectfreefeed, setSelectFreeFeed] = useState(false);

    const showChallenge = () => {
        navigate('/challenge');
        setPath('/challenge');
    }

    const showFeed = () => {
        navigate('/feed');
        setPath('/feed');
    }

    const showFreeFeed = () => {
        navigate('/freefeed');
        setPath('/freefeed');
    }

    const search = () => {
        navigate('/search');
    }

    useEffect(()=>{
        setPath(`${location.pathname}`)
        if (path === '/challenge') {
            setSelectChallenge(true);
            setSelectFeed(false);
            setSelectFreeFeed(false);
        }
        if (path === '/challenge') {
            setSelectChallenge(true);
            setSelectFeed(false);
            setSelectFreeFeed(false);
        }
        if (path === '/feed'){
            setSelectChallenge(false);
            setSelectFeed(true);
            setSelectFreeFeed(false);
        }
        if (path === '/freefeed'){
            setSelectChallenge(false);
            setSelectFeed(false);
            setSelectFreeFeed(true);
        }
    },[path]);

    return(
        <div className="Header">
            <div className="button_three">
                <div onClick={showChallenge} className={path === '/challenge' ? 'active' : ''}> {leftChild = '챌린지'}</div>
                <div onClick={showFeed} className={path === '/feed' ? 'active' : ''}> {centerChild = '식단피드'}</div>
                <div onClick={showFreeFeed} className={path === '/freefeed' ? 'active' : ''}> {rightChild = '자유피드'}</div>
            </div>
        </div>
    );
}

export default FeedHeader;