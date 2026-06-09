import { useEffect } from "react";
import { initPortfolio } from "../portfolio/app";
import "../portfolio/portfolio.css";

/**
 * Terminal + diary portfolio.
 * The static shell is rendered here; all page content, the boot
 * sequence, routing (#about, #projects, …) and interactions are
 * driven by src/portfolio/app.ts against this DOM.
 */
const Portfolio = () => {
  useEffect(() => {
    initPortfolio();
  }, []);

  return (
    <>
      {/* ============ TERMINAL (home) ============ */}
      <div id="terminal-screen" className="screen active">
        <div className="terminal">
          <div className="term-bar">
            <div className="term-dots">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="term-title">
              <b>jacqline&apos;s terminal</b>
            </div>
          </div>
          <div className="term-body" id="term-body"></div>
          <div className="hint" id="term-hint">
            type freely · click an option to enter
          </div>
        </div>
      </div>

      {/* ============ SITE (diary + notion nav) ============ */}
      <div id="site-screen" className="screen">
        <aside className="sidebar">
          <div className="brand" id="brand" title="back to terminal">
            <div className="brand-top">
              <div className="mark">j</div>
              <div className="n">Jacqline Geng</div>
            </div>
            <div className="r">finance · tech · creativity</div>
          </div>

          <div className="side-nav-wrap">
            <div className="side-nav" id="side-nav"></div>
          </div>

          <div className="side-foot">
            <div className="back-term" id="back-term">
              <span>↩</span>
              <span>back to terminal</span>
            </div>
            <div className="side-socials" id="side-socials"></div>
          </div>
        </aside>

        <main className="content">
          <div id="page-content"></div>
        </main>
      </div>
    </>
  );
};

export default Portfolio;
