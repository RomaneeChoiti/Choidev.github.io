import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import LearningPath from "./pages/Learning Path";
import Blog from "./pages/Blog";
import Navbar from "./Components/Navbar";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:projectId" element={<ProjectDetail />} />

            <Route path="/Learning Path" element={<LearningPath />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
      <footer>
        <p>© 2024 Choi dev. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
