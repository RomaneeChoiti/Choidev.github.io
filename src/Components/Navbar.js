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
          <Link to="/ConferenceNotes">Conference Notes</Link>
        </li>
        <li>
          <Link to="/FrontendNotes">Frontend Notes</Link>
        </li>
        <li>
          <Link to="/BackendNotes">Backend Notes</Link>
        </li>
        <li>
          <Link to="/HnSSkillNotes">HnS Skill Notes</Link>
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
