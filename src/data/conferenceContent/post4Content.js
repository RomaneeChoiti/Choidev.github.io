const post4Content = `
<article>
    <h1>웹 성능 최적화 기술 정리</h1>

    <section>
      <h2>1. 트리 셰이킹</h2>
      <p>사용되지 않는 코드(데드 코드)를 제거하여 번들 크기를 줄이는 기술입니다.</p>
    </section>

    <section>
      <h2>2. 페이지 단위 지연 로딩 기법 활용</h2>
      <p>
        <strong>지연 로딩(Lazy Loading)이란?</strong> 사용자가 실제로 콘텐츠가 필요할 때만 해당 자원을 로딩하는 방식입니다.
      </p>
    </section>

    <section>
      <h2>3. 번들러 최적화</h2>
      <ul>
        <li>난독화</li>
        <li>압축</li>
        <li>데드 코드 제거</li>
      </ul>
    </section>

    <section>
      <h2>4. CDN(Content Delivery Network) 활용</h2>
      <p>
        여러 지역의 서버에 웹 콘텐츠를 복제하여, 사용자와 가장 가까운 서버에서 콘텐츠를 제공함으로써 로딩 속도를 향상시킵니다.
      </p>
    </section>

    <section>
      <h2>5. 가벼운 라이브러리 사용</h2>
      <ul>
        <li>이미지 최적화</li>
        <li>가상 스크롤 기법: 모든 데이터를 한 번에 렌더링하지 않고, 화면에 보이는 데이터만 렌더링하여 성능 최적화</li>
      </ul>
    </section>

    <section>
      <h2>6. 인터섹션 옵저버 API</h2>
      <p>
        사용자가 특정 요소에 도달했는지 감지하여, 필요한 콘텐츠만 로드하는 방식으로 성능 개선에 도움을 줍니다.
      </p>
    </section>
  </article>
  `;

export default post4Content;
