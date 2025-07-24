import { useNavigate } from "react-router-dom";
import styles from "../../css/Post.module.css";
import { Excerpt } from "./Excerpt";
import conferencenotes from "../../pages/ConferenceNotes";
import backendnotes from "../../pages/BackendNotes";
import frontendnotes from "../../pages/FrontendNotes";
import hnsskillnotes from "../../pages/HnSskillNotes";
import TableOfContents from "./TableOfContents";
import ComedyNotes from "../../pages/ComedyNotes";
import DevOpsNotes from "../../pages/DevOpsNotes";
import calculateReadingTime from "../../utils/calculateReadingTime";
import { isRecentPost } from "../../utils/isRecentPost";

function PostPage({ type, postId }) {
  const navigate = useNavigate();

  const data =
    type === "conferencenotes"
      ? conferencenotes
      : type === "backendnotes"
      ? backendnotes
      : type === "frontendnotes"
      ? frontendnotes
      : type === "hnsskillnotes"
      ? hnsskillnotes
      : type === "devopsnotes"
      ? DevOpsNotes
      : type === "comedynotes"
      ? ComedyNotes
      : [];

  // Ensure data is always an array
  const validData = Array.isArray(data) ? data : [];

  const sortedData = validData.sort((a, b) => new Date(b.date) - new Date(a.date));

  const post = postId ? sortedData.find((p) => p.id === postId) : null;

  if (postId && !post) {
    return <p>Post not found.</p>;
  }

  const handlePostClick = (id) => {
    navigate(`/${type}/${id}`, { replace: false });
  };

  const extractHeadings = (content) => {
    const headingRegex = /<h[1-6][^>]*>(.*?)<\/h[1-6]>/g;
    const headings = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      headings.push({ id: `heading-${headings.length}`, text: match[1].trim() });
    }

    return headings;
  };

  if (post) {
    const headings = extractHeadings(post.content);

    const contentWithIds = post.content.replace(
      /<h([1-6])([^>]*)>(.*?)<\/h\1>/g,
      (match, level, attrs, text, index) =>
        `<h${level} id="heading-${index}" data-heading>${text}</h${level}>`
    );

    return (
      <div className={styles.container} style={{ display: "flex", gap: "1rem" }}>
        <main className={styles.mainContent} style={{ flex: "1" }}>
          <h1>{post.title}</h1>
          <p className={styles.date}>{post.date}</p>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: contentWithIds }}
          />
        </main>
        <TableOfContents headings={headings} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>
        {type === "conferencenotes"
          ? "Conference Notes"
          : type === "backendnotes"
          ? "Backend Notes"
          : type === "frontendnotes"
          ? "Frontend Notes"
          : type === "hnsskillnotes"
          ? "Hard and Soft Skill Notes"
          : type === "devopsnotes"
          ? "DevOps Notes"
          : type === "comedynotes"
          ? "Comedy Notes"
          : "Past Notes"
        }
      </h2>
      <ul className={styles.postList}>
        {validData.map((post) => (
          <li
            key={post.id}
            className={styles.postItem}
            onClick={() => handlePostClick(post.id)}
          >
            <div className={styles.postInfo}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              {isRecentPost(post.date) && <p className={styles.recent}>new</p>}
            </div>
            <div className={styles.postMeta}>
              <p>{post.date}</p>
              <p>{calculateReadingTime(post.content)} mins</p>
            </div>
            <Excerpt content={post.content} length={100} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostPage;
