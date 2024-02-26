import FreeItem from "./FreeItem";
import FeedHeader from "./FeedHeader";

const FreeList = ({ FreeDummy }) => {

    return (
        <div className="FreeList">
            <div className="FreeListH"><FeedHeader /></div>
            {FreeDummy.map((it) => (
                <FreeItem
                    id={it.id}
                    profile={it.profile}
                    rank={it.rank}
                    nickname={it.nickname}
                    title={it.title}
                    content={it.content}
                    like={it.like}
                    comment={it.comment}
                />
            ))}
        </div>
    );
};

export default FreeList;