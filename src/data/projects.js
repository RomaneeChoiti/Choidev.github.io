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
  // Sort by projectNo descending so higher project numbers appear first.
  // If a file doesn't have projectNo, it will be treated as 0.
  .sort((a, b) => (b.projectNo || 0) - (a.projectNo || 0));

export default projects;