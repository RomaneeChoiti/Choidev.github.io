import img1 from "../../assets/images/postImgs/CleanArchitecture.jpg";

const post_1 = {
  id: "post1",
  title: "The Clean Architecture - 1",
  date: "2025/01/20",
  content: `

<img src="${img1}" alt="Bridging Header Diagram" style="width: 100%; max-width: 600px; height: auto;" />

(출처: [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html))

# Clean Architecture란?
시스템 아키텍처에 대한 개념은 여럿 제시해있고 디테일하게 다르지만 공통적으로 관심사의 분리(Separation of Concerns)를 강조합니다.
Clean Architecture는 시스템을 계층화하여 관심사를 분리하고, 각 계층이 서로 독립적으로 변경될 수 있도록 설계하는 아키텍처 패턴입니다.

## Clean Architecture - 관심사의 분리(Separation of Concerns)
Clean Architecture는 시스템을 다음과 같은 계층으로 나누어 관심사를 분리합니다
- **Entities**: 비즈니스 규칙과 엔티티를 정의합니다. 이 계층은 시스템의 핵심 로직을 포함하며, 다른 계층에 의존하지 않습니다.
- **Use Cases**: 애플리케이션의 특정 기능을 구현합니다. 이 계층은 엔티티를 사용하여 비즈니스 로직을 수행하며, 외부 인터페이스(예: 데이터베이스, 웹 API 등)에 의존하지 않습니다.
- **Interface Adapters**: 외부 인터페이스와 Use Cases를 연결합니다.
  이 계층은 Use Cases를 호출하여 데이터를 가져오거나 저장하며, 외부 인터페이스의 변환을 담당합니다.
- **Frameworks and Drivers**: 외부 프레임워크와 드라이버를 포함합니다. 이 계층은 시스템의 외부 인터페이스(예: 웹 프레임워크, 데이터베이스 드라이버 등)를 사용하여 Interface Adapters와 연결합니다.

### 4개 계층보다 더 많을 수 있나?
Clean Architecture는 계층의 수에 제한을 두지 않습니다. 필요에 따라 더 많은 계층을 추가할 수 있습니다. 
핵심은 의존성 규칙(Dependency Rule)입니다.

## Clean Architecture의 핵심 - 의존성 규칙(Dependency Rule)
의존성(Dependency)이 반드시 안쪽(더 추상적이고, 핵심적인 정책 영역)으로만 향해야 한다는 점입니다.
- 소스 코드의 의존성은 반드시 내부를 향해야 한다.
(밖에서 안으로는 OK, 안에서 밖으로는 절대 안 됨)
- 내부(Inner Circle)는 외부(Outer Circle)에 대해 아무것도 알아서는 안 된다.
(외부의 클래스, 함수, 변수, 데이터 포맷 등 어떤 것도 내부에서 직접 사용하거나 참조하지 않는다)
- 외부의 변화가 내부에 영향을 끼치면 안 된다.
(예: 프레임워크가 바뀌더라도 내부의 비즈니스 로직, 정책 코드는 영향받지 않아야 한다)

즉,내부는 외부에 대해 "몰라도 되고, 영향을 받지 않으며, 독립적으로 유지되어야 한다"
이게 바로 Dependency Rule의 핵심

`
};

export default post_1;
