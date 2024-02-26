import Record from "./Record";
import ExerciseList from "./ExerciseList";
import VRecord from "./VRecord";
import { useState, useContext} from "react";


const RecordPage = ({dumm}) => {
    
    const[diaryData, setDiaryData] = useState([]);

    return(
        <div className="RecordPage">
            <Record isEdit={true}/>
            <VRecord dumm={dumm}/>
            <ExerciseList diaryData={diaryData}/>
        </div>
    )
}

export default RecordPage;