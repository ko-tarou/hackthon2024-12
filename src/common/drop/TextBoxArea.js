import React from 'react';
import TextBox from './TextBox';

function TextBoxArea() {
	return (
    <div style={{ padding: '10px', borderRight: '1px solid gray' }}>
      {/* ドラッグ可能なテキストボックスを設置 */}
      <TextBox text="T" />
    </div>
  );
}

export default TextBoxArea;
