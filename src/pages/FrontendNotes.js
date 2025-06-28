import { loadNotesWithoutRequireContext } from "../utils/loadNotesWithoutRequireContext";

const requireContext = require.context("../data/FrontendNotes", false, /post_.*\.js$/);
const files = {};
requireContext.keys().forEach((key) => {
  files[key] = requireContext(key).default;
});

const FrontendNotes = loadNotesWithoutRequireContext(files);

export default FrontendNotes;
