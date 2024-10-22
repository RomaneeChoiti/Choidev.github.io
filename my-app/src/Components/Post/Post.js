import React from "react";
import { useLocation, useParams } from "react-router-dom";
import posts from "../../data/posts";
import conferenceNotes from "../../data/conferenceNotes";
import styles from "../../css/Post.module.css";

function Post() {
  const { postId } = useParams();
  const location = useLocation();

  const isGitBlog = location.pathname.includes("gitblog");
  const data = isGitBlog ? posts : conferenceNotes;

  const post = Array.isArray(data) ? data.find((p) => p.id === postId) : null;

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div className={styles.container}>
      <h1>{post.title}</h1>
      <p className={styles.date}>{post.date}</p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </div>
  );
}

export default Post;
