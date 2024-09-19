import { useState } from "react";
import "./App.css";

function App() {
  // 초기값을 객체로 받는다.
  const [article, setArticle] = useState({
    title: "Welcome",
    desc: "React Ajax",
  });

  return (
    <div>
      <h1>프론트엔드 개발자 </h1>
      <p>기본언어인 html, css, javascript부터 학습합니다.</p>
      <nav>
        <ul>
          <li>
            <a href="/">UI/UX 개발 </a>
          </li>
          <li>
            <a href="/">재사용이 가능한 UI 개발 </a>
          </li>
          <li>
            <a href="/">애니메이션 구현 </a>
          </li>
        </ul>
      </nav>
      <article>
        <h2>{article.title}</h2>
        <p>{article.desc}</p>
      </article>
    </div>
  );
}

export default App;
