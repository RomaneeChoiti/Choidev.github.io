const blogpost1Content = `
  <p>
    React 애플리케이션을 GitHub Pages에 배포할 때, 종종 라우팅 문제가 발생합니다. 
    특히, 페이지를 새로고침하거나 특정 URL로 직접 접근할 때 "404 페이지"가 뜨는 
    현상이 나타납니다. 이번 글에서는 이러한 문제의 원인과 해결 방법을 다루고자 합니다.
  </p>
  
  <h2>1. 문제의 원인</h2>
  <p>
    GitHub Pages는 기본적으로 정적 파일을 호스팅하는 플랫폼입니다. React 애플리케이션이 
    사용하는 <code>react-router-dom</code>의 <code>BrowserRouter</code>는 SPA(Single Page Application) 
    구조를 사용하기 때문에, GitHub Pages가 직접 접근하는 경로를 인식하지 못해 404 오류가 발생할 수 있습니다. 
    예를 들어, <code>/blog</code>나 <code>/ConferenceNotes/post1</code>와 같은 경로에 접근했을 때 
    해당 파일이 없으면 GitHub Pages는 페이지를 찾을 수 없다고 판단합니다.
  </p>
  
  <h2>2. 해결 방법</h2>
  <p>
    이 문제를 해결하기 위해서는 몇 가지 설정이 필요합니다. 다음은 React Router와 GitHub Pages에서 
    올바르게 동작하게 하는 단계별 설정 방법입니다.
  </p>
  
  <h3>2.1. <code>basename</code> 설정</h3>
  <p>
    먼저, GitHub Pages의 리포지토리 이름과 일치하도록 <code>basename</code>을 설정합니다. 
    이를 통해 애플리케이션이 올바른 경로를 인식할 수 있습니다.
  </p>
  <pre><code>&lt;Router basename={process.env.PUBLIC_URL}&gt;</code></pre>
  
  <h3>2.2. <code>404.html</code> 파일 추가</h3>
  <p>
    GitHub Pages는 SPA 구조를 지원하지 않기 때문에, 모든 경로를 <code>index.html</code>로 
    리다이렉트할 수 있도록 <code>404.html</code> 파일을 추가해야 합니다.
  </p>
  <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta http-equiv="refresh" content="0; URL=./index.html"&gt;
  &lt;/head&gt;
&lt;/html&gt;
  </code></pre>
  
  <h3>2.3. <code>homepage</code> 설정 (<code>package.json</code>)</h3>
  <p>
    <code>package.json</code>에 <code>homepage</code> 필드를 추가하여 GitHub Pages가 애플리케이션의 
    루트 URL을 정확히 알 수 있도록 합니다.
  </p>
  <pre><code>
{
  "homepage": "https://romaneechoiti.github.io/Choidev.github.io"
}
  </code></pre>
  
  <h2>3. React Router에서 경로 설정 강화</h2>
  <p>
    GitHub Pages와 React Router의 호환성을 높이기 위해, 경로를 설정하는 방법을 강화해야 합니다. 예를 들어, 
    <code>useEffect</code>와 <code>useLocation</code>을 사용하여 페이지 경로를 적극적으로 관리할 수 있습니다.
  </p>
  <pre><code>
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
  </code></pre>
  
  <h2>4. 배포 후 확인 사항</h2>
  <p>
    모든 설정을 마친 후, 프로젝트를 빌드하고 GitHub Pages에 다시 배포합니다.
  </p>
  <pre><code>
npm run build
npm run deploy
  </code></pre>
  
  <h2>5. 커밋 메시지 예시</h2>
  <p>
    아래는 위의 수정 사항을 커밋할 때 사용할 수 있는 커밋 메시지 예시입니다:
  </p>
  <blockquote>
    fix: GitHub Pages에서 라우팅 문제 해결
    <ul>
      <li>404.html 파일 추가하여 GitHub Pages에서 잘못된 경로 접근 시 index.html로 리다이렉트</li>
      <li>package.json에 homepage 설정 추가</li>
      <li>React Router에서 ScrollToTop 컴포넌트 및 기본 리다이렉트 설정으로 경로 문제 해결</li>
      <li>배포 후 GitHub Pages에서 정상 작동 확인</li>
    </ul>
  </blockquote>
  
  <h2>결론</h2>
  <p>
    GitHub Pages에서 React 애플리케이션을 문제없이 배포하기 위해서는 몇 가지 설정이 필요합니다. 
    <code>basename</code> 설정, <code>404.html</code> 파일 추가, 그리고 <code>homepage</code> 설정을 통해 
    경로 문제를 해결할 수 있으며, 이를 통해 모든 경로가 올바르게 작동하도록 구성할 수 있습니다. 
    이번 글을 통해 GitHub Pages와 React Router를 함께 사용하는 방법을 이해하고, 더 나은 배포 환경을 구축해보세요.
  </p>
`;
export default blogpost1Content;
