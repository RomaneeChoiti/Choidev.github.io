import React, { useState } from "react";
import styles from "../css/Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Choi Dev의 디지털 작업실에 오신 것을 환영합니다.
        </h1>
        {!isImageLoaded && (
          <div className={styles.skeleton}></div> /* Skeleton loader */
        )}
        <img
          src={require("../assets/images/choi.png")}
          alt="Choi Dev Profile"
          className={styles.profileImage}
          onLoad={handleImageLoad}
          style={{ display: isImageLoaded ? "block" : "none" }}
        />
      </div>
      <p className={styles.content}>
        &nbsp;안녕하세요, Choi Dev 최승원입니다.
        <br />
        이곳은 저의 아카이빙 목적의 블로그이며, 개발과 예술을 함께 추구하며
        경험과 지식을 나누는 공간입니다.
        <br />
        저는 프론트엔드 개발자로 React를 선호하며,
        Next.js에도 관심을 가지고 있습니다.
        예술 분야에서는 p5.js를 활용하여 창작 활동을 하고 있습니다.
        <br />
        <br />
        사용 중에 블로그들을 해당 블로그에 정리하고 있는 중입니다.
        <br />
        <a href="mailto:choidevmail@gmail.com" className={styles.email}>
          choidevmail@gmail.com
        </a>
        <br />
        <a href="https://github.com/RomaneeChoiti" className={styles.link}>
          GitHub
        </a>
        <br />
        <Link to="/blog" className={styles.link}>
          Blog
        </Link>
      </p>
    </div>
  );
}

export default Home;
