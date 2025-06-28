import { loadNotes } from "../utils/loadNotes";

const FrontendNotes = loadNotes("../data/FrontendNotes", /post_\d+\.js$/);

export default FrontendNotes;
