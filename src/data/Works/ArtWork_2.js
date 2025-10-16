import image1 from "../../assets/images/artwork2/4.png";
import importImages from "../../utils/importImages";
import ARTWORK_KEYWORDS from "../keywords";

const ArtWork = {
  keywords: ARTWORK_KEYWORDS['ArtWork-root-project-no-02'],
  startDate: "2025-09-01",
  endDate: null,
  id: "ArtWork-root-project-no-02",
  title: "가제 : ROOT - Project No.02",
  year: "2025",
  platform: ["Web"],
  description: "ROOT는 클릭을 통해 생성과 순환, 연결의 과정을 시각화하며, 생명의 흐름과 존재의 근원을 탐구하는 인터랙티브 작업이다.",
  features: [],
  techStack: {
    frontend: ["p5.js", "HTML", "CSS", "JavaScript"]
  },
  additionalInfo: "",
  image: image1,
  images: importImages("artwork2", 4),
  video: "https://youtu.be/cRdtgnQajvc",
  VideoOverview: [
    "클릭은 하나의 시작점이자, 생성의 신호이다. 한 번의 클릭으로 Root가 생성되고, 그로부터 Branch가 뻗어나와 Leaf가 형성된다. 이 구조는 단순한 나무의 성장처럼 보이지만, 실은 관계의 발생과 순환, 그리고 재생의 은유로 작동한다. Leaf와 Leaf가 맞닿는 순간, 새로운 Root가 태어나며 다시 Branch가 자라나고, 또 다른 Leaf가 생성된다. 이 무한한 반복은 생성과 소멸의 연속선 위에서 유기적인 세계를 구축해 나간다.",
    "작품의 전개는 점차 느려진다. 처음에는 빠르게 자라나는 가지와 잎의 움직임이 후반으로 갈수록 느린 리듬으로 변한다. 이는 마치 생명이 성장하며 스스로의 질서를 찾아가는 과정처럼, 혹은 시간의 깊이에 스며드는 의식의 변화처럼 보인다. 속도의 완화는 단순히 시각적 효과가 아니라, 관람자에게 ‘멈춤’과 ‘사유’의 순간을 제공한다. 생성의 흐름 속에서, 우리는 자신이 클릭으로 만들어낸 세계를 바라보며 스스로의 ‘근원(Root)’을 되묻게 된다.",
    "ROOT는 하나의 시각적 실험이자, 존재의 순환에 대한 탐구이다. 모든 생명과 사물은 관계 속에서 자라나고, 그 관계는 다시 새로운 생성을 낳는다. 이 작업은 그 과정 자체를 인터랙션으로 드러내며, 관람자가 직접 참여하여 ‘자라남’과 ‘되돌아봄’의 과정을 경험하도록 유도한다. 결국 ROOT는 단 하나의 생명이 아닌, 무수한 연결의 순간들이 만들어내는 생명체 그 자체이다.",
    "A single click becomes a point of origin — a signal of creation. From that gesture, a Root emerges, extending into Branches, which in turn give birth to Leaves. At first glance, this may resemble the natural growth of a tree, yet beneath the surface lies a meditation on connection, regeneration, and the cyclical nature of existence. When two Leaves meet, a new Root is born; from it, fresh Branches unfold, leading again to new Leaves. Through this perpetual repetition, an organic system forms — one that continuously reconstructs the relationship between life and structure.",
    "As the work unfolds, its rhythm gradually slows. The rapid sprouting of the early sequence transforms into a more measured, deliberate tempo. This deceleration reflects not only the maturation of a living form but also the deepening awareness that accompanies time. The slowing of movement invites moments of stillness and contemplation, allowing viewers to encounter their own origins — their personal “roots” — within the generative cycle they have set in motion.",
    "ROOT is both a visual experiment and a meditation on the circulation of being. Every entity grows through connection, and each connection becomes the seed of another emergence. By translating this process into an interactive experience, the work invites participants to engage directly with the act of becoming — to witness growth, decay, and rebirth as intertwined states. Ultimately, ROOT is not a single organism, but a living network — a constellation of countless connections that together breathe as one."
  ],
  link: "/works/ArtWork-root-project-no-02",
  ArtWorkLink: "https://root-kohl.vercel.app/",
  team: [{ name: "최승원", role: "Frontend Developer" }]
};

export default ArtWork;
