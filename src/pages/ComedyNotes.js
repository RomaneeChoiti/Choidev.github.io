import { loadNotesWithoutRequireContext } from "../utils/loadNotesWithoutRequireContext";

const requireContext = require.context("../data/ComedyNotes", false, /post_.*\.js$/);
const files = {};
requireContext.keys().forEach((key) => {
  files[key] = requireContext(key).default;
});

const ComedyNotes = loadNotesWithoutRequireContext(files);

export default ComedyNotes;
