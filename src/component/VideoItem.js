import { useState } from "react";
import './ExerItem.css';
import { ExerstateDispatch } from "../App";
import { useContext } from "react";

const  VideoItem = ({Video, vkcal}) => {
    const {onCreate} = useContext(ExerstateDispatch);

    const [id, setId] = useState(null);
    const [subject, setSubject] = useState(null);
    const [fsub, setFsub] = useState(null);
    const [Km, setKm] = useState(null) 
    const [count, setCount] = useState(null);
    const [set, setSet] = useState(null)
    const [fkcal, setFkcal] = useState(null)
    const [ekcal, setEkcal] = useState(null)
    const [video, setVideo] = useState(Video);
    const [vKcal, setvKcal] = useState(vkcal);
    const [date, setDate] = useState(null)
    const [walk, setWalk] = useState(null)
    const [setwalk, setSetWalk] = useState(null)
    const [G, setG] = useState(null)
    const [fmount, setFmount] = useState(null)
    const [save, setSave] = useState(null)
    
    const ChangeVideo = (e) => {
        setVideo(e.target.value);
    }
    
    const ChangevKcal = (e) => {
        setvKcal(e.target.value);
    }
    
    const clickSave = () => {
        onCreate(id, subject, fsub, Km,  count ,  set,  fkcal, ekcal,  vKcal, video, date, walk, setwalk, G, fmount, save);
    }

    return (
        <div className="VideoItem">
            <div value={video} onChange={ChangeVideo}>{Video}</div>
            <div value={vKcal} onChange={ChangevKcal}>{vkcal}Kcal</div>
            <button onClick={clickSave}>+</button>
        </div>
    )
}
export default VideoItem;