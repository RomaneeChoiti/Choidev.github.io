import React from "react";
import PostItem from "./PostItem";
import styles from "../../css/Post.module.css";

function PostList({ posts, itemStyle, source }) {
  return (
    <ul className={styles.postList}>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          itemStyle={itemStyle}
          source={source}
        />
      ))}
    </ul>
  );
}

export default PostList;
