import React, { useRef, useState } from "react";
import "./SlideList.css";

const SlideList = () => {
  // refs配列を管理するuseRef
  const refs = useRef([]);
  // ボックスの数を管理するuseState
  const [boxCount, setBoxCount] = useState(1);

  // ボタンをクリックしたときの処理
  const addBox = () => {
    // refs配列に新しいrefを追加
    refs.current.push(React.createRef());
    // ボックス数を増やす
    setBoxCount((prevCount) => prevCount + 1);
  };

  const handleClick = (ref) => {
    if (ref.current) {
      ref.current.focus(); // クリック時にフォーカスを設定
    }
  };

  return (
    <div className="slide-container">
      {Array.from({ length: boxCount }).map((_, index) => (
        <div
          key={index}
          ref={refs.current[index] || (refs.current[index] = React.createRef())}
          tabIndex={0} // フォーカス可能にするために tabIndex を追加
          className="clickable-text"
          onClick={() => handleClick(refs.current[index])}
        >
        </div>
      ))}
      {/* ボタンを追加 */}
      <button className="add-box-button" onClick={addBox}>+</button>
    </div>
  );
};

export default SlideList;
