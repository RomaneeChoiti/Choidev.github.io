import binfindericon from "../../assets/images/binfinder/binfindericon.jpg";
import about from "../../assets/images/binfinder/about.png";
import community from "../../assets/images/binfinder/community.png";
import fintrash from "../../assets/images/binfinder/fintrash.png";
import how2 from "../../assets/images/binfinder/how2.png";
import login from "../../assets/images/binfinder/login.png";
import plogging from "../../assets/images/binfinder/plogging.jpg";

const BinFinderData = {
  id: "BinFinder",
  title: "BinFinder",
  year: "2023",
  platform: ["Web"],
  description:
    "BinFinder는 사용자가 근처 쓰레기통의 위치를 확인할 수 있도록 지원하는 웹 애플리케이션으로, 환경 보호와 쓰레기 관리를 목표로 합니다.",
  features: [
    "사용자 위치 기반 쓰레기통 탐색",
    "쓰레기통에 대한 상세 정보 제공",
    "쓰레기통 등록",
    "쓰레기통 상태 업데이트",
    "커뮤니티 게시판",
    "플로깅 게시판",
  ],
  techStack: {
    frontend: ["HTML", "CSS", "JavaScript", "React"],
    uiux: ["Figma"],
    backend: ["Java 11", "Spring Boot", "Gradle", "Rest"],
    DB: ["MySQL"],
    AWS: ["EC2", "Route 53", "Certificate Manager", "RDS"],
    tools: ["axios", "eslint", "Prettier"],
  },
  additionalInfo: "",
  image: binfindericon,
  images: [about, community, fintrash, how2, login, plogging],
  video: "http://youtu.be/xK-ozv_efD8?si=3iv3ghvtDeSt-XpU",
  VideoOverview: [
    "이 영상은 팀 에베레스트의 기술 발표 영상입니다. 데이터 출처는 서울시 가로휴지통 설치정보 공공데이터이며, 이 웹 애플리케이션은 3명의 프론트엔드 개발자와 3명의 백엔드 개발자가 협력하여 개발했습니다.",
  ],
  link: "/works/BinFinder",
  gitLink:
    "https://github.com/RomaneeChoiti/seb43_main_018_refactorgin/tree/refactoring",
  blogLink: "https://velog.io/@tmd1568/series/main-project",
  team: [
    { name: "최승원", role: "Frontend Developer" },
    { name: "유슬기", role: "Frontend Developer" },
    { name: "전형호", role: "Frontend Developer" },
    { name: "원영은", role: "Frontend Developer" },
    { name: "손정훈", role: "Backend Developer" },
    { name: "백서연", role: "Backend Developer" },
    { name: "김나연", role: "Backend Developer" },
    { name: "이난영", role: "Backend Developer" },
  ],
};

export default BinFinderData;