// import TodoHunter from "../data/Works/Todo-Hunter";
// import GreenWaySeoulData from "../data/Works/GreenWaySeoul";
// import BinFinderData from "../data/Works/Binfinder";

// Automatically import all artwork modules from the Works folder.
// New artwork files added to src/data/Works will be picked up without
// needing manual edits here. Modules should default-export the
// artwork object (the existing files follow this pattern).

// require.context is provided by webpack (used by Create React App).
// It will include any .js files directly inside the Works directory.
const req = require.context('./Works', false, /\.js$/);

const projects = req
  .keys()
  .map((key) => {
    const mod = req(key);
    return (mod && mod.default) ? mod.default : mod;
  })
  .filter(Boolean)
  // Keep only artwork modules: either id starts with "ArtWork" or
  // the object contains a projectNo field. This filters out utility
  // or integration projects that aren't artworks.
  .filter((p) => {
    if (!p) return false;
    if (typeof p.id === 'string' && /^ArtWork/i.test(p.id)) return true;
    if (p.projectNo) return true;
    return false;
  })
  // Sort by projectNo descending so higher project numbers appear first.
  // If a file doesn't have projectNo, it will be treated as 0.
  .sort((a, b) => (Number(b.projectNo) || 0) - (Number(a.projectNo) || 0));

export default projects;