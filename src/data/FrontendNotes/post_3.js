import bridgingHeaderDiagram from "../../assets/images/postImgs/9geAn.png";

const post_3 = {
  id: "post3",
  title: "Bridging-Header란?",
  date: "2025/06/28",
  content: `
<img src="${bridgingHeaderDiagram}" alt="Bridging Header Diagram" style="width: 100%; max-width: 600px; height: auto;" />

예시 이미지
### Bridging-Header란?
**Swift 코드에서 Objective-C 헤더 파일을 불러와 사용할 수 있도록 해주는 다리(bridge)** 역할을 하는 것

### 쓰는 이유는?
RN 버전 0.71.xx 이상부터는 
AppDelegate.mm -> AppDelegate.swift로 바뀌었다.
이유는 iOS 생태계 때문이라고 한다.

문제는 많은 라이브러리들이 Objective-C 언어 기반으로 설명한다는 것이다.

그렇다면 RN을 0.71 이하로 시작해서 0.71 이상으로 업데이트하는 것이 좋겠지만,
나는 해당 프로젝트를 최신 버전으로 진행했다.

그래서 어쩔 수 없이 AppDelegate.swift 기반으로 작업해야 하며,
Objective-C 언어 기반의 라이브러리를 사용해야 한다.

### 설정 방법

#### 1. Bridging-Header 파일 추가
- \`ios/exProjectName/\` 폴더 루트에 \`AppDelegate.swift\`가 있을 것이다.
- \`AppDelegate.swift\`와 같은 루트에 \`exProjectName-Bridging-Header.h\` 파일을 추가한다.

#### 2. Bridging-Header 파일 내용
\`\`\`objective-c
#ifndef exProjectName_Bridging_Header_h
#define exProjectName_Bridging_Header_h
#import "RNSplashScreen.h"
#endif /* exProjectName_Bridging_Header_h */
\`\`\`

#### 3. AppDelegate.swift 파일 수정
\`\`\`swift
import Foundation

// SplashScreen 표시 (브리징 헤더에서 RNSplashScreen 사용)
self.initialProps = [:]
super.application(application, didFinishLaunchingWithOptions: launchOptions)
RNSplashScreen.show()
return true
\`\`\`

### 참고 사항
- RNSplashScreen 라이브러리 공식 문서에서 \`AppDelegate.mm\` 설정을 참고하여 작성해야 한다.
`};

export default post_3;