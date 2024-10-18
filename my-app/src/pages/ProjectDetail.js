import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/ProjectDetail.module.css";
import projects from "../data/projects";

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);
  const [videoHeight, setVideoHeight] = useState(0);

  // 비디오 유형에 따라 비디오 요소 생성
  function renderVideoContent(video) {
    const videoClass =
      videoHeight > 900 ? styles.smallVideo : styles.largeVideo;

    if (isYouTubeLink(video)) {
      return (
        <iframe
          src={convertToYouTubeEmbedURL(video)}
          title="YouTube Video"
          className={videoClass}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    } else if (video.startsWith("http")) {
      return (
        <iframe
          src={video}
          title="Video"
          className={videoClass}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    } else {
      return (
        <video
          controls
          className={videoClass}
          onLoadedMetadata={handleVideoHeight}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  }

  function isYouTubeLink(url) {
    return url.includes("youtube.com") || url.includes("youtu.be");
  }

  function convertToYouTubeEmbedURL(url) {
    if (url.includes("watch")) {
      return url.replace("watch?v=", "embed/");
    } else if (url.includes("youtu.be")) {
      return url.replace("youtu.be/", "youtube.com/embed/");
    }
    return url;
  }

  function handleVideoHeight(e) {
    setVideoHeight(e.target.videoHeight);
  }

  if (!project) {
    return <p>Project not found.</p>;
  }

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
        {project.images.map((img, index) => (
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
          {renderVideoContent(project.video)}
        </div>
      )}
      {Array.isArray(project.VideoOverview) &&
      project.VideoOverview.length > 1 ? (
        <div className={styles.videoOverview}>
          {project.VideoOverview.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      ) : (
        <p className={styles.year}>
          {Array.isArray(project.VideoOverview)
            ? project.VideoOverview[0]
            : project.VideoOverview}
        </p>
      )}
      {project.features.length > 0 && (
        <>
          <h3 className={styles.sectionHeader}>Features:</h3>
          <ul>
            {project.features.map((feature, index) => (
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
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.teamSection}>
        <h3 className={styles.sectionHeader}>Team Members:</h3>
        <ul>
          {project.team.map((member, index) => (
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
      &nbsp;
      {project.blogLink && (
        <a href={project.blogLink} target="_blank" rel="noopener noreferrer">
          [ Blog ]
        </a>
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
