import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Choi dev</Link>
        </li>
        <li>
          <Link to="/Skills">Skills</Link>
        </li>
        <li>
          <Link to="/works">Works</Link>
        </li>
        <li>
          <Link to="/ConferenceNotes">Conference Notes</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
