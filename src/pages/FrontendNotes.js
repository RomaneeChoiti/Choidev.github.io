import post_1 from "../data/FrontendNotes/post_1";
import post_2 from "../data/FrontendNotes/post_2";
import { markdownToHtml } from "../utils/markdownToHtml";


const FrontendNotes = [
   {
    id: "post2",
    title: "얼굴 인식 API를 활용한 인터랙티브 애니메이션 프로젝트",
    date: "2024/12/20",
    link: "/gitblog/post2",
    content: markdownToHtml(post_2),
  },
  {
    id: "post1",
    title: "React Router와 GitHub Pages에서 발생하는 라우팅 문제 해결하기",
    date: "2024/10/22",
    link: "/gitblog/post1",
    content: markdownToHtml(post_1),
  },
];

export default FrontendNotes;
