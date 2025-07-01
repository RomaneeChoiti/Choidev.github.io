import React, { useState } from "react";
import styles from "../css/Card.module.css";

function Card({ item, onClick }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className={styles.card} onClick={() => onClick(item.link, item.id)}>
      {!isImageLoaded && (
        <div className={styles.skeleton}></div> /* Skeleton loader */
      )}
      <img
        src={item.image}
        alt={item.title}
        className={styles.image}
        onLoad={handleImageLoad}
        style={{ display: isImageLoaded ? "block" : "none" }}
      />
      <div className={styles.info}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        {item.year && <p>{item.year}</p>}
      </div>
    </div>
  );
}

export default Card;
