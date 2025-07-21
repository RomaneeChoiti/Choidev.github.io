import { loadNotesWithoutRequireContext } from "../utils/loadNotesWithoutRequireContext";

const requireContext = require.context("../data/DevOpsNotes", false, /post_.*\.js$/);
const files = {};
requireContext.keys().forEach((key) => {
  files[key] = requireContext(key).default;
});

const DevOpsNotes = loadNotesWithoutRequireContext(files);

export default DevOpsNotes;
