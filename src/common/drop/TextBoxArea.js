import React from 'react';
import TextBox from './TextBox';

function TextBoxArea() {
	return (
    <div style={{ padding: '10px', borderRight: '1px solid gray' }}>
      <h3>タブ</h3>
      {/* ドラッグ可能なテキストボックスを設置 */}
      <TextBox text="追加" />
    </div>
  );
}

export default TextBoxArea;
