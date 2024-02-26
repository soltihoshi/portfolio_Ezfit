import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./HomeTopCss.css";

const Header = ({leftChild, centerChild}) => {

    const [path, setPath] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    const showHome = () => {
        navigate('/open');
        setPath('/open');
    }
    const showStatistic = () => {
        navigate('/statistic');
        setPath('/statistic');
    }

    const [selectHome, setSelectHome] = useState(false);
    const [selectStatistic, setSelectStatistic] = useState(false);

    useEffect(()=>{

        setPath(`${location.pathname}`)

        if (path === '/open') {
            setSelectHome(true);
            setSelectStatistic(false);
        } else {
            setSelectHome(false);
            setSelectStatistic(true);
        }
    },[path]);

    return(
        <div className="Header">
            <div className="button_three">
                <div onClick={showHome} className= {selectHome ? 'active' : '' }>
                    {leftChild}
                </div>
                <div onClick={showStatistic} className= {selectStatistic ? 'active' : ''}>
                    {centerChild}
                </div>
            </div>
        </div>
    );
}
export default Header;
