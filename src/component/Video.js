
import "./VideoCss.css";
import VCbeginner from "./VCbeginner";
import VCnoiselessness from "./VCnoiselessness";
import VCoverWeight from "./VCoverWeight";
import VCpartial from "./VCpartial";
import VCstretch from "./VCstretch";
import VCunderWeight from "./VCunderWeight";

const Video = () => {

    return (
        <div className="Video">
            <div className="VideoCate">
                <h2>홈트 왕초보</h2>
                <VCbeginner />
            </div>
            <div className="VideoCate">
                <h2>무소음 유산소</h2>
                <VCnoiselessness />
            </div>
            <div className="VideoCate">
                <h2>과체중 탈출기</h2>
                <VCoverWeight />
            </div>
            <div className="VideoCate">
                <h2>저체중 탈출기</h2>
                <VCunderWeight />
            </div>
            <div className="VideoCate">
                <h2>스트레칭</h2>
                <VCstretch />
            </div>
            <div className="VideoCate">
                <h2>부위별 운동</h2>
                <VCpartial />
            </div>
        </div>
    );
}

export default Video;