import './App.css';
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import Toppage from "./pages/Toppage"
import Projectpage from "./pages/Projectpage.js"
import SlidePage from "./pages/Slidepage.js"

function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">ホーム</Link>
          <Link to="/project">プロジェクト</Link>
          <Link to="/slide">スライド</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Toppage/>}/>
        <Route path="/project" element={<Projectpage/>}/>
        <Route path="/slide" element={<SlidePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;