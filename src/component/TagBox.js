import React, { useRef, useEffect } from "react";

const TagBox = () => {
  const tags = [
    "#샐러드",
    "#포케",
    "#일반식",
    "#단백질보충",
    "#닭가슴살",
    "#연어",
    "#슈가프리",
    "#그릭요거트",
    "#벌크업식단",
    "#치팅데이",
  ];

  const tagBoxesRefs = useRef([]);

  useEffect(() => {
    tagBoxesRefs.current = [];
  }, [tags]);

  useEffect(() => {
    tagBoxesRefs.current.forEach((box) => {
      const dynamicWidth = box.innerText.length * 10;
      box.style.minWidth = `${dynamicWidth}px`;
    });
  }, [tags]);

  return (
    <div className="tagBox">
      <div className="scroll-container">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="foodTagBox"
            ref={(ref) => ref && tagBoxesRefs.current.push(ref)}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagBox;
