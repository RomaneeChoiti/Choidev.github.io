const post_1 = {
  id: "post1",
  title: "아이폰 UDID",
  date: "2025/06/12",
  tags: ["iOS", "UDID", "Apple Configurator", "Security"],
  content: `
### UDID란?
아이폰의 UDID는 Unique Device Identifier의 약자로, 아이폰을 식별하는 고유한 문자열이다.
이 문자열은 아이폰의 하드웨어와 소프트웨어 정보를 기반으로 생성되며,  
개발자들이 아이폰을 식별하고 관리하는 데 사용된다. UDID는 40자리의 16진수 문자열로 구성되어 있으며,  
아이폰의 특정 모델, 운영 체제 버전, 그리고 하드웨어 정보를 포함한다.  

UDID는 알고 싶다면 찾아본 결과 아래 사이트에서 찾을 수 있다.

[https://udid.tech/](https://udid.tech/)

하지만 UDID 특성 상 보안에 문제가 되며 
아이폰의 보안 업데이트가 되어 보안 잠금이 실행이 되어서 60분간 UIDID를 찾을 수 없게 된다.

### 그렇다면 보안 상 문제없이 UDID를 얻는 방법은?

맥을 쓴다는 기준으로 보자면 'Apple configurator라고' apple 스토어에 정식으로 출시면 어플이 있다.

1. 어플을 다운 받고
2. 맥과 아이폰에 케이블로 연결을 해준다.
3. 아이폰을 클릭하면 UDID를 쉽고 안전하게 찾을 수 있다.
`};

export default post_1;
