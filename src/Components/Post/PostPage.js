import { useNavigate } from "react-router-dom";
import PostStyles from "../../css/Post.module.css";
import conferencenotes from "../../pages/ConferenceNotes";
import backendnotes from "../../pages/BackendNotes";
import frontendnotes from "../../pages/FrontendNotes";
import hnsskillnotes from "../../pages/HnSskillNotes";
import ComedyNotes from "../../pages/ComedyNotes";
import DevOpsNotes from "../../pages/DevOpsNotes";
import calculateReadingTime from "../../utils/calculateReadingTime";
import { isRecentPost } from "../../utils/isRecentPost";
import { extractHeadings } from "../../utils/extractHeading";
import PostDetail from "./PostDetail";
import TagsList from "./TagsList";


const typeToTitleMap = {
  conferencenotes: "Conference Notes",
  backendnotes: "Backend Notes",
  frontendnotes: "Frontend Notes",
  hnsskillnotes: "Hard and Soft Skill Notes",
  devopsnotes: "DevOps Notes",
  comedynotes: "Comedy Notes",
};

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

  const validData = Array.isArray(data) ? data : [];

  const sortedData = validData.sort((a, b) => new Date(b.date) - new Date(a.date));

  const post = postId ? sortedData.find((p) => p.id === postId) : null;

  if (postId && !post) {
    return <p>Post not found.</p>;
  }

  const handlePostClick = (id) => {
    navigate(`/${type}/${id}`, { replace: false });
  };

  if (post) {
    const headings = extractHeadings(post.content);

    const contentWithIds = post.content.replace(
      /<h([1-6])([^>]*)>(.*?)<\/h\1>/g,
      (match, level, attrs, text, index) => {
        const updatedHeading = `<h${level} id="heading-${index}" data-heading>${text}</h${level}>`;
        console.log("Updated heading:", updatedHeading); // Debugging log
        return updatedHeading;
      }
    );

    return <PostDetail post={post} contentWithIds={contentWithIds} headings={headings} />;
  }

  return (
    <div className={PostStyles.container}>
      <h2 className={PostStyles.pageTitle}>
        {typeToTitleMap[type] || "Past Notes"}
      </h2>
      <ul className={PostStyles.postList}>
        {validData.map((post) => (
          <li
            key={post.id}
            className={PostStyles.postItem}
            onClick={() => handlePostClick(post.id)}
          >
            <div className={PostStyles.postInfo}>
              <h2 className={PostStyles.postTitle}>{post.title}</h2>
              {isRecentPost(post.date) && <p className={PostStyles.recent}>new</p>}
            </div>
            <div className={PostStyles.postMeta}>
              <p>{post.date}</p>
              <p>{calculateReadingTime(post.content)} mins</p>
              <TagsList tags={post.tags} /> 
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostPage;
