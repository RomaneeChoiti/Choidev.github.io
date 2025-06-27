import logo from "../../assets/images/greenwayseoul/logo.png";
import auth from "../../assets/images/greenwayseoul/auth.png";
import preview from "../../assets/images/greenwayseoul/preview.png";
import previewModal from "../../assets/images/greenwayseoul/preview-modal.png";
import ploggingModal from "../../assets/images/greenwayseoul/plogging-modal.png";


const GreenWaySeoulData = {
  id: "GreenWaySeoul",
  title: "GreenWaySeoul",
  year: "2025",
  platform: ["React Native"],
  description:
    "'GreenWaySeoul'서울 쓰레기통 탐색 어플리케이션은 서울 내 쓰레기통의 위치를 사용자에게 안내하는 서비스입니다. ",
  features: ["서울 지역 중심 쓰레기통 위치 표시", "로그인하지 않아도 쓰레기통 위치만 확인 가능한 게스트 모드", "플로깅 기록 작성 (날짜, 유지 시간, 제목, 설명, 점수 입력)", "플로깅 기록 저장 및 목록 확인 (피드 형태)", "소셜 로그인 지원 (애플, 카카오)", "일반 로그인 지원(추천 코드 입력 시 회원가입 가능)"],
  techStack: {
    frontend: ["React Native", "TypeScript", "Zustand", "ReactQuery"],
    uiux: ["Figma"],
    backend: ["NestJS & TypeORM", "PostgreSQL", "AWS (EC2, RDS, S3)"],
    cicd: ["준비 중..."],
    deployment: ["App Store", "Google Play (8월 예정)"],
  },
  additionalInfo: [
    "'GreenWaySeoul'의 더욱 자세한 내용은 아래 [Blog]를 참고해주세요.",
  ],
  image: logo,
  images: [auth, preview, previewModal, ploggingModal],
  VideoOverview:
    "이 어플리케이션은 사용자 위치를 기반으로 서울 내 쓰레기통 위치를 안내하고, 플로깅 활동을 기록 및 관리할 수 있는 기능을 제공합니다.",
  link: "/works/GreenWaySeoul",
  gitLink: "https://github.com/RomaneeChoiti/GreenWaySeoul",
  blogLink: "https://greenwayseoul.blogspot.com/",
  downLoadLink:"https://apps.apple.com/kr/app/greenwayseoul/id6747158637",
  team: [{ name: "최승원", role: "Frontend Developer" }],
};

export default GreenWaySeoulData;