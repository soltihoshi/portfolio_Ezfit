const ModalChart = ({setOpenModal}) => {

    return (
        <div className="ModalChart">
            <div className="content">
                <div className="contentTxt">
                    <h4 className="title">헤리스-베네딕트공식</h4>
                    <p>
                        <span>남성</span><br />
                        88.4+(14.4*몸무게) + (4.8*키) -(5.68*만 나이)
                    </p>
                    <p>
                        <span>여성</span><br />
                        447.6+(9.25*몸무게)+(3.1*키)-(4.33*만 나이)
                    </p>
                    <p className="chart_info">
                        칼로리는 기초대사량으로 제공됩니다.<br />
                        기초대사량은 프로필에서 입력해주신 데이터를 기반으로 공식을 이용하여 나온 결과값입니다.
                    </p>
                </div>
                <button className="modalCloseBtn"
                    onClick={()=>{setOpenModal(false)}}
                >닫기</button>
            </div>
        </div>
    );
};
export default ModalChart;