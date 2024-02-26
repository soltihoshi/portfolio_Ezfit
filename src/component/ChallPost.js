import React, { useState } from 'react';
import "./WritePost.css"
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';

const ChallPost = () => {
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const navigate = useNavigate(); 

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageUpload = (e) => {
    const selectedImages = Array.from(e.target.files);

    // 이미지를 최대 5장까지만 허용
    if (selectedImages.length + images.length > 5) {
      alert('최대 5장의 사진까지만 업로드 가능합니다.');
      return;
    }

    setImages([...images, ...selectedImages]);
  };

  const handleImageRemove = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const slickSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    nextArrow: <></>, 
    prevArrow: <></>,
  };

  return (
    <div className='WritePost'>
    <div className='postTop'>
        <div className='backHome'onClick={()=>{navigate('/challenge')}}>뒤로가기</div>
        <h2 className='PostTitle'>챌린지</h2>
    </div>
      <textarea
        type='text'
        value={content}
        onChange={handleContentChange}
      />
    <div>
    <p>(사진 최대 5장)</p>
    </div>
      <div className="image-upload-container">
        <label htmlFor="imageUpload" className="image-upload-btn">
          +
        </label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
        />

        <div className="image-preview-container">
        <Slider {...slickSettings}>
          {images.map((image, index) => (
            <div key={index} className="image-preview">
              <img src={URL.createObjectURL(image)} alt={`Preview ${index}`} />
              <button onClick={() => handleImageRemove(index)}>x</button>
            </div>
          ))}
        </Slider>  
        </div>
      </div>
      <div className='UploadBtn'>
        <button onClick={()=>{navigate('/challenge')}}>글 올리기</button>
        </div>
    </div>
  );
};

export default ChallPost;
