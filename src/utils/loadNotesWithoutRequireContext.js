import { marked } from "marked";

/**
 * 데이터를 로드하고 Markdown을 HTML로 변환합니다.
 * @param {Object} files - require.context로 로드된 파일 객체
 * @returns {Array} 변환된 노트 데이터 배열
 */
export function loadNotesWithoutRequireContext(files) {
  return Object.values(files).map((post) => ({
    ...post,
    content: marked(post.content),
  }));
}
