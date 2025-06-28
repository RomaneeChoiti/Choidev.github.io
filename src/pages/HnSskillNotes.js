import { loadNotesWithoutRequireContext } from "../utils/loadNotesWithoutRequireContext";

const requireContext = require.context("../data/HnSskillNotes", false, /post_.*\.js$/);
const files = {};
requireContext.keys().forEach((key) => {
  files[key] = requireContext(key).default;
});

const HnSSkillNotes = loadNotesWithoutRequireContext(files);

export default HnSSkillNotes;
