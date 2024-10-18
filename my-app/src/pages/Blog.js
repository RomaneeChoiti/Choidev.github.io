// src/pages/Blog.js
import React from "react";
import styles from "../css/Blog.module.css";
import blogs from "../data/blogs";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";

function Blog() {
  const navigate = useNavigate();

  const handleBlogClick = (link, id) => {
    // GitBlog일 경우 라우터를 통해 이동, 그렇지 않으면 새 창 열기
    if (id === "gitblog") {
      navigate("/gitblog");
    } else {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {blogs.map((blog, index) => (
          <Card key={index} item={blog} onClick={handleBlogClick} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
