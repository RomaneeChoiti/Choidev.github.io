import logo from "../../assets/images/greenwayseoul/logo.png";
import auth from "../../assets/images/greenwayseoul/auth.png";
import preview from "../../assets/images/greenwayseoul/preview.png";
import previewModal from "../../assets/images/greenwayseoul/preview-modal.png";
import ploggingModal from "../../assets/images/greenwayseoul/plogging-modal.png";
import plogging from "../../assets/images/greenwayseoul/plogging.png";
import feed from "../../assets/images/greenwayseoul/feed.png";
import drawer from "../../assets/images/greenwayseoul/drawer.png";
import feedHome from "../../assets/images/greenwayseoul/feed-home.png";
import feedDetail from "../../assets/images/greenwayseoul/feed-detail.png";
import setting from "../../assets/images/greenwayseoul/setting.png";
import ploggingModalDark from "../../assets/images/greenwayseoul/plogging-modal-dark.png";
import drawerDark from "../../assets/images/greenwayseoul/drawer-dark.png";
import feedDark from "../../assets/images/greenwayseoul/feed-dark.png";
import feedHomeDark from "../../assets/images/greenwayseoul/feed-home-dark.png";
import feedDetailDark from "../../assets/images/greenwayseoul/feed-detail-dark.png";


const GreenWaySeoulData = {
  id: "GreenWaySeoul",
  title: "GreenWaySeoul",
  year: "2025 ~",
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
  images: [auth, preview, previewModal, ploggingModal, plogging, feed, drawer, feedHome, feedDetail, setting, ploggingModalDark, drawerDark, feedDark, feedHomeDark, feedDetailDark],
  VideoOverview:
    ["이 어플리케이션은 사용자 위치를 기반으로 서울 지도 위에 쓰레기통 마커를 표시합니다.", "사용자는 플로깅을 유도하는 UI를 통해 손쉽게 플로깅 활동을 시작하고 기록할 수 있습니다.", "플로깅 기록은 날짜, 유지 시간, 제목, 설명, 점수 등을 포함하며, 사용자는 기록한 플로깅 정보를 피드에서 확인할 수 있습니다. 기록의 제목, 설명, 점수를 수정하거나 삭제할 수 있는 기능도 제공합니다.", "다크 모드와 라이트 모드를 지원하여 사용자의 화면 환경에 맞게 선택할 수 있습니다.", "로그인은 일반 로그인과 소셜 로그인(애플, 카카오)을 지원하며, 로그인하지 않아도 쓰레기통 위치만 확인할 수 있는 게스트 모드가 별도로 마련되어 있습니다."],
  link: "/works/GreenWaySeoul",
  gitLink: "https://github.com/RomaneeChoiti/GreenWaySeoul",
  blogLink: "https://greenwayseoul.blogspot.com/",
  downLoadLink:"https://apps.apple.com/kr/app/greenwayseoul/id6747158637",
  team: [{ name: "최승원", role: "Frontend Developer" }],
};

export default GreenWaySeoulData;