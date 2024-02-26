
import Gnb from "./Gnb"

const FreeItem = ({ id, profile, rank, nickname, title, content, like, comment }) => {

    return (
        <div className="FreeItem">
            <div className="itemHeader">
                <p className="profile">
                    <img src={profile} alt={`프로필사진 ${id}`} />
                </p>
                <p className="rank">
                    <img src={`/img/${rank}.png`} alt={`등급 ${id}`} />
                </p>
                <p className="nickname">{nickname}</p>
            </div>
            <div className="itemContent">
                <h3>{title}</h3>
                <p className="content">{content}</p>
            </div>
            <div className="likeComment">
                <div className="like">
                    <p className="likeImg">
                        <img src="/img/heart.svg" alt="좋아요" />
                    </p>
                    <p className="likeNum">{like}</p>
                </div>
                <div className="comment">
                    <p className="commentImg">
                        <img src="/img/comment.svg" alt="댓글" />
                    </p>
                    <p className="commentNum">{comment}</p>
                </div>
            </div>
            <Gnb />
        </div>
    );
};

export default FreeItem;