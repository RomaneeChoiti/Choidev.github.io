import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/ProjectDetail.module.css";
import projects from "../data/projects";
import VideoRenderer from "../components/VideoRenderer";
import SEO from "../components/SEO";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  // modal state must be declared before any early returns (React Hooks rule)
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);
  const [modalIsPortrait, setModalIsPortrait] = useState(false);
  const isSliding = React.useRef(false);
  

  // keyboard navigation & Esc (hook declared unconditionally)
  useEffect(() => {
    if (!modalOpen || !project) return;
    function onKey(e) {
      if (e.key === "Escape") {
        setModalOpen(false);
        setModalIndex(null);
      } else if (e.key === "ArrowRight") {
        setModalIndex((i) => (i == null ? i : (i + 1) % project.images.length));
      } else if (e.key === "ArrowLeft") {
        setModalIndex((i) => (i == null ? i : (i - 1 + project.images.length) % project.images.length));
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen, project]);

  // SEO is handled by the reusable <SEO /> component below

  if (!project) {
    return <p>Project not found.</p>;
  }

  const keywordsForSEO = (() => {
    const kwSet = new Set();
    if (Array.isArray(project.keywords)) project.keywords.forEach(k => k && kwSet.add(k));
    if (project.techStack) Object.values(project.techStack).forEach(arr => arr.forEach(t => t && kwSet.add(t)));
    if (Array.isArray(project.platform)) project.platform.forEach(p => p && kwSet.add(p));
    if (project.title) project.title.split(/[\s:–—,_]+/).slice(0,6).forEach(w => w && kwSet.add(w));
    if (Array.isArray(project.team)) project.team.forEach(m => m.name && kwSet.add(m.name));
    return Array.from(kwSet).slice(0,30);
  })();

  const sliderSettings = {
    dots: false, // Remove the dots indicator
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide the navigation arrows
  beforeChange: () => { isSliding.current = true; },
  afterChange: () => { isSliding.current = false; },
  responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderList = (items, renderFn) =>
    items.map((item, index) => renderFn(item, index));

  const handleImageClick = (index) => {
  // if user is currently sliding, ignore click to avoid conflict
  if (isSliding.current) return;
  // detect image orientation before opening modal
    const img = new Image();
    img.src = project.images[index];
    img.onload = () => {
      const isPortrait = img.naturalHeight > img.naturalWidth;
      setModalIsPortrait(isPortrait);
      setModalIndex(index);
      setModalOpen(true);
    };
    // fallback in case onload doesn't fire fast enough
    img.onerror = () => {
      setModalIsPortrait(false);
      setModalIndex(index);
      setModalOpen(true);
    };
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalIndex(null);
  };

  // navigation buttons
  const showNext = () => {
    if (modalIndex == null) return;
    setModalIndex((i) => (i + 1) % project.images.length);
  };

  const showPrev = () => {
    if (modalIndex == null) return;
    setModalIndex((i) => (i - 1 + project.images.length) % project.images.length);
  };

  

  return (
    <>
      <SEO
        title={`${project.title} — STUDIO CHOI`}
        description={project.description}
        image={project.images && project.images[0]}
        keywords={keywordsForSEO.join(', ')}
        authors={(project.team || []).map(m => m.name)}
        techs={project.techStack ? Object.values(project.techStack).flat() : []}
        datePublished={project.year ? String(project.year) : undefined}
        url={window.location.href}
      />
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

      <Slider {...sliderSettings} className={styles.imageGallery}>
  {project.images.map((img, index) => {
          const handleImageLoad = (event) => {
            const imgElement = event.target;
            if (imgElement.naturalWidth > imgElement.naturalHeight) {
              imgElement.classList.add(styles.wide);
            } else {
              imgElement.classList.remove(styles.wide);
            }
          };

          return (
            <div key={index} className={styles.sliderItem}>
              <img
                src={img}
                alt={`${project.title} screenshot ${index + 1}`}
                className={styles.galleryImage}
                onLoad={handleImageLoad}
                onClick={() => handleImageClick(index)}
              />
            </div>
          );
        })}
      </Slider>

      {/* Image modal (lightbox) */}
      {modalOpen && modalIndex != null && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <button
            className={styles.modalClose}
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            aria-label="Close"
          >
            ×
          </button>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={`${styles.modalArrow} ${styles.left}`}
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous"
            >
              ‹
            </button>

            <img
              src={project.images[modalIndex]}
              alt={`Enlarged ${modalIndex + 1}`}
              className={`${styles.modalImage} ${modalIsPortrait ? styles.portraitImage : ""}`}
            />

            <button
              className={`${styles.modalArrow} ${styles.right}`}
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      )}

      {project.video && (
        <div className={styles.videoContainer}>
          <VideoRenderer video={project.video} className={styles.largeVideo} />
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
  {project.techStack &&(
    <>
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
    </>
  )}
    {project.team && (
      <>
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
      </>
    )}
    {project.gitLink && (
      <>
        <p>{project.additionalInfo}</p>
        <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
          [ View source code on GitHub ]
        </a>
      </>
    )}
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
      {project.ArtWorkLink && (
        <>
          &nbsp;
          <a href={project.ArtWorkLink} target="_blank" rel="noopener noreferrer">
             View ArtWork : {project.ArtWorkLink}
          </a>
        </>
      )}
      {project.downLoadLink && (
        <>
          &nbsp;
          <a href={project.downLoadLink} target="_blank" rel="noopener noreferrer">
            [ App Store ]
          </a>
        </>
      )}
    </div>
    </>
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
