import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Toppage from "./pages/TopPage/TopPage.js";
import Projectpage from "./pages/ProjectPage/ProjectPage.js";
import SlidePage from "./pages/SlidePage/SlidePage.js";
import TestPage from "./pages/TestPage/TestPage.js";

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav>
        <Link to="/">ホーム</Link>
        <Link to="/project">プロジェクト</Link>
        <Link to="/slide">スライド</Link>
        <Link to="/test">実験</Link>
        {/* 条件に応じて検索フィールドと検索ボタンを表示 */}
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
      <button className="circle-button">?</button>
    </header>
  );
};

function App() {
  return (
    <Router>
      {/* ヘッダーコンポーネント */}
      <Header />
      
      {/* ルートの設定 */}
      <Routes>
        <Route path="/" element={<Toppage />} />
        <Route path="/project" element={<Projectpage />} />
        <Route path="/slide" element={<SlidePage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
