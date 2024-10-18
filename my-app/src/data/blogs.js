// src/data/blogs.js
import Blogger from "../assets/images/blog/Blogger_icon.png";
import Notion from "../assets/images/blog/Notion-logo.png";
import velog from "../assets/images/blog/velog.png";
import git from "../assets/images/blog/git.png";

const blogs = [
  {
    id: "notion",
    title: "Notion Blog",
    description: "My Notion space for documenting ideas and tutorials.",
    image: Notion,
    link: "https://www.notion.so/f4455761607f4f9a913ccdc58c30345e",
  },
  {
    id: "blogger",
    title: "Blogger",
    description: "My Blogger site for sharing my development journey.",
    image: Blogger,
    link: "https://greenwayseoul.blogspot.com/",
  },
  {
    id: "velog",
    title: "Velog",
    description: "Velog platform where I post web development articles.",
    image: velog,
    link: "https://velog.io/@tmd1568/posts",
  },
  {
    id: "gitblog",
    title: "gitblog",
    description: "Velog platform where I post web development articles.",
    image: git,
  },
];

export default blogs;
