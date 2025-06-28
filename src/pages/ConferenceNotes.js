import { loadNotes } from "../utils/loadNotes";

const conferencenotes = loadNotes("../data/ConferenceNotes", /post_\d+\.js$/);

export default conferencenotes;
