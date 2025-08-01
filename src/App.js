import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Works from "./pages/Works.js";
import Blog from "./pages/BlogCard.js";
import Navbar from "./components/Navbar.js";
import ProjectDetail from "./pages/ProjectDetailPage.js";
import DynamicPostPage from "./components/Post/DynamicPostPage.js";
import ScrollToTop from "./utils/ScrollToTop.js";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <div className="container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:projectId" element={<ProjectDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/:type" element={<DynamicPostPage />} />
            <Route path="/:type/:postId" element={<DynamicPostPage />} />
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
