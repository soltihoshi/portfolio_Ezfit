import "../component/ExerciseCss.css";
import ExerciseCate from "../component/ExerciseCate";
import Video from "../component/Video";
import Gnb from "../component/Gnb";
import "../component/GnbCss.css";


const Exercise = () => {
    return (
        <div className="Exercise">
            <ExerciseCate />
            <Video />
            <Gnb />
        </div>
    );
}
export default Exercise;