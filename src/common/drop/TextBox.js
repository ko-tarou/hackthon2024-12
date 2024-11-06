import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

function TextBox({ text }) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TEXT_BOX,
    item: { text },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: '10px',
        border: '1px solid black',
        cursor: 'move',
      }}
    >
      {text}
    </div>
  );
}

export default TextBox;
