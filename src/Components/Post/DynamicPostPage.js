import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostPage from "./PostPage";

function DynamicPostPage() {
  const { type, postId } = useParams();
  const navigate = useNavigate();

  const normalizedType = type?.toLowerCase();

  useEffect(() => {
    const validTypes = ["gitblog", "conferencenotes", "backendnotes", "frontendnotes", "hnsskillnotes", "comedynotes"];
    if (type && !validTypes.includes(normalizedType)) {
      navigate(`/${normalizedType}`, { replace: true });
    }
  }, [type, normalizedType, navigate]);

  const validTypes = ["gitblog", "conferencenotes", "backendnotes", "frontendnotes", "hnsskillnotes", "comedynotes"];
  if (!validTypes.includes(normalizedType)) {
    return <p>Page not found. Please check the URL.</p>;
  }

  return <PostPage type={normalizedType} postId={postId} />;
}

export default DynamicPostPage;
