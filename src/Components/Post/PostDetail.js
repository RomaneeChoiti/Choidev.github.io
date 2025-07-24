import styles from "../../css/Post.module.css";
import postDetailStyles from "../../css/PostDetail.module.css";
import calculateReadingTime from "../../utils/calculateReadingTime";
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
        <div className={postDetailStyles.tags}>
            {post.tags && Array.isArray(post.tags) ? (
            <ul className={postDetailStyles.tagList}>
                {post.tags.map((tag, index) => (
                <l key={index} className={postDetailStyles.tagItem}>
                    {tag}
                </l>
                ))}
            </ul>
            ) : (<p>{post.tags}</p>)}
        </div>
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
