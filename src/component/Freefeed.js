import FreeList from "./FreeList";

const Freefeed = () => {
    const FreeDummy = [
        {
            id: 0,
            profile: '/img/cat01.jpeg',
            rank: 'beginner',
            nickname: '김벅벅',
            title: '안녕하세요. 헬린이입니다.',
            content: '헬린이인데 이런 어플이 있는 지도 몰랐네요. 왕초보 1주차 동영상 보고 운동하고 왔는데 생각보다 땀도 많이 나고 무리하지 않고 가볍게 몸을 깨우는 것 같아서 좋았어요. 모두 화이팅하세요!',
            like: 8,
            comment: 2
        },
        {
            id: 1,
            profile: '/img/cat02.jpeg',
            rank: 'advanced',
            nickname: '그린아카데미',
            title: '운동 노동요 추천',
            content: '운동할 때 빡시게 할 수 있는 노동요 추천해주세요!',
            like: 20,
            comment: 5
        },
        {
            id: 2,
            profile: '/img/cat03.jpeg',
            rank: 'middleClass',
            nickname: 'EZfit',
            title: '간혈적 단식 해본 사람?',
            content: '간혈적 단식 하는 사람 있어? 효과가 있다는 사람도 있고 없다는 사람도 있던데 좀 헷갈려서ㅠ 하고 있는 사람 있음 후기 좀 써주세요ㅠㅠ',
            like: 2,
            comment: 1
        },
    ]
    return (
        <div className="Free">
            <FreeList FreeDummy={FreeDummy} />
        </div>
    );
};

export default Freefeed;