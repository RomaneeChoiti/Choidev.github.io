const blogpost2Content = `
  <p>
    이 프로젝트는 FaceAPI를 활용해 얼굴의 움직임을 추적하고, 이를 기반으로 애니메이션 효과를 생성하는 재미있는 시각적 경험을 제공합니다. 
    사용자의 얼굴 움직임에 따라 <strong>물방울 형태의 객체(WaterBlob)</strong>가 동적으로 반응하며, 반지름과 색상이 변화합니다.
  </p>
  
  <h2>1. 프로젝트 개요</h2>
  <ul>
    <li><strong>목적:</strong> 얼굴 움직임에 반응하는 인터랙티브 애니메이션 구현.</li>
    <li><strong>기술 스택:</strong></li>
    <ul>
      <li>p5.js: 애니메이션 및 시각적 표현.</li>
      <li>FaceAPI: 얼굴의 특징을 실시간으로 추적.</li>
      <li>JavaScript: 로직 및 데이터 처리.</li>
    </ul>
  </ul>
  
  <h2>2. FaceAPI란 무엇인가?</h2>
  <p>
    FaceAPI는 JavaScript를 기반으로 한 얼굴 인식 라이브러리로, 사용자의 얼굴을 추적하고 얼굴의 랜드마크(눈, 코, 입, 윤곽선 등)를 실시간으로 제공합니다. 
    이를 통해 사용자의 표정, 위치, 움직임 등을 분석할 수 있습니다.
  </p>
  
  <h2>3. FaceAPI 초기화</h2>
  <p><strong>코드:</strong></p>
  <pre>
    <code>
initializeFaceAPI(() => {
  console.log("FaceAPI 모델 로드 완료");
  detectFaces();
});
    </code>
  </pre>
  <p><strong>설명:</strong></p>
  <ul>
    <li><code>initializeFaceAPI(callback):</code> FaceAPI 모델을 로드하고 준비가 완료되면 콜백 함수(callback)을 호출합니다.</li>
    <li><code>detectFaces():</code> 현재 비디오 스트림에서 얼굴 데이터를 감지합니다.</li>
  </ul>
  
  <h2>4. 얼굴 랜드마크 데이터 활용</h2>
  <p>FaceAPI가 얼굴 랜드마크 데이터를 제공하면 이를 기반으로 WaterBlob의 상태를 업데이트합니다.</p>
  <p><strong>주요 랜드마크:</strong></p>
  <pre>
    <code>
const faceOutline = landmarks.slice(0, 17); // 얼굴 윤곽
const mouth = landmarks.slice(48, 68);      // 입
const leftEye = landmarks.slice(36, 42);    // 왼쪽 눈
const rightEye = landmarks.slice(42, 48);   // 오른쪽 눈
const nose = landmarks.slice(27, 36);       // 코
    </code>
  </pre>
  <p><strong>활용:</strong></p>
  <ul>
    <li>얼굴 윤곽: 반지름 계산에 사용.</li>
    <li>움직임 크기: 현재 랜드마크와 이전 랜드마크를 비교하여 움직임 크기를 계산.</li>
  </ul>
  
  <h2>5. 움직임 감지</h2>
  <p>사용자의 얼굴 움직임 크기를 측정하고 이를 바탕으로 색상과 반지름을 변경합니다.</p>
  <p><strong>움직임 크기 계산:</strong></p>
  <pre>
    <code>
movementMagnitude = 0;
for (let i = 0; i < landmarks.length; i++) {
  let dx = landmarks[i].x - previousLandmarks[i].x;
  let dy = landmarks[i].y - previousLandmarks[i].y;
  movementMagnitude += sqrt(dx * dx + dy * dy);
}
movementMagnitude /= landmarks.length; // 평균 변화량
    </code>
  </pre>
  <p><strong>색상 매핑:</strong></p>
  <pre>
    <code>
const mappedRed = map(movementMagnitude, 0, 10, 50, 255, true);
const mappedGreen = map(movementMagnitude, 0, 10, 150, 50, true);
const mappedBlue = map(movementMagnitude, 0, 10, 255, 100, true);
targetColor = color(mappedRed, mappedGreen, mappedBlue);
    </code>
  </pre>
  
  <h2>6. WaterBlob 객체</h2>
  <p>얼굴 데이터의 변화량에 따라 물방울의 크기와 색상을 부드럽게 변화시킵니다.</p>
  <p><strong>주요 기능:</strong></p>
  <ul>
    <li><strong>부드러운 반경 변경:</strong></li>
    <pre>
      <code>
this.radius = lerp(this.radius, targetRadius, 0.1);
      </code>
    </pre>
    <li><strong>색상 변화:</strong></li>
    <pre>
      <code>
currentColor = lerpColor(currentColor, targetColor, 0.1);
      </code>
    </pre>
    <li><strong>노이즈 기반 애니메이션:</strong></li>
    <pre>
      <code>
let noiseValue = noise(
  cos(angle) + this.noiseOffset,
  sin(angle) + this.noiseOffset
);
let r = this.radius + map(noiseValue, 0, 1, -15, 15);
      </code>
    </pre>
  </ul>
  
  <h2>7. 결론</h2>
  <p>
    이 프로젝트는 FaceAPI의 강력함을 활용하여 얼굴 움직임 데이터를 시각적으로 표현한 사례입니다. 
    FaceAPI와 p5.js의 조합은 다음과 같은 장점을 제공합니다.
  </p>
  <ul>
    <li>실시간 데이터 처리: 얼굴 데이터를 빠르게 처리하고 즉각적인 반응 제공.</li>
    <li>직관적인 시각화: 사용자의 움직임에 따라 동적으로 변하는 애니메이션.</li>
  </ul>
  
  <h2>8. 추가 개선 아이디어</h2>
  <ul>
    <li>추가 랜드마크 활용: 눈 깜박임, 입 움직임 등을 감지하여 더 다양한 반응 구현.</li>
    <li>다중 사용자 지원: 여러 얼굴 데이터를 동시에 처리하여 다중 사용자 환경 지원.</li>
    <li>3D 효과: Three.js를 활용해 물방울을 3D 형상으로 표현.</li>
  </ul>
  <p>
    이 프로젝트는 기술적인 재미와 더불어 얼굴 인식 데이터가 다양한 방식으로 활용될 수 있음을 보여줍니다. 
  </p>

  <p>
    GitHub 저장소: <a href="https://github.com/RomaneeChoiti/shattered-visage" target="_blank">shattered-visage 프로젝트 보기</a>
  </p>
`;

export default blogpost2Content;
