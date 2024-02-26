import { useState } from 'react';
import './FeedDetail.css';
import { useLocation } from 'react-router-dom';
import FeedModal from '../component/FeedModal';

const ChallengeDetail = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleClick = (id) => {
        setSelectedId(id);
        setOpenModal(true);
    }

    const location = useLocation();
    const { state } = location;

    if (!state) {
        return <div>피드를 찾을 수 없습니다.</div>;
    }

    const { challengeDummyList } = state;
    return (
        <div className="ChallengeDetail">
            {challengeDummyList.map(challenge => (
                <div key={challenge.id}>
                    <div className="detailHeader">
                        <div className="detailLeft">
                            <p className="detailProfile">
                                <img src={challenge.photo} alt={`프로필사진 ${challenge.id}`} />
                            </p>
                            <p className="detailNickName">
                                {challenge.nickName}
                            </p>
                        </div>
                        <div className="detailRight">
                            <p className="detailFollow">팔로우</p>
                            <p className="detailMenu"
                                onClick={() => handleClick(challenge.id)}
                            >…</p>
                        </div>
                    </div>
                    <div className="detailPhoto">
                        <img src={challenge.photo} alt={`챌린지 사진 ${challenge.id}`} />
                    </div>
                    <div className="detailFooter">
                        <div className="detailIcon">
                            <button className="detailLike detailBtn">
                                <img src="/img/heart.svg" alt="좋아요" />
                            </button>
                            <button className="detailComment detailBtn">
                                <img src="/img/comment.svg" alt="댓글" />
                            </button>
                        </div>
                        <div className="detailContent">
                            {challenge.content}
                        </div>
                        <div className="detailCommentNum">
                            댓글 n개 더 보기
                        </div>
                    </div>
                    {
                        openModal && 
                        selectedId === 
                        challenge.id && 
                        <FeedModal setOpenModal={setOpenModal} />
                    }
                </div>
            ))}
        </div>
    );
};

export default ChallengeDetail;
