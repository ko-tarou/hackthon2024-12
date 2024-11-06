import React, { useState, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

function TextBox({ id, text, x, y, onTextChange }) {
  const [value, setValue] = useState(text || "");

  useEffect(() => {
    setValue(text);
  }, [text]);

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TEXT_BOX,
    item: { id, text: value, x, y },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const handleChange = (e) => {
    setValue(e.target.value);
    onTextChange(id, e.target.value);
  };

  return (
    <input
      ref={drag}
      type="text"
      value={value}
      onChange={handleChange}
      style={{
        width: '20px',
        height: '20px',
        opacity: isDragging ? 0.5 : 1,
        padding: '10px',
        border: '1px solid black',
        cursor: 'move',
        position: 'absolute',
        left: x,
        top: y,
        transform: 'translate(-50%, -50%)', // 中央揃えの調整
      }}
    />
  );
}

export default TextBox;
