// src/data/blogs.js
import Blogger from "../assets/images/blog/Blogger_icon.png";
import Notion from "../assets/images/blog/Notion-logo.png";
import velog from "../assets/images/blog/velog.png";
import git from "../assets/images/blog/git.png";

const blogs = [
  {
    id: "gitblog",
    title: "2024 gitblog",
    description: "2024 새로운 통합형 블로그",
    image: git,
  },
  {
    id: "notion",
    title: "2023 노션 블로그",
    description: "코드스테이츠 프론트엔드 학습 블로그",
    image: Notion,
    link: "https://fourth-fact-cf9.notion.site/2023-f4455761607f4f9a913ccdc58c30345e?pvs=4",
  },
  {
    id: "blogger",
    title: "2024 GreenWaySeoul블로그",
    description: "GreenWaySeoul 프로젝트용 블로그",
    image: Blogger,
    link: "https://greenwayseoul.blogspot.com/",
  },
  {
    id: "velog",
    title: "2023 벨로그",
    description: "2023 개인 & 프론트엔드 블로그",
    image: velog,
    link: "https://velog.io/@tmd1568/posts",
  },
];

export default blogs;
