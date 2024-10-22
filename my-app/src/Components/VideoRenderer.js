// src/components/VideoRenderer.js
import React, { useState } from "react";
import styles from "../css/ProjectDetail.module.css";

function VideoRenderer({ video }) {
  const [videoHeight, setVideoHeight] = useState(0);

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

  const videoClass = videoHeight > 900 ? styles.smallVideo : styles.largeVideo;

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
