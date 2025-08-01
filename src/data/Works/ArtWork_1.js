import pattern from "../../assets/images/artwork/pattern.png";
import pattern1 from "../../assets/images/artwork/pattern1.png";
import pattern2 from "../../assets/images/artwork/pattern2.png";
import pattern3 from "../../assets/images/artwork/pattern3.png";
import pattern4 from "../../assets/images/artwork/pattern4.png";
import patternMP4 from "../../assets/video/pattern.mp4";

const ArtWork = {
  id: "ArtWork-Untitled-repeating-pattern",
  title: "ArtWork-Untitled-repeating-pattern",
  year: "2023",
  platform: ["Web"],
  description: "이 작품은 웹 기반의 반복적인 패턴을 생성하는 예술 작품으로, 사용자와의 상호작용을 통해 다양한 패턴을 탐구합니다.",
  features: [
    "반복적인 패턴 생성",
    "사용자 상호작용을 통한 패턴 변경",
    "동적인 시각적 표현"
  ],
  techStack: {
    frontend: ["p5.js", "HTML", "CSS", "JavaScript"]
  },
  additionalInfo: "",
  image: pattern,
  images: [pattern1, pattern2, pattern3, pattern4],
  video: patternMP4,
  VideoOverview: [
    "이 작품은 '제목 미정'이라는 이름을 가지며, 시작은 세 개의 점으로 이루어진 삼각형 모양으로 나타납니다.",
    "이어서 빠르게 추가되는 여러 점들은 선으로 연결되어 빠르게 형성되는데, 이는 삼각형의 형태를 빠르게 확장하는 것처럼 보입니다. 이 과정에서 각각의 새로운 점에는 빠르게 선이 형성되어 전체적인 모양을 빠르게 변화시킵니다.",
    "이 작품은 시간이 흐름에 따라 선명한 색상으로 표현되며, 계속해서 추가되는 점들로 인해 더욱 선명한 형태를 띠게 됩니다.",
    "그리고 150개의 점이 만나면, 이전에 형성된 형태는 사라지게 됩니다. 따라서 작품은 지속적으로 변화하면서 더 복잡하고 오묘한 형태를 만들어내는데, 이는 각 추가되는 요소가 이전의 것과 조화를 이루면서 새로운 시각적 경험을 제공하는 것으로 해석될 수 있습니다."
  ],
  link: "/works/ArtWork-Untitled-repeating-pattern",
  gitLink: "https://github.com/RomaneeChoiti/ArtWork-Untitled-repeating-pattern",
  blogLink: "",
  team: [{ name: "최승원", role: "Frontend Developer" }]
};

export default ArtWork;
