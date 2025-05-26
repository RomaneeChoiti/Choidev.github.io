import { markdownToHtml } from "../utils/markdownToHtml";
import blogpost1Content from "./BlogPostContent/blogpost1Content";
import blogpost2Content from "./BlogPostContent/blogpost2Content";

// src/data/posts.js
const gitblog = [
  {
    id: "post2",
    title: "얼굴 인식 API를 활용한 인터랙티브 애니메이션 프로젝트",
    date: "2024/12/20",
    link: "/gitblog/post2",
    content: markdownToHtml(blogpost2Content),
  },
  {
    id: "post1",
    title: "React Router와 GitHub Pages에서 발생하는 라우팅 문제 해결하기",
    date: "2024/10/22",
    link: "/gitblog/post1",
    content: markdownToHtml(blogpost1Content),
  },
];

export default gitblog;
