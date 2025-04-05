import React from "react";
import { useParams } from "react-router-dom";
import styles from "../css/ProjectDetail.module.css";
import projects from "../data/projects";
import VideoRenderer from "../components/VideoRenderer";

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <p>Project not found.</p>;
  }

  const renderList = (items, renderFn) =>
    items.map((item, index) => renderFn(item, index));

  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <img src={project.image} alt={project.title} className={styles.image} />
        <div className={styles.info}>
          <p className={styles.title}>{project.title}</p>
          <p className={styles.platform}>{project.platform}</p>
          <p className={styles.year}>{project.year}</p>
          <p className={styles.description}>{project.description}</p>
        </div>
      </div>

      <div
        className={`${styles.imageGallery} ${
          project.platform.includes("Web") ? styles.platformWeb : ""
        }`}
      >
        {renderList(project.images, (img, index) => (
          <img
            key={index}
            src={img}
            alt={`${project.title} screenshot ${index + 1}`}
            className={styles.galleryImage}
          />
        ))}
      </div>

      {project.video && (
        <div className={styles.videoContainer}>
          <VideoRenderer video={project.video} />
        </div>
      )}

      {project.VideoOverview && (
        <div className={styles.videoOverview}>
          {Array.isArray(project.VideoOverview) ? (
            renderList(project.VideoOverview, (paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <p>{project.VideoOverview}</p>
          )}
        </div>
      )}

      {project.features.length > 0 && (
        <>
          <h3 className={styles.sectionHeader}>Features:</h3>
          <ul>
            {renderList(project.features, (feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </>
      )}

      <h3 className={styles.sectionHeader}>Tech Stack:</h3>
      <div className={styles.categoryGrid}>
        {Object.entries(project.techStack).map(([category, technologies]) => (
          <div key={category} className={styles.categoryCard}>
            <h4 className={styles.subHeader}>{getCategoryName(category)}:</h4>
            <ul>
              {renderList(technologies, (tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.teamSection}>
        <h3 className={styles.sectionHeader}>Team Members:</h3>
        <ul>
          {renderList(project.team, (member, index) => (
            <li key={index}>
              {member.name} - {member.role}
            </li>
          ))}
        </ul>
      </div>

      <p>{project.additionalInfo}</p>
      <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
        [ View source code on GitHub ]
      </a>
      {project.blogLink && (
        <>
          &nbsp;
          <a href={project.blogLink} target="_blank" rel="noopener noreferrer">
            [ Blog ]
          </a>
        </>
      )}
      {project.deployLink && (
        <>
          &nbsp;
          <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
            [ View site ]
          </a>
        </>
      )}
    </div>
  );
}

// 카테고리 이름을 지정하는 함수
function getCategoryName(category) {
  const categoryNames = {
    frontend: "프론트엔드",
    uiux: "UI/UX",
    backend: "백엔드",
    cicd: "CI/CD",
    deployment: "배포",
    tools: "기타도구",
  };
  return categoryNames[category] || category;
}

export default ProjectDetail;
