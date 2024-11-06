import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DropZone from './DropZone';
import TextBoxArea from './TextBoxArea';
import DraggableTextBox from '../../pages/TestPage';

function MainDrop() {
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
        <TextBoxArea /> {/* ドラッグ可能なテキストボックスエリア */}
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

export default MainDrop;
