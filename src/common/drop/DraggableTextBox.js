import React from 'react';
import { useDrag } from 'react-dnd';

const ItemTypes = {
  TEXT_BOX: 'textBox',
};

function DraggableTextBox({ id, text, x, y }) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TEXT_BOX,
    item: { id, text }, // idも渡して特定できるように
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        padding: '10px',
        border: '1px solid black',
        cursor: 'move',
        position: 'absolute',
        left: x,
        top: y,
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {text}
    </div>
  );
}

export default DraggableTextBox;
