import { useNavigate } from "react-router-dom";
import styles from "../../css/Post.module.css";
import { Excerpt } from "./Excerpt";
import conferencenotes from "../../pages/ConferenceNotes";
import backendnotes from "../../pages/BackendNotes";
import frontendnotes from "../../pages/FrontendNotes";
import hnsskillnotes from "../../pages/HnSskillNotes";
import TableOfContents from "./TableOfContents";

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
      : [];

  const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));

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
          ? "HnS Skill Notes"
          : "Past Notes"}
      </h2>
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
