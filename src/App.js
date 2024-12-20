import './App.css';
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import Toppage from "./pages/TopPage/TopPage.js"
import Projectpage from "./pages/ProjectPage/ProjectPage.js"
import SlidePage from "./pages/SlidePage/SlidePage.js"
import TestPage from "./pages/TestPage/TestPage.js"

function App() {
  return (
    <Router>
      {/* ページ遷移 */}
      <header>
        <nav>
          <Link to="/">ホーム</Link>
          <Link to="/project">プロジェクト</Link>
          <Link to="/slide">スライド</Link>
          <Link to="/test">実験</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Toppage/>}/>
        <Route path="/project" element={<Projectpage/>}/>
        <Route path="/slide" element={<SlidePage/>}/>
        <Route path="/test" element={<TestPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;