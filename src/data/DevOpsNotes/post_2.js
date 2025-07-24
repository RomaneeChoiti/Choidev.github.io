const post_2 = {
    id: "post2",
    title: "React Native iOS 환경 변수 (.env.prod) 적용 및 Xcode 빌드 설정",
    date: "2025/07/24",
    content: `
## 1. 개요
React Native로 개발된 iOS 애플리케이션에서 환경 변수 설정을 위해 react-native-config 라이브러리를 사용한다. 이 라이브러리는 .env 파일에 정의된 키-값 쌍을 iOS, Android 네이티브와 JavaScript 코드에서 접근 가능하도록 해준다. iOS 빌드에서 특정 환경(.env.prod 등)의 환경 변수를 사용하기 위해 react-native-config를 설정하고, 빌드 중에 해당 값을 Xcode에서 읽어 앱에 반영하고자 한다.

## 2. 문제 발생 배경
iOS 앱의 Production 환경 변수를 .env.prod 파일에 정의하고 이를 빌드에 반영하는 과정에서 Xcode 빌드 오류가 발생했다. react-native-config 설정 후 빌드 시 GeneratedInfoPlistDotEnv.h 관련 오류가 나타났는데, 주요 증상은 다음과 같다

- 빌드 로그에 unable to open dependencies file ... DerivedSources/.d 오류 발생 (DerivedSources 디렉터리의 .d 파일을 열 수 없다는 에러).
- GeneratedInfoPlistDotEnv.h 파일을 찾지 못하거나 중복 생성하려는 에러.
- "missing DerivedSources/.d" 및 "duplicate file" 등의 메시지로 인해 Xcode 빌드 실패.
- 이로 인해 .env.prod의 내용이 앱에 주입되지 못하고, 빌드가 중단되는 상황

## 3. 해결 과정 상세 정리
문제를 해결하기 위해 Xcode 설정과 빌드 스크립트를 조정하여 .env.prod 변수들을 올바르게 읽어와 GeneratedInfoPlistDotEnv.h 헤더 파일을 생성하도록 구성했다. 
각 단계별 접근 방법은 아래와 같다:

### 3.1 Run Script를 통한 환경 변수 헤더 생성
- Xcode의 Build Phases에 Run Script 단계 추가
    - react-native-config에서 제공하는 Ruby 스크립트를 실행하도록 했다. 이 스크립트 (BuildDotenvConfig.rb)는 .env 파일을 읽어 C 헤더 파일을 생성하는 역할을 한다.

- BuildDotenvConfig.rb 경로 설정
    - Run Script 내용에 BuildDotenvConfig.rb의 경로를 지정한다. 예를 들어, 프로젝트 루트 기준으로 node_modules/react-native-config/ios/ReactNativeConfig/BuildDotenvConfig.rb 파일을 실행하도록 스크립트를 작성한다.

- DERIVED_SOURCES_DIR 설정
    - 스크립트 실행 전에 환경 변수 DERIVED_SOURCES_DIR를 Xcode의 DerivedSources 디렉터리 경로로 지정한다. $OBJROOT/DerivedSources 경로를 사용하여 DerivedSources 폴더 위치를 설정하였다. 예시 스크립트:

\`\`\`bash
export DERIVED_SOURCES_DIR="$OBJROOT/DerivedSources"
"{PROJECT_DIR}/../node_modules/react-native-config/ios/ReactNativeConfig/BuildDotenvConfig.rb"
\`\`\`

위와 같이 하면 .env.prod의 내용으로 DerivedSources/GeneratedInfoPlistDotEnv.h 파일이 생성된다. 
스크립트 실행 후 빌드 로그에 "Wrote to .../GeneratedInfoPlistDotEnv.h" 메시지가 출력되어, 헤더 파일 생성이 성공했음을 확인할 수 있다.

### 3.2 Info.plist 전처리 설정 조정
원래 react-native-config 공식 가이드에서는 Info.plist에서도 환경 변수를 사용할 수 있도록 Info.plist Preprocessor 설정을 켜고, Prefix Header로 GeneratedInfoPlistDotEnv.h를 지정하라고 안내한다
그러나 본 프로젝트에서는 Info.plist에서 환경 변수를 직접 참조하지 않으므로 이 설정을 활성화할 필요가 없었다.

- Preprocess Info.plist 비활성화
    - Xcode 프로젝트 Build Settings에서 "Preprocess Info.plist File" 옵션을 No로 설정하였다 (기본값은 No). 이렇게 하면 Info.plist 전처리 단계에서 GeneratedInfoPlistDotEnv.h를 불러오지 않으며, 관련 빌드 오류를 방지할 수 있다.

참고로, 만약 해당 옵션을 켜고 Info.plist Preprocessor Prefix File에 $BUILD_DIR}/GeneratedInfoPlistDotEnv.h를 지정한 경우 Xcode가 빌드 시 해당 헤더를 찾지 못해 오류가 날 수 있다

실제로 INFOPLIST_PREFIX_HEADER 설정이 문제를 일으켜 이를 제거하면 해결된 사례도 보고되었다
따라서 Info.plist에 환경 변수를 사용하지 않는다면 Preprocess 옵션을 끄는 것이 안전하다.

### 3.3 Output Files 설정 및 중복 빌드 방지
Run Script를 추가한 후 Output Files를 정확히 지정하는 것이 중요하다. 
Xcode는 스크립트의 입력/출력 파일 정보를 기반으로 빌드 의존성을 최적화하므로, 생성되는 파일을 Output Files에 등록해야 중복 실행이나 의존성 오류를 피할 수 있다

- Output Files 경로
    - Run Script 설정 창의 Output Files 섹션에 생성될 헤더 파일의 경로를 추가했다. 이때 절대 경로로 지정하는 것이 문제 해결의 핵심이었다. 

예를 들어:
\`\`\`bash
$(OBJROOT)/DerivedSources/GeneratedInfoPlistDotEnv.h
\`\`\`
와 같이 입력하였다. 빌드 시 환경 변수가 치환되어 실제 DerivedData 내 경로로 해석되므로, Xcode가 이 파일의 존재를 정확히 인지하게 된다. 상대경로로 입력했을 때는 인식 오류가 있었지만, 절대경로로 지정하니 제대로 동작했다.


- 의존성 파일(.d) 오류 해결
    - Output Files를 명시하면 Xcode는 자동으로 스크립트의 의존성을 추적하고 .d 파일을 관리한다. 이전에 나타났던 "unable to open dependencies file (DerivedSources/.d)" 오류는 Xcode가 스크립트의 output 정보를 알지 못해 발생한 현상이었다
Output Files에 올바른 경로를 추가한 후에는 이러한 .d 관련 오류가 재발하지 않았다. 

(참고: Xcode의 "Use discovered dependency file" 옵션이 기본 활성화되어 있을 경우 이 오류가 발생할 수 있는데 Output Files를 지정하면 해당 옵션에 의존하지 않게 되어 문제가 해결된다.)

- 중복 빌드 방지
    - Output Files를 설정한 덕분에 Xcode는 이 헤더 파일이 이미 생성되었는지 판단하여 불필요한 스크립트 재실행을 방지한다
이는 여러 빌드 대상이나 스키마를 빌드할 때 파일 중복 생성 충돌을 막아준다. 
즉, 동일 파일을 두 번 생성하려는 시도가 사라져 빌드 경고/에러가 해소되었다. 
(하나의 .env에 대해 Run Script는 한 번만 실행되도록 하고, 동일한 Output 파일을 두 군데 스크립트에서 생성하지 않도록 유의해야 한다.)

## 4. 최종 성공 조건
위 설정을 완료한 이후, 다음과 같은 조건들이 충족되면서 문제가 해결되었다

.env.prod에 정의된 모든 키-값 쌍이 GeneratedInfoPlistDotEnv.h 파일에 #define 형태로 정확하게 기록된다. 
(예시: #define API_URL @"https://prod.example.com" 형태로 삽입됨)

Xcode에서 Clean 후 빌드가 성공적으로 완료되며, 더 이상 GeneratedInfoPlistDotEnv.h 관련 에러가 발생하지 않는다.


빌드 산출물의 DerivedSources 디렉터리에 GeneratedInfoPlistDotEnv.h 파일이 생성되고, 해당 헤더가 컴파일 과정에 정상 포함되어 앱이 환경 변수 값을 참조할 수 있게 된다.

## 5. 후속 권장 사항
마지막으로, React Native iOS 프로젝트에서 환경 변수 설정을 다룰 때 유용한 팁과 권장 사항은 다음과 같다

- Run Script 경로 및 로그 확인
    - 빌드 실패 시 Run Script Phase의 로그를 확인하여 스크립트가 제대로 실행되었는지, 경로가 올바른지 점검한다. 경로 오타나 파일 위치 불일치로 스크립트가 실행되지 않는 경우가 흔하므로 주의한다.

- Output Files 설정은 필수
    - Xcode 신규 빌드 시스템에서는 스크립트의 Output을 명시적으로 지정해야 빌드를 안정화할 수 있다
    Output Files에 생성되는 파일(.h)을 반드시 등록하여, 스크립트 재실행 및 의존성 문제를 예방한다.

- Info.plist 환경 변수 사용 여부 판단
    - Info.plist에서 환경 변수 치환을 하지 않는다면 Preprocess Info.plist 설정을 꺼두는 편이 낫다. 반대로 해당 기능이 필요하면 Prefix Header 경로를 정확히 지정하고 {BUILD_DIR} 등의 변수가 올바르게 해석되는지 확인해야 한다
(환경 변수 변경 시 Product > Clean을 수행해야 새로운 값이 반영된다는 점도 기억한다.)

- 환경별 Scheme 관리
    - 개발/스테이징/프로덕션 등 여러 환경을 운용한다면 Xcode Scheme을 분리하고, 각 Scheme의 Pre-action에 ENVFILE을 지정하거나 별도 Run Script 단계를 추가하는 방법을 고려할 수 있다. 이때도 동일 헤더 파일을 여러 번 생성하지 않도록 주의한다.

- 정기적인 환경 변수 점검
    - .env 파일을 수정한 뒤에는 iOS 빌드가 해당 변경을 반영하는지 확인하기 위해 DerivedData를 삭제하거나 Clean Build를 수행하는 습관을 들이는 것이 좋다.
`
}

export default post_2;