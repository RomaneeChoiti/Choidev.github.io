const post1Content = `
#### 최적화가 왜 중요한가?

서비스 측면, 로딩 시간이 길수록 서비스 이탈률 증가 (한국: 2초, 미국/유럽: 3초)  
백엔드, 디자이너, PM들도 최적화를 이해해야 합니다.  
페이지 로드가 빠를수록 사용자는 오래 머무르고, 주문 가치(order value)가 높아집니다.

#### 속도를 어떻게 정의할 것인가?

Core Web Vitals (CWV) - 2020, Google에서 발표한 사용자 관점에서 정의된 지표입니다.

- LCP (Largest Contentful Paint): 화면의 중요한 영역이 얼마나 빠르게 표시되는가.
- FID (First Input Delay): 사용자가 입력했을 때 얼마나 빨리 반응하는가.
- CLS (Cumulative Layout Shift): 화면의 시각적 안정성이 얼마나 유지되는가.

#### 속도 측정 도구

- PageSpeed Insights: LCP, FID, CLS 점검.
- Chrome UX Report: 실시간 데이터 기반 성능 점검.
- Search Console: LCP, FID, CLS 통계 제공.
- Lighthouse 및 Web Vitals Extension: 브라우저 기반 실시간 점검.

#### 최적화 방법

1. LCP:
   - HTML 소스에서 이미지를 CSS 대신 HTML에 배치하여 이미지 로드 시간을 단축.
   - 이미지에 \`link rel="preload"\`와 \`fetchpriority="high"\`를 사용해 우선 순위 조정.
   - LCP가 아닌 이미지에는 \`loading="lazy"\` 속성을 추가하여 최적화.

2. CLS:
   - 프로모션 배너와 이미지가 추가될 자리를 미리 확보해 화면 요소가 밀리지 않도록 함.
   - 부적절한 애니메이션을 지양.

3. FID:
   - 긴 JavaScript 태스크를 쪼개어 작은 태스크로 나누어 처리.
   - 불필요한 JS 코드를 줄이고, 크롬 개발 도구로 최적화 확인.
`;

export default post1Content;
