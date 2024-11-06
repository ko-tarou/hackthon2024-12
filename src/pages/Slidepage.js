import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import "../styles/Slidepage.css";
import Tabs from "../common/object-list-tab/Tabs";
import TabContent from "../common/object-list-tab/TabContent";
import DropZone from '../common/drop/DropZone';
import DraggableTextBox from '../common/drop/DraggableTextBox';

function Slidepage() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [textBoxes, setTextBoxes] = useState([]);

  const handleDrop = (item, position) => {
    setTextBoxes((prevBoxes) => {
      // 既存のボックスの位置を更新するか、新規ボックスを追加
      const existingBoxIndex = prevBoxes.findIndex((box) => box.id === item.id);
      if (existingBoxIndex !== -1) {
        const updatedBoxes = [...prevBoxes];
        updatedBoxes[existingBoxIndex] = {
          ...updatedBoxes[existingBoxIndex],
          x: position.x,
          y: position.y,
        };
        return updatedBoxes;
      } else {
        const newId = prevBoxes.length + 1;
        return [
          ...prevBoxes,
          {
            id: newId,
            text: item.text || `TextBox ${newId}`,
            x: position.x,
            y: position.y,
          },
        ];
      }
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='Slidepage'>
        {/* object-list */}
        <div className='object-list'>
          <div className='tab'>
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className='content'>
            <TabContent activeTab={activeTab} />
          </div>
        </div>
        <div className='not-object'>
          <div className='main'>
            <div className='main-slide' style={{ position: 'relative', height: '100%' }}>
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
            <div className='note'></div>
          </div>
          <div className='slide-list'></div>
        </div>
      </div>
    </DndProvider>
  );
}

export default Slidepage;
