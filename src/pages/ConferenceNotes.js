import { markdownToHtml } from "../utils/markdownToHtml";
import post1Content from "../data/conferenceContent/post1Content";
import post2Content from "../data/conferenceContent/post2Content";
import post3Content from "../data/conferenceContent/post3Content";
import post4Content from "../data/conferenceContent/post4Content";

const conferencenotes = [
  {
    id: "post4",
    title:
      "선물하기 프론트엔드 성능 개선기 / if(kakaoAI)2024, 기술 컨퍼런스(1편)",
    date: "2024/10/11",
    link: "/conferencenotes/post3",
    content: markdownToHtml(post4Content),
  },
  {
    id: "post3",
    title:
      "07/08 [컨퍼런스] 토스 SLASH23 - toss가 wed에서 React Native로 바꿔야만 했던 이유 (2편)",
    date: "2023/07/08",
    link: "/conferencenotes/post3",
    content: markdownToHtml(post3Content),
  },
  {
    id: "post2",
    title:
      "07/02 [컨퍼런스] 토스 SLASH23 - toss가 wed에서 React Native로 바꿔야만 했던 이유 (1편)",
    date: "2023/07/02",
    link: "/conferencenotes/post2",
    content: markdownToHtml(post2Content),
  },
  {
    id: "post1",
    title:
      "06/24 [세미나] - DEVOCEAN, 29회차 Tech 세미나 “웹 프론트엔드 성능 최적화 방법 및 적용 사례”",
    date: "2023/06/24",
    link: "/conferencenotes/post1",
    content: markdownToHtml(post1Content),
  },
];

export default conferencenotes;
