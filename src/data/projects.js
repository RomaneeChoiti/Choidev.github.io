import GreenWaySeoul from "../assets/images/GreenWaySeoul.png";
import Complete from "../assets/images/Complete.png";
import Loading from "../assets/images/Loading.png";
import Searching from "../assets/images/Searching.png";
import recoding from "../assets/video/recoding.mp4";
import binfindericon from "../assets/images/binfinder/binfindericon.jpg";
import about from "../assets/images/binfinder/about.png";
import community from "../assets/images/binfinder/community.png";
import fintrash from "../assets/images/binfinder/fintrash.png";
import how2 from "../assets/images/binfinder/how2.png";
import login from "../assets/images/binfinder/login.png";
import plogging from "../assets/images/binfinder/plogging.jpg";
import pattern from "../assets/images/artwork/pattern.png";
import pattern1 from "../assets/images/artwork/pattern1.png";
import pattern2 from "../assets/images/artwork/pattern2.png";
import pattern3 from "../assets/images/artwork/pattern3.png";
import pattern4 from "../assets/images/artwork/pattern4.png";
import patternMP4 from "../assets/video/pattern.mp4";
import todoHunterLogo from "../assets/images/todoHunter/logo.png";
import character from "../assets/images/todoHunter/character.png";
import quest from "../assets/images/todoHunter/quest.png";
import ending from "../assets/images/todoHunter/ending.png";

const todoHunterImgs = [ character, quest, ending ];

const projects = [
    // 추가 프로젝트는 위에서부터 계속 추가하세요
    {
      id: "Todo-Hunter",
      title: "TODO-HUNTER : ~ RETURN OF SCROLL ~",
      year: "2025",
      platform: ["Webapp"],
      description:
        "투두리스트 사용시 현실에서 즉각적인 성장을 체감하기 어려워 습관 형성이 힘든 문제점을 발견하고, 유저 상호작용과 시각적 성장 요소를 추가한 게이미피케이션(gamification) 웹 서비스입니다.",
      features: ["회원가입/로그인", "퀘스트 페이지", "캐릭터 페이지", "칭호 페이지", "엔딩 페이지"],
      techStack: {
        frontend: ["TypeScript", "React", "Tailwind CSS", "Shadcn/UI","Zustand", "Node.Cron", "Next.js"],
        Database : ["PostgreSQL"],
        ORM: ["Prisma"],
        Deploy: ["PWA", "Linux(Ubuntu)","GitHub Action", "PM2", "Nginx"],
      },
      image: todoHunterLogo,
      images: [
        ...todoHunterImgs,
      ],
      video: "https://youtu.be/3YnQLthmFRQ",
      VideoOverview:[
          "이 서비스는 사용자가 퀘스트를 완료하고 캐릭터를 성장시키는 과정을 통해 투두리스트 사용의 재미를 더합니다.",
          "* 서비스에 대해 더 알고 싶으시다면, [ View source code on GitHub ] 버튼을 클릭하면 프로젝트에 대해 상세히 설명하고 있습니다.",
          "* Todo-Hunter 서비스를 직접 경헙하고 싶으시면, 하단에 있는 [ View site ] 버튼을 클릭하면 실제 서비스에 접속할 수 있습니다.", 
        ],
      link: "/works/Todo-Hunter",
      gitLink: "https://github.com/FRONT-END-BOOTCAMP-PLUS-3/todo-hunter",
      deployLink: "https://todo-hunter.com",
      team: [
        { name: "최승원", role: "Frontend Developer" },
        { name: "박금정", role: "Frontend Developer" },
        { name: "윤주상", role: "Frontend Developer" },
        { name: "박상민", role: "Frontend Developer" },
      ],
    },
  {
    id: "GreenWaySeoul",
    title: "GreenWaySeoul",
    year: "2024",
    platform: ["iOS"],
    description:
      "'GreenWaySeoul'외국인 관광객들이 서울을 편리하게 탐험할 수 있도록 설계된 위치 기반 서비스입니다.",
    features: ["사용자 위치 기반 쓰레기통 탐색", "쓰레기통 위치 표시"],
    techStack: {
      frontend: ["React Native", "JavaScript", "TypeScript", "Xcode Simulator"],
      uiux: ["Figma"],
      backend: ["AWS Lambda", "API Gateway", "DynamoDB", "S3"],
      cicd: ["GitHub Actions"],
      deployment: ["Expo", "EAS Build & Submit"],
      tools: ["axios", "eslint", "Prettier"],
    },
    additionalInfo: [
      "'GreenWaySeoul'은 BinFinder 팀 프로젝트의 지도 기능을 고도화하여 독자적으로 어플리케이션화한 개인 프로젝트입니다.",
    ],
    image: GreenWaySeoul,
    images: [Loading, Searching, Complete],
    video: recoding,
    VideoOverview:
      "이 동영상을 통해 'GreenWaySeoul'이 관광객에게 서울 내 쓰레기통 위치 안내 서비스를 제공하여 편리함을 어떻게 향상시키는지 확인해보세요.",
    link: "/works/GreenWaySeoul",
    gitLink: "https://github.com/RomaneeChoiti/GreenWaySeoul",
    blogLink: "https://greenwayseoul.blogspot.com/",
    team: [{ name: "최승원", role: "Frontend Developer" }],
  },
  {
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
    additionalInfo: ``,
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
  },
  {
    id: "ArtWork-Untitled-repeating-pattern",
    title: "ArtWork-Untitled-repeating-pattern",
    year: "2023",
    platform: ["Web"],
    description: `이 작품은 웹 기반의 반복적인 패턴을 생성하는 예술 작품으로, 사용자와의 상호작용을 통해 다양한 패턴을 탐구합니다.,
`,
    features: [
      "반복적인 패턴 생성",
      "사용자 상호작용을 통한 패턴 변경",
      "동적인 시각적 표현",
    ],
    techStack: {
      frontend: ["p5.js", "HTML", "CSS", "JavaScript"],
    },
    additionalInfo: ``,
    image: pattern,
    images: [pattern1, pattern2, pattern3, pattern4],
    video: patternMP4,
    VideoOverview: [
      "이 작품은 '제목 미정'이라는 이름을 가지며, 시작은 세 개의 점으로 이루어진 삼각형 모양으로 나타납니다.",
      "이어서 빠르게 추가되는 여러 점들은 선으로 연결되어 빠르게 형성되는데, 이는 삼각형의 형태를 빠르게 확장하는 것처럼 보입니다. 이 과정에서 각각의 새로운 점에는 빠르게 선이 형성되어 전체적인 모양을 빠르게 변화시킵니다.",
      "이 작품은 시간이 흐름에 따라 선명한 색상으로 표현되며, 계속해서 추가되는 점들로 인해 더욱 선명한 형태를 띠게 됩니다.",
      "그리고 150개의 점이 만나면, 이전에 형성된 형태는 사라지게 됩니다. 따라서 작품은 지속적으로 변화하면서 더 복잡하고 오묘한 형태를 만들어내는데, 이는 각 추가되는 요소가 이전의 것과 조화를 이루면서 새로운 시각적 경험을 제공하는 것으로 해석될 수 있습니다.",
    ],
    link: "/works/ArtWork-Untitled-repeating-pattern",
    gitLink:
      "https://github.com/RomaneeChoiti/ArtWork-Untitled-repeating-pattern",
    blogLink: "",
    team: [{ name: "최승원", role: "Frontend Developer" }],
  },
];

export default projects;
