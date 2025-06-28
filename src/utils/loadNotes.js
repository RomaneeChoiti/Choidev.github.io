import { markdownToHtml } from "./markdownToHtml";

/**
 * 동적으로 노트 데이터를 로드하고 Markdown을 HTML로 변환합니다.
 * @param {string} directoryPath - 데이터 파일이 위치한 디렉토리 경로
 * @param {RegExp} filePattern - 파일 이름 패턴 (정규식)
 * @returns {Array} 변환된 노트 데이터 배열
 */
export function loadNotes(directoryPath, filePattern) {
  const requireContext = require.context(directoryPath, false, filePattern);
  const posts = requireContext.keys().map((key) => requireContext(key).default);

  return posts.map((post) => ({
    ...post,
    content: markdownToHtml(post.content),
  }));
}
