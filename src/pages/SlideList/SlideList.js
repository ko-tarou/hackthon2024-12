import React, { useRef, useState } from "react";
import "./SlideList.css";

const SlideList = () => {
// refs配列を管理するuseRef
const refs = useRef([]);
// ボックスの数を管理するuseState
const [boxCount, setBoxCount] = useState(1);
// フォーカスされたボックスID
const [focusedBoxId, setFocusedBoxId] = useState(null);

// ボタンをクリックしたときの処理
const addBox = () => {
	// refs配列に新しいrefを追加
	refs.current.push(React.createRef());
	// ボックス数を増やす
	setBoxCount((prevCount) => prevCount + 1);
};

const delBox = () => {
	if (focusedBoxId !== null) {
	// フォーカスされたボックスを削除
	refs.current.splice(focusedBoxId, 1); // 対応する ref を削除
	setBoxCount((prevCount) => prevCount - 1); // ボックス数を減らす
	setFocusedBoxId(null); // フォーカスをリセット
	}
};

const handleClick = (ref, id) => {
	if (ref.current) {
	ref.current.focus(); // クリック時にフォーカスを設定
	setFocusedBoxId(id); // フォーカスされたボックスの ID を保存
	}
};

return (
	<div className="slide-container">
	<button className="del-box-button" onClick={delBox}>
		-
	</button>
	{Array.from({ length: boxCount }).map((_, index) => (
		<div
		key={index}
		ref={refs.current[index] || (refs.current[index] = React.createRef())}
		tabIndex={0} // フォーカス可能にするために tabIndex を追加
		className="clickable-text"
		onClick={() => handleClick(refs.current[index], index)} // indexを引数に追加
		></div>
	))}
	<button className="add-box-button" onClick={addBox}>
		+
	</button>
	</div>
);
};

export default SlideList;
