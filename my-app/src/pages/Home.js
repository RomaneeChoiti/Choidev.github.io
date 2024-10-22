import React from "react";
import styles from "../css/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Choi Dev의 디지털 작업실에 오신 것을 환영합니다.
        </h1>
        <img
          src={require("../assets/images/choi.png")}
          alt="Choi Dev Profile"
          className={styles.profileImage}
        />
      </div>
      <p className={styles.content}>
        &nbsp;안녕하세요, Choi Dev 최승원입니다.
        <br />
        이곳은 저의 포트폴리오 겸 개발자 블로그로, 예술과 개발을 함께 추구하며
        경험과 지식을 나누는 공간입니다. 저는 프론트엔드 개발자로서
        자바스크립트(JS)와 React를 선호하며, 예술 분야에서는 p5.js를 활용하여
        창작 활동을 하고 있습니다. 끈기와 성실함을 바탕으로 포기하지 않는 성격을
        지녔으며, 지혜로운 사람이 되기 위해 문제를 입체적으로 분석하고 해결책을
        찾아내는 것을 즐깁니다.
        <br />
        <br />
        &nbsp;Works 섹션에서는 진행한 프로젝트와 사용 기술들을 소개하며, Blog
        섹션에서는 문제 해결 방법과 개발 사례를 공유합니다. Skills 섹션에서는
        프로젝트에 사용된 스킬들과 자주 사용하는 기술들을 개인적인 지표로
        표현하고, Conference Notes 섹션에서는 컨퍼런스와 세미나에서 얻은 지식을
        바탕으로 메모하고 정리한 내용을 제공합니다.
        <br />
        <br />
        <a href="mailto:choidevmail@gmail.com" className={styles.email}>
          choidevmail@gmail.com
        </a>
        <br />
        <a href="https://github.com/RomaneeChoiti" className={styles.link}>
          GitHub
        </a>{" "}
        |{" "}
        <a href="/blog" className={styles.link}>
          Blog
        </a>
      </p>
    </div>
  );
}

export default Home;
