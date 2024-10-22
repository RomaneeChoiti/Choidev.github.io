import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import Blog from "./pages/Blog";
import Navbar from "./Components/Navbar";
import ProjectDetail from "./pages/ProjectDetail";
import DynamicPostPage from "./Components/DynamicPostPage.js";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:projectId" element={<ProjectDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/:type" element={<DynamicPostPage />} />
            <Route path="/:type/:postId" element={<DynamicPostPage />} />{" "}
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
