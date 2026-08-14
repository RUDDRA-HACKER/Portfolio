
import { ArrowRight } from "lucide-react";

function CodeWindow() {
  return (
    <div className="code-window">
      {/* Window Header */}
      <div className="code-window-header">
        <div className="window-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <span className="code-file-name">rudra.java</span>

        <ArrowRight
          size={16}
          strokeWidth={1.5}
          className="code-arrow"
        />
      </div>

      {/* Code Content */}
      <div className="code-content">
        <div className="code-line">
          <span className="line-number">01</span>
          <span className="keyword">public class</span>{" "}
          <span className="class-name">Developer</span>{" "}
          <span>{"{"}</span>
        </div>

        <div className="code-line indent-1">
          <span className="keyword">private</span>{" "}
          <span className="type">String</span>{" "}
          <span className="variable">focus</span> ={" "}
          <span className="string">"impact"</span>;
        </div>

        <div className="code-line">
          <span className="line-number">03</span>
        </div>

        <div className="code-line indent-1">
          <span className="keyword">public void</span>{" "}
          <span className="method">build</span>() {"{"}
        </div>

        <div className="code-line indent-2">
          <span className="comment">
            // turning ideas into reality
          </span>
        </div>

        <div className="code-line indent-2">
          <span className="function">ship</span>(
          <span className="string">"clean code"</span>);
        </div>

        <div className="code-line indent-1">
          {"}"}
        </div>

        <div className="code-line">
          <span className="line-number">08</span>
          {"}"}
        </div>

        {/* Cursor */}
        <div className="code-cursor"></div>
      </div>

      {/* Technology Footer */}
      <div className="code-window-footer">
        <div className="code-stack">
          <span className="code-icon">&lt;/&gt;</span>
          <span>JAVA</span>
          <span>/</span>
          <span>SPRING</span>
          <span>/</span>
          <span>REACT</span>
        </div>

        <span className="code-page">01 — 04</span>
      </div>
    </div>
  );
}

export default CodeWindow;

