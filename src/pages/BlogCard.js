import styles from "../css/Blog.module.css";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import blogs from "./Blogs";

function Blog() {
  const navigate = useNavigate();

  const handleBlogClick = (link, id) => {
    if (id === "gitblog") {
      navigate("/");
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
