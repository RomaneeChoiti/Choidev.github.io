// src/pages/Work.js
import { useNavigate } from "react-router-dom";
import styles from "../css/Work.module.css";
import Card from "../components/Card";
import projects from "../data/projects";

function Work() {
  const navigate = useNavigate();

  const handleProjectClick = (link) => {
    navigate(link, { replace: false });
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <Card key={index} item={project} onClick={handleProjectClick} />
        ))}
      </div>
    </div>
  );
}

export default Work;
