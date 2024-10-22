// src/pages/GitBlog.js
import React from "react";
import posts from "../data/posts";
import PostPage from "../Components/Post/PostPage";

function GitBlog() {
  return <PostPage subtitle="Recent Posts" posts={posts} source="gitblog" />;
}

export default GitBlog;
