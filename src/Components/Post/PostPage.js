import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../css/Post.module.css";
import gitblog from "../../data/blogPosts";
import { Excerpt } from "./Excerpt";
import conferencenotes from "../../data/conferenceNotes";

function PostPage({ type, postId }) {
  const navigate = useNavigate();

  const data =
    type === "gitblog"
      ? gitblog
      : type === "conferencenotes"
      ? conferencenotes
      : [];

  const post = postId ? data.find((p) => p.id === postId) : null;

  if (postId && !post) {
    return <p>Post not found.</p>;
  }

  const handlePostClick = (id) => {
    navigate(`/${type}/${id}`, { replace: false });
  };

  if (post) {
    return (
      <div className={styles.container}>
        <h1>{post.title}</h1>
        <p className={styles.date}>{post.date}</p>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>{type === "gitblog" ? "Recent Posts" : "Past Conferences"}</h2>
      <ul className={styles.postList}>
        {data.map((post) => (
          <li
            key={post.id}
            className={styles.postItem}
            onClick={() => handlePostClick(post.id)}
          >
            <h2>{post.title}</h2>
            <p className={styles.postDate}>{post.date}</p>
            <Excerpt content={post.content} length={100} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostPage;
