import styles from "../css/Home.module.css";
import SEO from "../components/SEO";

function Home() {


  return (
    <>
      <SEO
        title="STUDIO CHOI"
        description="최승원의 스튜디오 및 예술 아카이빙"
        image={require('../assets/images/choi.png')}
        keywords={'STUDIO CHOI,portfolio,blog,frontend,art'}
        authors={['최승원']}
        techs={['React','p5.js']}
        url={window.location.href}
      />
  <main className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.title}>
        STUDIO CHOI SEUNG-WON
      </h1>
    </header>
      <article className={styles.content}>
        <p>
          나의 예술은 관계를 단순히 ‘연결’로서가 아니라, 서로의 영향이 만들어내는 움직임으로 이해한다.
        </p>
        <p>
          뿌리의 얽힘, 별자리의 선, 공전자전의 리듬, 파도의 순환은 모두 관계의 다양한 차원을 드러내는 시각적 은유이다.
        </p>
        <p>
          이 작업들은 존재가 서로를 통해서만 존재한다는 인식 즉, “관계로서의 존재(being-in-relation)”를 탐구한다.
        </p>
        <address className={styles.contact}>
            <a href="mailto:choidevmail@gmail.com" className={styles.email}>
              choidevmail@gmail.com
            </a>
            <a href="https://github.com/RomaneeChoiti" className={styles.link}>
              GitHub : github.com/RomaneeChoiti
            </a>
          </address>
        </article>
    </main>
    </>
  );
}

export default Home;
