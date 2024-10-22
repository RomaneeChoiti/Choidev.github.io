// src/pages/DynamicPostPage.js
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostPage from "./Post/PostPage";

function DynamicPostPage() {
  const { type, postId } = useParams();
  const navigate = useNavigate();

  // 모든 type 값을 소문자로 변환하여 처리
  const normalizedType = type?.toLowerCase();
  console.log("Type in DynamicPostPage:", normalizedType);
  console.log("Post ID in DynamicPostPage:", postId);

  // 만약 normalizedType이 유효한 타입이 아니면 페이지를 소문자로 강제 변환
  useEffect(() => {
    const validTypes = ["gitblog", "conferencenotes"];
    if (type && !validTypes.includes(normalizedType)) {
      navigate(`/${normalizedType}`, { replace: true });
    }
  }, [type, normalizedType, navigate]);

  // 유효한 타입 확인
  const validTypes = ["gitblog", "conferencenotes"];
  if (!validTypes.includes(normalizedType)) {
    return <p>Page not found. Please check the URL.</p>;
  }

  return <PostPage type={normalizedType} postId={postId} />;
}

export default DynamicPostPage;
