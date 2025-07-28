import PostStyles from "../../css/Post.module.css";



const TagsList = ({ tags }) => {
  return (
    <div className={PostStyles.tags}>
      {Array.isArray(tags) ? (
        <ul className={PostStyles.tagList}>
          {tags.map((tag, index) => (
            <div key={index} className={PostStyles.tagItem}>
              {tag}
            </div>
          ))}
        </ul>
      ) : (
        <p>{tags}</p>
      )}
    </div>
  );
};

export default TagsList;
