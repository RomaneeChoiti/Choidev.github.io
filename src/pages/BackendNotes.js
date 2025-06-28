import { loadNotesWithoutRequireContext } from "../utils/loadNotesWithoutRequireContext";

const requireContext = require.context("../data/BackendNotes", false, /post_.*\.js$/);
const files = {};
requireContext.keys().forEach((key) => {
  files[key] = requireContext(key).default;
});

const BackendNotes = loadNotesWithoutRequireContext(files);

export default BackendNotes;
