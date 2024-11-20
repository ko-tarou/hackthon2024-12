import '../../App.js';
import '../../App.css';
import React from "react";


const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          ×
        </button>
        <h2>説明書</h2>
        <p>使い方ここに書く（行によって×ボタンの位置変更いる）</p>
      </div>
    </div>
  );
};

export default Modal;