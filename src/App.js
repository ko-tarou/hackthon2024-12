import './App.css';
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import Toppage from "./pages/Toppage"
import Projectpage from "./pages/Projectpage.js"

function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">ホーム</Link>
          <Link to="/project">プロジェクト</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Toppage/>}/>
        <Route path="/project" element={<Projectpage/>}/>
      </Routes>
    </Router>
  );
}

export default App;