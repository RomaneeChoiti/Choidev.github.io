import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/Work.module.css"; // CSS 모듈 가져오기
import projects from "../data/projects"; // 프로젝트 데이터 가져오기

function Work() {
  const navigate = useNavigate();

  const handleProjectClick = (link) => {
    navigate(link, { replace: true });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Works</h1>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => handleProjectClick(`/works/${project.id}`)}
          >
            <img
              src={project.image}
              alt={project.title}
              className={styles.image}
            />
            <div className={styles.info}>
              <h2>{project.title}</h2>
              <p>{project.year}</p>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
