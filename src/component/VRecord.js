import { CalendarList } from "../App";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import VideoItem from "./VideoItem";



const VRecord = ({dumm}) => {
    const navigate = useNavigate();
    const data = useContext(CalendarList);
    

    const [search, setSearch] = useState('');
    const ChangeSearch = (e) => {
        setSearch(e.target.value);
    }
    const [video, setVideo] = useState();
    const ChangeVideo = (e) => {
        setVideo(e.target.value);
    }
    const [vKcal, setvKcal] = useState();
    const ChangevKcal = (e) => {
        setvKcal(e.target.value);
    }

    const filterResult = () => {
        return search === '' ?  data : dumm.filter(it => it.Video.includes(search));
    }
    
    
    return (
       
        <div className="VRecord">
            <div className="Search">
                    <input 
                        type="text"
                        placeholder="비디오"
                        value={search}
                        onChange={ChangeSearch}
                    />
                </div>
                <div className="videoList">
                {search.length > 0 ? (
                            <div>
                            {filterResult().map((it, id) => (
                                <div  key={id}  className="videoTxt">
                                    <VideoItem {...it} />
                                </div>
                                
                            ))} 
                                
                            </div>
                           
                        ):(
                            <div></div>
                        )
                    }    
                </div>
                <div className="addVideo">
                    
            </div>
        </div>
    )
}

export default VRecord;