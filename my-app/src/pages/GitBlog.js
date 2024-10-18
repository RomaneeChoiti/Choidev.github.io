// src/pages/GitBlog.js
import React from "react";
import styles from "../css/GitBlog.module.css"; // CSS 모듈 가져오기
import posts from "../data/posts";

function GitBlog() {
  const getExcerpt = (content, length = 100) => {
    if (content.length > length) {
      return content.substring(0, length) + "...";
    }
    return content;
  };

  return (
    <div className={styles.container}>
      <h1>GitBlog</h1>
      <div className={styles.content}>
        <h2>Recent Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <a href={post.link}>{post.title}</a>
              <p className={styles.postContent}>{post.date}</p>
              <p>{getExcerpt(post.content)}</p>
              <a href={post.link} className={styles.readMore}>
                Read More
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GitBlog;
