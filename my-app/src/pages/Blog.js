import React from "react";
import styles from "../css/Blog.module.css";
import blogs from "../data/blogs";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";

function Blog() {
  const navigate = useNavigate();

  const handleBlogClick = (link, id) => {
    if (id === "gitblog") {
      navigate("/gitblog");
    } else {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className={styles.container}>
      <p>현재 블로그는 gitblog와 벨로그만 운영 중에 있습니다</p>
      <div className={styles.grid}>
        {blogs.map((blog, index) => (
          <Card key={index} item={blog} onClick={handleBlogClick} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
