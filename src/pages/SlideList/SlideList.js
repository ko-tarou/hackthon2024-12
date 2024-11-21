import React, { useRef } from "react";
import "./SlideList.css";

const SlideList = () => {
// 一度だけrefs配列を初期化
const refs = useRef([]);

// 必要な数だけrefs配列にrefを追加
if (refs.current.length < 1) {
	for (let i = refs.current.length; i < 1; i++) {
	refs.current.push(React.createRef());
	}
}

const handleClick = (ref) => {
	if (ref.current) {
	ref.current.focus(); // クリック時にフォーカスを設定
	}
};

return (
	<div className="slide-container">
	{refs.current.map((ref, index) => (
		<div
		key={index}
		ref={ref}
		tabIndex={0} // フォーカス可能にするために tabIndex を追加
		className="clickable-text"
		onClick={() => handleClick(ref)}
		>
		</div>
	))}
	</div>
);
}

export default SlideList;
