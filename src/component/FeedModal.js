import { useEffect } from 'react';
import './FeedModal.css';
const FeedModal = ({setOpenModal}) => {

    const handleModalClose = (e) => {
        if(e.target.classList.contains('FeedModal')){
            setOpenModal(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleModalClose);
        return () => {
            document.removeEventListener('click', handleModalClose);
        };
    }, [setOpenModal]);

    return (
        <div className="FeedModal">
            <div className="modalBox">
                <div className="modalText">
                    이 게시물을 신고 혹은 차단 하시겠습니까?
                </div>
                <div className="modalBtn">
                    <button className="complain">신고</button>
                    <button className="block">차단</button>
                </div>
            </div>
        </div>
    );
};
export default FeedModal;