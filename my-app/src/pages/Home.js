// src/pages/Home.js
import React from "react";
import styles from "../css/Home.module.css"; // CSS 모듈 가져오기

function Home() {
  return (
    <div>
      <h1 className={styles.title}>
        Choi Dev의 디지털 작업실에 오신 것을 환영합니다.
      </h1>
      <p className={styles.content}>
        &nbsp;안녕하세요, 저는 Choi Dev입니다. 이곳은 저의 개인 포트폴리오이자
        개발자 블로그로, 제가 웹 개발자로서 경험하고 배운 것들을 여러분과 함께
        나누는 공간입니다. 저는 프론트엔드개발자로서, 다양한 프로젝트를 통해
        쌓아온 기술과 노하우를 이 사이트를 통해 공유하고 있습니다. <br />
        <br />
        &nbsp;이 블로그에서는 최신 웹 기술, 자바스크립트, 리액트(React), 그리고
        백엔드 프레임워크에 이르기까지 실전 프로젝트에서 얻은 인사이트를
        다룹니다. 또한, 코드 최적화, 성능 향상 팁, 그리고 버그를 해결하는
        과정에서 배우게 된 유용한 기술들을 쉽게 이해할 수 있도록 설명하고자
        합니다. <br />
        <br />
        &nbsp;제 포트폴리오 섹션에서는 지금까지 진행한 다양한 프로젝트들을
        만나보실 수 있습니다. 각 프로젝트는 제가 어떤 기술과 도구를 사용했는지,
        그리고 구현 과정에서 직면했던 문제들을 어떻게 해결했는지를 자세히 다루고
        있습니다. 이를 통해 다른 개발자분들께 실질적인 도움이 될 수 있는 사례를
        제시하고, 함께 성장할 수 있는 기회를 만들고자 합니다.
        <br />
        <br /> &nbsp;뿐만 아니라, 이 블로그에서는 최신 개발 트렌드와 개인적인
        성장 이야기도 함께 다룹니다. 개발자로서 겪는 고민, 학습 방법, 생산성을
        높이는 팁 등도 함께 공유하며, 개발자 커뮤니티와의 소통을 추구합니다.
        저와 같은 길을 걷는 다른 개발자 분들과 지식과 경험을 나누고, 서로 배우며
        성장하는 것이 이 블로그의 목표입니다. <br />
        <br />
        &nbsp;Choi Dev의 블로그에 오신 여러분을 환영합니다. 앞으로도 꾸준히
        유익한 정보를 제공하며, 여러분의 개발 여정에 도움이 될 수 있는 콘텐츠를
        만들어 나가겠습니다. 저의 개발 이야기를 통해 새로운 아이디어와 영감을
        얻어가시길 바랍니다.
      </p>
    </div>
  );
}

export default Home;
