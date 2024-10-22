import React from "react";
import Excerpt from "./Excerpt";
import styles from "../../css/Post.module.css";

function PostItem({ post, itemStyle, source }) {
  const linkPrefix = source === "gitblog" ? "/gitblog" : "/ConferenceNotes";
  const link = `${linkPrefix}/${post.id}`;

  return (
    <li className={`${styles.postItem} ${itemStyle}`}>
      <a href={link}>{post.title}</a>
      <p className={styles.postDate}>{post.date}</p>
      <Excerpt content={post.content} length={100} />
      <a href={link} className={styles.readMore}>
        Read More
      </a>
    </li>
  );
}

export default PostItem;
