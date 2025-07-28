import styles from "../../css/Post.module.css";
import postDetailStyles from "../../css/PostDetail.module.css";
import calculateReadingTime from "../../utils/calculateReadingTime";
import TagsList from "./TagsList";
// import TableOfContents from "./TableOfContents";

function PostDetail({ post, contentWithIds, headings }) {
  return (
    <div className={postDetailStyles.container} style={{ display: "flex", gap: "1rem" }}>
    <main className={postDetailStyles.mainContent} style={{ flex: "1" }}>
        <h1 className={postDetailStyles.title}>{post.title}</h1>
        <div className={postDetailStyles.postDetailDataMeta}>
            <p>{post.date}</p>
            <p>{calculateReadingTime(post.content)} mins</p>
        </div>
        <TagsList tags={post.tags} /> 
        <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: contentWithIds }}
        />
    </main>
    {/* <aside className={postDetailStyles.toc}>
        <TableOfContents headings={headings} />
    </aside> */}
    </div>
  );
}

export default PostDetail;
