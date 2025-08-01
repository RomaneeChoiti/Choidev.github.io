import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

import "../css/Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Choi dev</Link>
        </li>
        <li>
          <Link to="/works">Works</Link>
        </li>
        <li>
          <Link to="/FrontendNotes">Frontend</Link>
        </li>
        <li>
          <Link to="/BackendNotes">Backend</Link>
        </li>
        <li>
          <Link to="/DevOpsNotes">DevOps</Link>
        </li>
        <li>
          <Link to="/ConferenceNotes">Conference</Link>
        </li>
        <li>
          <Link to="/HnSSkillNotes">Hard x Soft</Link>
        </li>
        <li>
          {/* <Link to="/ComedyNotes">Comedy Notes</Link> */}
        </li>
        <li>
          <Link to="/blog">Blogs</Link>
        </li>
      </ul>
      <div style={{ marginTop: "1rem" }}>
        <DarkModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
