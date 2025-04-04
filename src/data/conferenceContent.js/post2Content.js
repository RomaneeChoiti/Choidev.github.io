const post2Content = `
  <h3>토스가 wed에서 React Native로 바꿔야만 했던 이유</h3>
  <p>토스는 SLASH23 컨퍼런스에서 wed 플랫폼에서 React Native로 전환해야 했던 이유를 설명했습니다.</p>

  <h3>Wed vs React Native</h3>
  <ul>
    <li><strong>사용자 평균 화면 로딩 시간:</strong></li>
    <ul>
      <li>Wed: 3.5초</li>
      <li>React Native: 0.x초</li>
    </ul>
  </ul>
  
  <h3>React Native가 로딩이 빠른 이유</h3>
  <p>Wed에서는 HTML, JS 다운로드, JS 실행이 모두 필요하지만, React Native에서는 JS만 실행합니다.</p>

  <h3>Wed</h3>
  <p>
    SSR Server 비용이 발생합니다. </br>
    toss Wed <-> SSR server <-> API server로 연결되어 있어 높은 비용과 서버 오류 대응, 변동 트래픽 대응이 필요합니다.
  </p>

  <h3>React Native</h3>
  <p>
    toss Wed <-> CDN으로 연결되어 있어 비용이 낮고, 빠른 배포와 롤백이 가능하며, 운영 비용이 거의 없습니다.
  </p>
  
  <h3>CDN이란?</h3>
  <p>Contents Delivery Network의 약자로, 물리적으로 멀리 떨어져 있는 사용자에게 컨텐츠를 빠르게 제공할 수 있는 기술입니다.</p>

  <h3>React Native의 장점</h3>
  <ol>
    <li>빠른 초기 로딩</li>
    <li>짧은 배포 시간</li>
    <li>낮은 인프라 운영 비용</li>
  </ol>

  <h3>서비스별로 배포와 빌드</h3>
  <p>
    많은 서비스가 존재하며, 토스의 문화에서 많은 테스트 빌드와 배포가 이루어지기 때문에 여러 서비스로 나누어 배포 및 빌드를 해야 합니다.
  </p>
  <p>
    React Native 서비스의 JS 파일 크기는 3MB 정도이며, 100개의 서비스가 존재할 경우 300MB가 소요됩니다. 이로 인해 앱 용량이 매우 커질 수 있는 단점이 있습니다.
  </p>

  <h3>앱 용량 문제</h3>
  <ul>
    <li>iOS: 150MB 이상 시 데이터로 다운로드 불가</li>
    <li>APK: 100MB 이상 시 데이터로 다운로드 불가</li>
  </ul>

  <h3>용량 최적화 방법</h3>
  <p>섬세한 번들러 설정이 필요합니다.</p>
  <ul>
    <li><strong>Shared:</strong> 모든 서비스가 공유하고 있는 React, React Native 등의 라이브러리가 포함됩니다.</li>
    <li><strong>Service:</strong> 다른 부분들만 포함됩니다.</li>
  </ul>
  
  <p>2편에서 더 자세히 다룹니다...</p>
`;

export default post2Content;
