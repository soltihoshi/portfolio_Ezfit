const ModalDrink = ({setOpenModal}) => {

    return (
        <div className="ModalDrink">
            <div className="content">
                <div className="contentTxt">
                    세계보건기구(WHO)가 권장하는 하루 물 섭취량은 1.5~2ℓ입니다. 
                    200mℓ가 들어가는 일반적인 컵으로 약 8~10잔 정도입니다.
                    </div>
                <button className="modalCloseBtn"
                    onClick={()=>{setOpenModal(false)}}
                >닫기</button>
            </div>
        </div>
    );
};
export default ModalDrink;