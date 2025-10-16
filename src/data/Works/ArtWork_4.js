import image1 from "../../assets/images/artwork4/1.png";
import importImages from "../../utils/importImages";

const ArtWork = {
  keywords: ["Untitled", "generative art", "p5.js", "interactive"],
  startDate: "2025-10-01",
  endDate: null,
  id: "ArtWork-Untitled-project-no-04",
  title: "Untitled - Project No.04",
  year: "2025",
  platform: ["Web"],
  description: "",
  features: [],
  techStack: {
    frontend: ["p5.js", "HTML", "CSS", "JavaScript"]
  },
  additionalInfo: "",
  image: image1,
  images: importImages("artwork4", 8),
  video: "https://youtu.be/bdgi2E1K6Vc",
  VideoOverview: [
],
  link: "/works/ArtWork-Untitled-project-no-04",
  ArtWorkLink: "https://untitled-project-no-04.vercel.app/",
  team: [{ name: "최승원", role: "Frontend Developer" }]
};

export default ArtWork;
