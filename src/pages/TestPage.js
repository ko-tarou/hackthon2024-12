import React, { useState, useRef } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  TEXT_BOX: 'textBox',
};

function DraggableTextBox({ id, text, x, y }) {
  return (
    <div
      style={{
        padding: '10px',
        border: '1px solid black',
        cursor: 'move',
        position: 'absolute',
        left: x,
        top: y,
      }}
    >
      {text || `TextBox ${id}`}
    </div>
  );
}

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

function DropZone({ onDrop }) {
  const dropRef = useRef(null);

  const [, drop] = useDrop({
    accept: ItemTypes.TEXT_BOX,
    drop: (item, monitor) => {
      if (!dropRef.current) return;

      const offset = monitor.getSourceClientOffset(); // ドロップ位置を取得
      const dropZoneRect = dropRef.current.getBoundingClientRect(); // DropZoneの位置とサイズを取得
      const relativeX = offset.x - dropZoneRect.left;
      const relativeY = offset.y - dropZoneRect.top;
      onDrop(item, { x: relativeX, y: relativeY });
    },
  });

  drop(dropRef);

  return (
    <div
      ref={dropRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        border: '1px solid gray',
      }}
    />
  );
}

function TabContent() {
  const [textBoxes, setTextBoxes] = useState([]);

  const handleDrop = (item, offset) => {
    const newId = textBoxes.length + 1;
    setTextBoxes([
      ...textBoxes,
      {
        id: newId,
        text: item.text || `TextBox ${newId}`,
        x: offset.x,
        y: offset.y,
      },
    ]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex' }}>
        <div style={{ padding: '10px', borderRight: '1px solid gray' }}>
          <h3>タブ</h3>
          <TextBox text="T" />
        </div>
        <div style={{ flex: 1, position: 'relative' }}>
          <DropZone onDrop={handleDrop} />
          {textBoxes.map((box) => (
            <DraggableTextBox
              key={box.id}
              id={box.id}
              text={box.text}
              x={box.x}
              y={box.y}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
}

export default TabContent;
