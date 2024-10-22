import React from "react";
import PostList from "./PostList";
import styles from "../../css/Blog.module.css";

function PostPage({ subtitle, posts, source }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>{subtitle}</h2>
        <PostList posts={posts} itemStyle={styles.postItem} source={source} />
      </div>
    </div>
  );
}

export default PostPage;
