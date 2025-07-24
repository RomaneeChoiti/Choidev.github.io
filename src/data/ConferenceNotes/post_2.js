const post_2 = {
  id: "post2",
  title: "07/02 [컨퍼런스] 토스 SLASH23 - WedView와 React Native (1편)",
  date: "2023/07/02",
  tags: ["Web Performance", "React Native", "WedView", "Optimization"],
  content: `

### WedView vs React Native

- **사용자 평균 화면 로딩 시간:**
  - Wed: 3.5초
  - React Native: 0.x초

### React Native가 로딩이 빠른 이유
WedView에서 HTML, JS 다운로드, JS 실행이 모두 필요하지만, React Native에서는 JS만 실행합니다.


#### WedView
SSR Server 비용이 발생합니다.  
toss Wed <-> SSR server <-> API server로 연결되어 있어 높은 비용과 서버 오류 대응, 변동 트래픽 대응이 필요합니다.


#### React Native
toss Wed <-> CDN으로 연결되어 있어 비용이 낮고, 빠른 배포와 롤백이 가능하며, 운영 비용이 거의 없습니다.

#### CDN이란?
Contents Delivery Network의 약자로, 물리적으로 멀리 떨어져 있는 사용자에게 컨텐츠를 빠르게 제공할 수 있는 기술입니다.

#### React Native의 장점
1. 빠른 초기 로딩
2. 짧은 배포 시간
3. 낮은 인프라 운영 비용

#### 서비스별로 배포와 빌드
많은 서비스가 존재하며, 토스의 문화에서 많은 테스트 빌드와 배포가 이루어지기 때문에 여러 서비스로 나누어 배포 및 빌드를 해야 합니다.  
React Native 서비스의 JS 파일 크기는 3MB 정도이며, 100개의 서비스가 존재할 경우 300MB가 소요됩니다. 이로 인해 앱 용량이 매우 커질 수 있는 단점이 있습니다.

#### 앱 용량 문제
- iOS: 150MB 이상 시 데이터로 다운로드 불가
- APK: 100MB 이상 시 데이터로 다운로드 불가

#### 용량 최적화 방법
섬세한 번들러 설정이 필요합니다.
- **Shared:** 모든 서비스가 공유하고 있는 React, React Native 등의 라이브러리가 포함됩니다.
- **Service:** 다른 부분들만 포함됩니다.

---

2편에서 더 자세히 다룹니다...
`};

export default post_2;
