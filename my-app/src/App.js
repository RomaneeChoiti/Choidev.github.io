import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import ConferenceNotes from "./pages/ConferenceNotes.js";
import Blog from "./pages/Blog";
import Navbar from "./Components/Navbar";
import ProjectDetail from "./pages/ProjectDetail";
import GitBlog from "./pages/GitBlog.js";
import Post from "./Components/Post/Post.js";

function App() {
  return (
    <Router basename="/Choidev.github.io">
      <div className="container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:projectId" element={<ProjectDetail />} />
            <Route path="/ConferenceNotes" element={<ConferenceNotes />} />
            <Route path="/ConferenceNotes/:postId" element={<Post />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gitblog" element={<GitBlog />} />
            <Route path="/gitblog/:postId" element={<Post />} />
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
