// src/components/Card.js
import React from "react";
import styles from "../css/Card.module.css";

function Card({ item, onClick }) {
  return (
    <div className={styles.card} onClick={() => onClick(item.link, item.id)}>
      <img src={item.image} alt={item.title} className={styles.image} />
      <div className={styles.info}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        {item.year && <p>{item.year}</p>}
      </div>
    </div>
  );
}

export default Card;
