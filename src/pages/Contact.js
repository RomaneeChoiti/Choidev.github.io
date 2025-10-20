import React from 'react';
import SEO from '../components/SEO';
import styles from '../css/Home.module.css';

function Contact() {
  return (
    <>
      <SEO
        title="STUDIO CHOI — Contact"
        description="Contact STUDIO CHOI — 문의 및 협업 요청"
        image={require('../assets/images/choi.png')}
        keywords={['STUDIO CHOI','contact','email']}
        authors={['최승원']}
        techs={['React']}
        url={typeof window !== 'undefined' ? window.location.href : ''}
      />
      <main className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Contact</h1>
        </header>
        <article className={styles.content}>
          <p>
            작업, 전시, 콜라보레이션 문의는 아래 연락처로 편하게 연락 주세요.
          </p>
          <address className={styles.contact}>
            <a href="mailto:choidevmail@gmail.com" className={styles.email}>choidevmail@gmail.com</a>
            <p>서울 기반 — 온라인, 화상 미팅 가능</p>
          </address>
        </article>
      </main>
    </>
  );
}

export default Contact;
