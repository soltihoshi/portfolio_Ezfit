import React, { useState } from 'react';
import "./WritePost.css"
import { useNavigate } from 'react-router-dom';

const FreePost = () => {
    const navigate = useNavigate();
    const [frcontent, setFrContent] = useState('');

    const handleFreePost = (e) => {
        setFrContent(e.target.value);
    };


    return (
        <div className='FreePost'>
            <div className='WritePost'>
                <div className='postTop'>
                    <img className='backHome' onClick={()=>{navigate('/challenge')}}/>
                    <h2 className='PostTitle'>자유 피드</h2>
                </div>
                <input placeholder='제목' type='text'/>
                <textarea
                    type='text'
                    value={frcontent}
                    onChange={handleFreePost}
                />
                <div className='UploadBtn'><button>글 올리기</button></div>
            </div>
        </div>
    )
}

export default FreePost;