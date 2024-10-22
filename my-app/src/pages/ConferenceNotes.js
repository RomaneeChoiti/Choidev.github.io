// src/pages/ConferenceNotes.js
import React from "react";
import PostPage from "../Components/Post/PostPage";
import conferenceNotes from "../data/conferenceNotes";

function ConferenceNotes() {
  return (
    <PostPage
      subtitle="Past Conferences"
      posts={conferenceNotes}
      source="conferenceNotes"
    />
  );
}

export default ConferenceNotes;
