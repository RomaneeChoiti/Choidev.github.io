// src/pages/GitBlogPost.js
import React from "react";
import { useParams } from "react-router-dom";
import posts from "../data/posts"; // 포스트 데이터 가져오기
import styles from "../css/GitBlog.module.css";

function GitBlogPost() {
  const { postId } = useParams();
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div className={styles.container}>
      <h1>{post.title}</h1>
      <p className={styles.date}>{post.date}</p>
      <div className={styles.content}>
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default GitBlogPost;
