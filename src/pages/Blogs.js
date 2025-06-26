// src/data/blogs.js
import Blogger from "../assets/images/blog/Blogger_icon.png";
import Notion from "../assets/images/blog/Notion-logo.png";
import velog from "../assets/images/blog/velog.png";
import git from "../assets/images/blog/git.png";

const blogs = [
  {
    id: "gitblog",
    title: "gitblog",
    description: "통합 블로그",
    image: git,
  },
  {
    id: "velog",
    title: "벨로그",
    description: "2023, 2025 벨로그",
    image: velog,
    link: "https://velog.io/@tmd1568/posts",
  },
  {
    id: "blogger",
    title: "GreenWaySeoul",
    description: "GreenWaySeoul 운영 블로그",
    image: Blogger,
    link: "https://greenwayseoul.blogspot.com/",
  },
  {
    id: "notion",
    title: "2025 노트",
    description: "프론트엔드 노트",
    image: Notion,
    link: "https://fourth-fact-cf9.notion.site/2024-2025-16ced617df7280bbbfd4c2dd9bd121f5?pvs=4",
  }, {
    id: "notion",
    title: "2023 노트",
    description: "프론트엔드 노트",
    image: Notion,
    link: "https://fourth-fact-cf9.notion.site/2023-f4455761607f4f9a913ccdc58c30345e?pvs=4",
  },
];

export default blogs;
