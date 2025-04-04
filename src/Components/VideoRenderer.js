// src/components/VideoRenderer.js
import React, { useState } from "react";
import styles from "../css/ProjectDetail.module.css";

function VideoRenderer({ video }) {
  const [videoHeight, setVideoHeight] = useState(0);

  function isYouTubeLink(url) {
    return url.includes("youtube.com") || url.includes("youtu.be");
  }

  function convertToSecureEmbedURL(url) {
    // HTTP를 HTTPS로 변환
    const secureURL = url.replace(/^http:\/\//i, "https://");

    // YouTube URL을 임베드 형식으로 변환
    if (secureURL.includes("youtube.com/watch")) {
      return secureURL.replace("watch?v=", "embed/");
    } else if (secureURL.includes("youtu.be")) {
      return secureURL.replace("youtu.be/", "youtube.com/embed/");
    }

    // 기타 URL은 그냥 반환
    return secureURL;
  }

  function handleVideoHeight(e) {
    setVideoHeight(e.target.videoHeight);
  }

  const videoClass = videoHeight > 900 ? styles.smallVideo : styles.largeVideo;

  if (isYouTubeLink(video)) {
    return (
      <iframe
        src={convertToSecureEmbedURL(video)}
        title="YouTube Video"
        className={videoClass}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  } else if (video.startsWith("https")) {
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

export default VideoRenderer;
