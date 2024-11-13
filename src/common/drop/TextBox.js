import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import useWebSocket from './useWebSocket.js';

function TextBox({ id, text, x, y, onPositionChange }) {
  const [position, setPosition] = useState({ x, y });

  const { sendUpdate } = useWebSocket();

  const [{ isDragging }, drag, preview] = useDrag({
    type: ItemTypes.TEXT_BOX,
    item: { id, x: position.x, y: position.y },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const handleDragStart = (e) => {
    e.stopPropagation();

    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;

    const handleMouseMove = (e) => {
      const newX = e.clientX - startX;
      const newY = e.clientY - startY;
      setPosition({ x: newX, y: newY });
      onPositionChange(id, newX, newY);
      sendUpdate({ id, x: newX, y: newY });
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={preview}
      onMouseDown={handleDragStart} // ドラッグ機能を有効にする
      style={{
        width: '100px',
        height: '50px',
        padding: '10px',
        border: '1px solid black',
        cursor: 'move',
        position: 'absolute',
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <span>{text}</span>
    </div>
  );
}

export default TextBox;
