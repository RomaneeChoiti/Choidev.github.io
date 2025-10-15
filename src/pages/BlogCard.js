import styles from "../css/Blog.module.css";
import SEO from "../components/SEO";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import blogs from "../data/Blogs/Blogs.js";

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
    <>
      <SEO
        title="Choi Dev — Blog"
        description="Choi Dev의 기술 블로그 아카이브"
        keywords={'Choi Dev,blog,development'}
        authors={['최승원']}
        url={window.location.href}
      />
      <div className={styles.container}>
      <p>현재 블로그는 gitblog와 벨로그만 운영 중에 있습니다</p>
      <div className={styles.grid}>
        {blogs.map((blog, index) => (
          <Card key={index} item={blog} onClick={handleBlogClick} />
        ))}
      </div>
      </div>
    </>
  );
}

export default Blog;
