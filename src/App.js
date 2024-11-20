import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import Toppage from "./pages/TopPage/TopPage.js";
import Projectpage from "./pages/ProjectPage/ProjectPage.js";
import SlidePage from "./pages/SlidePage/SlidePage.js";
import TestPage from "./pages/TestPage/TestPage.js";
import SlideView from "./pages/SlideView/SlideView.js";

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

const Header = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header>
      <nav>
        <Link to="/">ホーム</Link>
        <Link to="/project">プロジェクト</Link>
        <Link to="/slide">スライド</Link>
        <Link to="/test">実験</Link>
        {['/', '/slide'].includes(location.pathname) && (
          <div className="search-container">
            <input
              type="text"
              placeholder="検索..."
              className="search-field"
            />
            <button className="search-button">検索</button>
          </div>
        )}
      </nav>
      <button className="circle-button" onClick={openModal}>?</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Toppage />} />
        <Route path="/project" element={<Projectpage />} />
        <Route path="/slide" element={<SlidePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/slideview" element={<SlideView />} />
      </Routes>
    </Router>
  );
}

export default App;
