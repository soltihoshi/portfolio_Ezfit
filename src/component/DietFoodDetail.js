import { useState } from 'react';
import './FeedDetail.css';
import { useLocation } from 'react-router-dom';
import FeedModal from '../component/FeedModal';

const DietFoodDetail = () => {
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

    const { dietDummyList } = state;

    return (
        <div className="DietFoodDetail">
            {dietDummyList.map(diet => (
                <div key={diet.id}>
                    <div className="detailHeader">
                        <div className="detailLeft">
                            <p className="detailProfile">
                                <img src={diet.photo} alt={`프로필사진 ${diet.id}`} />
                            </p>
                            <p className="detailNickName">
                                {diet.nickName}
                            </p>
                        </div>
                        <div className="detailRight">
                            <p className="detailFollow">팔로우</p>
                            <p className="detailMenu"
                                onClick={() => handleClick(diet.id)}
                            >…</p>
                        </div>
                    </div>
                    <div className="detailPhoto">
                        <img src={diet.photo} alt={`챌린지 사진 ${diet.id}`} />
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
                            {diet.content}
                        </div>
                        <div className="detailCommentNum">
                            댓글 n개 더 보기
                        </div>
                    </div>
                    {
                        openModal && 
                        selectedId === 
                        diet.id && 
                        <FeedModal setOpenModal={setOpenModal} />
                    }
                </div>
            ))}
        </div>
    );
};

export default DietFoodDetail;
