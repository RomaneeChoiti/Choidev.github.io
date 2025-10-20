import SEO from '../components/SEO';
import styles from '../css/Home.module.css';

function Bio() {
  return (
    <>
      <SEO
        title="Choi Seungwon — Bio"
        description="STUDIO CHOI의 작가 소개 페이지 — 최승원(Choi Seungwon)의 약력과 연락처"
        image={require('../assets/images/choi.png')}
        keywords={['Choi Dev','bio','artist','media-art']}
        authors={['최승원']}
        techs={['p5.js','React']}
        url={typeof window !== 'undefined' ? window.location.href : ''}
      />
      <main className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>BIOGRAPHY</h1>
        </header>
        <article className={styles.content}>
          <p>
            최승원(Choi Seung-won, 1997년생)은 미디어 아트와 인터랙티브 디자인을 기반으로, 관계·생성·순환의 개념을 탐구하는 작가이다.<br />
            그의 작업은 디지털 환경 속에서 인간과 기술, 데이터 간의 상호작용이 만들어내는 유기적 연결성과 흐름을 시각화하는 데 초점을 맞춘다.<br />
            <br />
            주요 작업은 웹 기반 인터랙션과 패턴 생성 시스템을 중심으로 전개되며, 관객의 참여나 알고리즘적 변화를 통해 작품이 지속적으로 변형·재생산되는 과정을 탐구한다.<br />
            <br />
            최승원의 작품은 디지털 매체를 통해 존재와 관계의 새로운 형태를 실험하는 시도로 평가받고 있다.          </p>
        </article>
      </main>
    </>
  );
}

export default Bio;
