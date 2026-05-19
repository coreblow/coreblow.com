const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CoreBlow — Coming Soon</title>
  <meta name="description" content="CoreBlow is under construction. Something powerful is coming." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #050508;
      --accent: #7c3aed;
      --accent2: #06b6d4;
      --text: #f0f0ff;
      --muted: #6b6b90;
    }

    body {
      font-family: 'Inter', system-ui, sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      -webkit-font-smoothing: antialiased;
    }

    /* Animated background orbs */
    .bg-orb {
      position: fixed;
      border-radius: 50%;
      filter: blur(120px);
      opacity: 0.18;
      pointer-events: none;
      animation: float 8s ease-in-out infinite;
    }
    .bg-orb-1 {
      width: 600px; height: 600px;
      background: var(--accent);
      top: -200px; left: -150px;
      animation-delay: 0s;
    }
    .bg-orb-2 {
      width: 500px; height: 500px;
      background: var(--accent2);
      bottom: -150px; right: -100px;
      animation-delay: -4s;
    }

    @keyframes float {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50%       { transform: translate(30px, -30px) scale(1.05); }
    }

    /* Grid overlay */
    .grid-bg {
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
      background-size: 60px 60px;
      pointer-events: none;
    }

    .container {
      position: relative;
      z-index: 10;
      text-align: center;
      padding: 2rem;
      max-width: 640px;
    }

    /* Badge */
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(124, 58, 237, 0.12);
      border: 1px solid rgba(124, 58, 237, 0.35);
      border-radius: 100px;
      padding: 6px 16px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #a78bfa;
      margin-bottom: 2rem;
      animation: fadeDown 0.6s ease both;
    }
    .badge-dot {
      width: 6px; height: 6px;
      background: #a78bfa;
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50%       { opacity: 0.5; transform: scale(0.7); }
    }

    /* Logo / Wordmark */
    .logo {
      font-size: clamp(52px, 10vw, 88px);
      font-weight: 900;
      letter-spacing: -0.05em;
      line-height: 1;
      background: linear-gradient(135deg, #fff 0%, #a78bfa 50%, #22d3ee 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1.25rem;
      animation: fadeDown 0.6s 0.1s ease both;
    }

    .tagline {
      font-size: clamp(15px, 2.5vw, 18px);
      color: var(--muted);
      font-weight: 400;
      line-height: 1.7;
      margin-bottom: 2.5rem;
      animation: fadeDown 0.6s 0.2s ease both;
    }

    /* Status pill */
    .status {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 12px;
      padding: 12px 24px;
      font-size: 14px;
      color: var(--muted);
      animation: fadeUp 0.6s 0.35s ease both;
    }
    .status-icon {
      font-size: 18px;
    }

    /* Animations */
    @keyframes fadeDown {
      from { opacity: 0; transform: translateY(-16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* Footer */
    .footer {
      position: fixed;
      bottom: 1.5rem;
      left: 0; right: 0;
      text-align: center;
      font-size: 12px;
      color: rgba(255,255,255,0.15);
      letter-spacing: 0.05em;
    }
  </style>
</head>
<body>
  <div class="bg-orb bg-orb-1"></div>
  <div class="bg-orb bg-orb-2"></div>
  <div class="grid-bg"></div>

  <div class="container">
    <div class="badge">
      <span class="badge-dot"></span>
      Under Construction
    </div>

    <div class="logo">CoreBlow</div>

    <p class="tagline">
      Something powerful is being built.<br />
      We'll be live very soon.
    </p>

    <div class="status">
      <span class="status-icon">🔧</span>
      <span>Our team is working hard — stay tuned.</span>
    </div>
  </div>

  <div class="footer">© 2025 CoreBlow · All rights reserved</div>
</body>
</html>`;

const MASCOT_SVG = `<svg class="uploaded-mascot-svg" viewBox="0 0 1254 1254" role="img" aria-label="CoreBlow octopus mascot" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="uploadedEyeGradient" cx="35%" cy="30%" r="70%">
      <stop offset="0" stop-color="#6c432a"/>
      <stop offset="0.5" stop-color="#452514"/>
      <stop offset="1" stop-color="#221006"/>
    </radialGradient>
  </defs>
  <style>
    .moving-eye-shine {
      animation: eye-look 4.8s ease-in-out infinite;
      transform-box: fill-box;
      transform-origin: center;
    }

    @keyframes eye-look {
      0%, 16%, 100% { transform: translate(0, 0); }
      31% { transform: translate(16px, -6px); }
      52% { transform: translate(-14px, 7px); }
      73% { transform: translate(10px, 10px); }
      86% { transform: translate(-7px, -5px); }
    }

    @media (prefers-reduced-motion: reduce) {
      .moving-eye-shine { animation: none; }
    }
  </style>

  <image href="/dev/mascot.png" width="1254" height="1254" preserveAspectRatio="xMidYMid meet"/>

  <g class="eye-layer">
    <circle cx="482" cy="596" r="57" fill="url(#uploadedEyeGradient)"/>
    <circle cx="746" cy="596" r="57" fill="url(#uploadedEyeGradient)"/>
    <g class="moving-eye-shine">
      <circle cx="470" cy="575" r="20" fill="#fff"/>
      <circle cx="734" cy="575" r="20" fill="#fff"/>
      <circle cx="470" cy="575" r="20" fill="none" stroke="#1c0d08" stroke-opacity="0.16" stroke-width="2"/>
      <circle cx="734" cy="575" r="20" fill="none" stroke="#1c0d08" stroke-opacity="0.16" stroke-width="2"/>
    </g>
  </g>
</svg>`;

const DEV_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CoreBlow - Personal AI Assistant</title>
  <meta name="description" content="CoreBlow is a personal AI assistant built to run real work across your tools." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #ffffff;
      --text: #202124;
      --ink: #202124;
      --muted: #5f6368;
      --soft: #5f6368;
      --panel: #ffffff;
      --line: rgba(60,64,67,0.14);
      --blue: #1a73e8;
      --green: #188038;
      --yellow: #fbbc04;
      --red: #ea4335;
      --coral: #ee6352;
      --cyan: #39d5ff;
    }

    html { min-height: 100%; background: var(--bg); }

    body {
      min-height: 100%;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: var(--text);
      background:
        radial-gradient(circle at 15% 8%, rgba(66,133,244,0.14), transparent 30%),
        radial-gradient(circle at 88% 12%, rgba(234,67,53,0.12), transparent 30%),
        radial-gradient(circle at 74% 74%, rgba(52,168,83,0.12), transparent 32%),
        linear-gradient(180deg, #ffffff 0%, #f8fbff 62%, #ffffff 100%);
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    .page {
      position: relative;
      min-height: 100svh;
      isolation: isolate;
    }

    .page::before,
    .page::after {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: -2;
    }

    .page::before {
      background-image:
        radial-gradient(circle, rgba(66,133,244,0.18) 0 1px, transparent 1.5px),
        radial-gradient(circle, rgba(234,67,53,0.14) 0 1px, transparent 1.5px),
        radial-gradient(circle, rgba(251,188,4,0.16) 0 1px, transparent 1.5px);
      background-position: 38px 46px, 220px 148px, 104px 286px;
      background-size: 190px 190px, 260px 260px, 330px 330px;
      opacity: 0.14;
    }

    .page::after {
      background:
        linear-gradient(rgba(60,64,67,0.018) 1px, transparent 1px),
        linear-gradient(90deg, rgba(60,64,67,0.018) 1px, transparent 1px);
      background-size: 96px 96px;
      mask-image: linear-gradient(to bottom, transparent, black 18%, black 78%, transparent);
      opacity: 0.36;
      z-index: -1;
    }

    .topbar {
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 24px;
      width: min(1160px, calc(100% - 40px));
      margin: 0 auto;
      padding: 14px 0;
      color: #3c4043;
      font-size: 14px;
      font-weight: 700;
      z-index: 20;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 8px;
      min-height: 44px;
      border: 1px solid rgba(218,220,224,0.95);
      background: rgba(255,255,255,0.9);
      padding: 4px;
      border-radius: 999px;
      backdrop-filter: blur(18px);
    }

    .nav-links a,
    .nav-action {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 34px;
      padding: 0 13px;
      border-radius: 999px;
      color: #5f6368;
      font-size: 13px;
      font-weight: 800;
      text-decoration: none;
      white-space: nowrap;
    }

    .nav-action {
      background: #1a73e8;
      color: #fff;
    }

    .nav-links a.nav-action {
      color: #fff;
    }

    .brand-mark-small {
      width: 20px;
      height: 20px;
      color: var(--blue);
    }

    .hero {
      min-height: 74svh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: min(1160px, calc(100% - 40px));
      margin: 0 auto;
      padding: 66px 0 34px;
      text-align: center;
    }

    .uploaded-mascot {
      width: 132px;
      height: 132px;
      margin-bottom: 24px;
      overflow: visible;
      filter:
        drop-shadow(0 18px 34px rgba(234,67,53,0.22))
        drop-shadow(0 0 22px rgba(26,115,232,0.1));
      animation:
        rise 700ms ease both,
        mascot-float 5.6s ease-in-out 900ms infinite;
    }

    .uploaded-mascot svg {
      display: block;
      width: 100%;
      height: 100%;
      overflow: visible;
    }

    .title {
      margin: 0;
      max-width: 980px;
      font-size: clamp(52px, 8vw, 104px);
      line-height: 1;
      font-weight: 900;
      letter-spacing: 0;
      color: #202124;
      text-shadow: none;
      animation: rise 700ms 70ms ease both;
    }

    .title-main {
      display: inline-block;
      background: none;
      -webkit-background-clip: initial;
      background-clip: initial;
      -webkit-text-fill-color: currentColor;
      color: #202124;
    }

    .tagline {
      margin-top: 28px;
      color: #3c4043;
      font-size: clamp(18px, 2vw, 24px);
      line-height: 1.55;
      font-weight: 800;
      text-transform: none;
      letter-spacing: 0;
      text-shadow: none;
      animation: rise 700ms 130ms ease both;
    }

    .description {
      width: min(820px, 100%);
      margin-top: 18px;
      color: #5f6368;
      font-size: clamp(17px, 1.9vw, 22px);
      line-height: 1.62;
      font-weight: 500;
      animation: rise 700ms 190ms ease both;
    }

    .browser-preview {
      width: min(1040px, calc(100% - 40px));
      margin: 0 auto 46px;
      overflow: hidden;
      border: 1px solid #dadce0;
      border-radius: 26px;
      background: #fff;
      color: #202124;
      box-shadow: 0 26px 80px rgba(60,64,67,0.18);
      animation: rise 700ms 320ms ease both;
    }

    .browser-bar {
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 14px;
      align-items: center;
      min-height: 56px;
      padding: 0 18px;
      border-bottom: 1px solid rgba(0,0,0,0.08);
      background: #f1f5f9;
    }

    .window-dots,
    .browser-icons {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .window-dots span {
      width: 11px;
      height: 11px;
      border-radius: 999px;
    }

    .window-dots span:nth-child(1) { background: var(--red); }
    .window-dots span:nth-child(2) { background: var(--yellow); }
    .window-dots span:nth-child(3) { background: var(--green); }

    .omnibox {
      min-width: 0;
      height: 36px;
      display: flex;
      align-items: center;
      gap: 10px;
      border-radius: 999px;
      background: #fff;
      padding: 0 14px;
      color: #5f6368;
      font-size: 14px;
      font-weight: 700;
      box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08);
    }

    .browser-icons span {
      width: 28px;
      height: 28px;
      border-radius: 999px;
      background: #fff;
      box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08);
    }

    .browser-canvas {
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      min-height: 310px;
      background:
        radial-gradient(circle at 18% 20%, rgba(234,67,53,0.16), transparent 34%),
        radial-gradient(circle at 90% 15%, rgba(26,115,232,0.18), transparent 32%),
        linear-gradient(135deg, #fff 0%, #f8fbff 100%);
    }

    .conversation-pane {
      padding: 34px;
      display: grid;
      align-content: center;
      gap: 16px;
    }

    .chat-row {
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }

    .chat-row.alt {
      justify-content: flex-end;
    }

    .chat-avatar {
      width: 38px;
      height: 38px;
      border-radius: 999px;
      background: linear-gradient(135deg, var(--red), var(--yellow));
      flex: none;
    }

    .chat-bubble {
      max-width: 74%;
      border-radius: 22px;
      padding: 14px 16px;
      background: #eef3ff;
      color: #202124;
      font-size: 15px;
      font-weight: 750;
      line-height: 1.42;
    }

    .chat-row.alt .chat-bubble {
      background: #e6f4ea;
      color: #174c2f;
    }

    .workflow-pane {
      position: relative;
      padding: 34px;
      display: grid;
      align-content: center;
      gap: 14px;
      border-left: 1px solid rgba(0,0,0,0.08);
      background: rgba(255,255,255,0.68);
    }

    .workflow-title {
      font-size: 13px;
      color: #5f6368;
      font-weight: 900;
      text-transform: uppercase;
    }

    .workflow-step {
      display: flex;
      align-items: center;
      gap: 12px;
      min-height: 52px;
      padding: 0 16px;
      border-radius: 999px;
      background: #fff;
      box-shadow: 0 10px 30px rgba(60,64,67,0.14);
      color: #202124;
      font-weight: 800;
    }

    .step-dot {
      width: 12px;
      height: 12px;
      border-radius: 999px;
      background: var(--blue);
    }

    .workflow-step:nth-of-type(3) .step-dot { background: var(--green); }
    .workflow-step:nth-of-type(4) .step-dot { background: var(--yellow); }
    .workflow-step:nth-of-type(5) .step-dot { background: var(--red); }

    .chrome-ring {
      position: absolute;
      right: 24px;
      top: 24px;
      width: 56px;
      height: 56px;
      border-radius: 999px;
      background:
        conic-gradient(var(--red) 0 25%, var(--yellow) 0 50%, var(--green) 0 75%, var(--blue) 0);
      opacity: 0.78;
    }

    .chrome-ring::after {
      content: "";
      position: absolute;
      inset: 16px;
      border-radius: 999px;
      background: #fff;
    }

    .teaser {
      width: min(1040px, calc(100% - 40px));
      margin: 0 auto 40px;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px;
    }

    .teaser-card {
      min-height: 116px;
      padding: 22px;
      border: 1px solid #dadce0;
      border-radius: 22px;
      background: #fff;
      box-shadow: 0 12px 34px rgba(60,64,67,0.1);
    }

    .teaser-label {
      color: var(--soft);
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0;
      margin-bottom: 12px;
    }

    .teaser-text {
      color: #202124;
      font-size: 17px;
      line-height: 1.45;
      font-weight: 700;
    }

    .footer {
      width: min(1120px, calc(100% - 40px));
      margin: 0 auto;
      padding: 0 0 28px;
      color: #5f6368;
      font-size: 13px;
      text-align: center;
    }

    @keyframes rise {
      from { opacity: 0; transform: translateY(14px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes mascot-float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-12px); }
    }

    @media (prefers-reduced-motion: reduce) {
      .uploaded-mascot {
        animation: rise 700ms ease both;
      }
    }

    @media (max-width: 760px) {
      .topbar {
        width: min(100% - 28px, 1120px);
        padding-top: 12px;
        display: none;
      }

      .nav-links { display: none; }

      .hero {
        width: calc(100% - 28px);
        min-height: 74svh;
        padding: 58px 0 30px;
      }

      .uploaded-mascot {
        width: 110px;
        height: 110px;
        margin-bottom: 24px;
      }

      .title { font-size: 56px; }

      .tagline {
        margin-top: 20px;
        font-size: 14px;
      }

      .description {
        margin-top: 20px;
        font-size: 17px;
        line-height: 1.58;
      }

      .browser-preview {
        width: calc(100% - 28px);
        border-radius: 18px;
      }

      .browser-bar {
        grid-template-columns: auto 1fr;
      }

      .browser-icons { display: none; }

      .omnibox {
        font-size: 12px;
      }

      .browser-canvas {
        grid-template-columns: 1fr;
      }

      .conversation-pane,
      .workflow-pane {
        padding: 24px;
      }

      .workflow-pane {
        border-left: 0;
        border-top: 1px solid rgba(0,0,0,0.08);
      }

      .teaser {
        width: calc(100% - 28px);
        grid-template-columns: 1fr;
      }

      .teaser-card { min-height: auto; }
    }
  </style>
</head>
<body>
  <main class="page">
    <header class="topbar" aria-label="CoreBlow preview header">
      <nav class="nav-links" aria-label="CoreBlow sections">
        <a href="#agents">Agents</a>
        <a href="#plugins">Plugins</a>
        <a href="#gateway">Gateway</a>
        <a class="nav-action" href="https://github.com/coreblow/coreblow">GitHub</a>
      </nav>
    </header>

    <header class="hero" aria-labelledby="hero-title">
      <div class="uploaded-mascot" aria-hidden="true">
        ${MASCOT_SVG}
      </div>
      <h1 class="title" id="hero-title">
        <span class="title-main">CoreBlow</span>
      </h1>
      <p class="tagline" id="tagline">The personal AI that actually does things.</p>
      <p class="description">
        Clears your queue, sends messages, runs tools, and remembers your workflows.<br />
        All from the chat surfaces and local systems you already use.
      </p>
    </header>

    <section class="browser-preview" aria-label="CoreBlow browser preview">
      <div class="browser-bar">
        <div class="window-dots" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="omnibox">
          <span>coreblow.local</span>
          <span>/agent/run</span>
        </div>
        <div class="browser-icons" aria-hidden="true"><span></span><span></span><span></span></div>
      </div>
      <div class="browser-canvas">
        <div class="conversation-pane">
          <div class="chat-row">
            <div class="chat-avatar" aria-hidden="true"></div>
            <div class="chat-bubble">Check what needs attention and draft the next replies.</div>
          </div>
          <div class="chat-row alt">
            <div class="chat-bubble">Inbox scanned. Three replies drafted, calendar conflict found, plugin hook ready.</div>
          </div>
        </div>
        <div class="workflow-pane">
          <div class="chrome-ring" aria-hidden="true"></div>
          <div class="workflow-title">Active workflow</div>
          <div class="workflow-step"><span class="step-dot"></span><span>Read messages</span></div>
          <div class="workflow-step"><span class="step-dot"></span><span>Recall memory</span></div>
          <div class="workflow-step"><span class="step-dot"></span><span>Run plugins</span></div>
          <div class="workflow-step"><span class="step-dot"></span><span>Ask before send</span></div>
        </div>
      </div>
    </section>

    <section class="teaser" aria-label="CoreBlow capabilities">
      <article class="teaser-card" id="agents">
        <div class="teaser-label">Agents</div>
        <div class="teaser-text">OOP runtimes, memory, and tool execution built for self-hosted control.</div>
      </article>
      <article class="teaser-card" id="plugins">
        <div class="teaser-label">Plugins</div>
        <div class="teaser-text">Registries, hooks, and third-party extension points from day one.</div>
      </article>
      <article class="teaser-card" id="gateway">
        <div class="teaser-label">Gateway</div>
        <div class="teaser-text">HTTP and WebSocket surfaces for chat apps, services, and local automation.</div>
      </article>
    </section>

    <footer class="footer">&copy; 2026 CoreBlow. Built for people who want their assistant under their own control.</footer>
  </main>
</body>
</html>`;

const COREHUB_CATALOG = [
  {
    id: "coreblow",
    kind: "plugin",
    name: "CoreBlow Bundled Plugins",
    summary: "Bundled plugin source shipped with the CoreBlow core runtime.",
    source: "https://github.com/coreblow/coreblow",
  },
  {
    id: "corehub-directory",
    kind: "skill",
    name: "CoreHub Directory Metadata",
    summary: "Reference skill entry documenting CoreHub submission, review, and search metadata.",
    source: "https://github.com/coreblow/corehub",
  },
  {
    id: "plugin-lab",
    kind: "plugin",
    name: "Plugin Lab",
    summary: "Compatibility lab for CoreBlow community plugins and plugin API contracts.",
    source: "https://github.com/coreblow/plugin-lab",
  },
];

const COREHUB_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CoreHub | CoreBlow Skill and Plugin Directory</title>
  <meta name="description" content="CoreHub is the CoreBlow directory for skills, plugins, providers, channels, review metadata, and compatibility information." />
  <style>
    *, *::before, *::after { box-sizing: border-box; }

    :root {
      --bg: #f8fafc;
      --surface: #ffffff;
      --surface-2: #eef2f7;
      --text: #111827;
      --muted: #5b6472;
      --line: #d9e0ea;
      --accent: #0f766e;
      --accent-2: #1d4ed8;
      --shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
    }

    body {
      margin: 0;
      min-height: 100vh;
      background: var(--bg);
      color: var(--text);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    a { color: inherit; }

    .shell {
      width: min(1160px, calc(100% - 40px));
      margin: 0 auto;
    }

    .topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 22px 0;
      border-bottom: 1px solid var(--line);
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      font-weight: 750;
    }

    .mark {
      display: grid;
      place-items: center;
      width: 34px;
      height: 34px;
      border-radius: 8px;
      background: #111827;
      color: #fff;
      font-size: 13px;
      letter-spacing: 0;
    }

    .nav {
      display: flex;
      align-items: center;
      gap: 18px;
      color: var(--muted);
      font-size: 14px;
    }

    .nav a {
      text-decoration: none;
    }

    .hero {
      display: grid;
      grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
      gap: 42px;
      align-items: center;
      padding: 70px 0 54px;
    }

    .eyebrow {
      margin: 0 0 18px;
      color: var(--accent);
      font-size: 13px;
      font-weight: 750;
      text-transform: uppercase;
    }

    h1 {
      margin: 0;
      max-width: 760px;
      font-size: clamp(44px, 7vw, 76px);
      line-height: 0.95;
      letter-spacing: 0;
    }

    .lead {
      margin: 24px 0 0;
      max-width: 680px;
      color: var(--muted);
      font-size: 19px;
      line-height: 1.65;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 30px;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      padding: 0 18px;
      border-radius: 8px;
      border: 1px solid var(--line);
      background: var(--surface);
      color: var(--text);
      font-weight: 700;
      text-decoration: none;
      box-shadow: 0 1px 0 rgba(15, 23, 42, 0.04);
    }

    .button.primary {
      border-color: #111827;
      background: #111827;
      color: #fff;
    }

    .panel {
      border: 1px solid var(--line);
      border-radius: 8px;
      background: var(--surface);
      box-shadow: var(--shadow);
      overflow: hidden;
    }

    .panel-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 18px;
      border-bottom: 1px solid var(--line);
      background: var(--surface-2);
      color: var(--muted);
      font-size: 13px;
      font-weight: 700;
    }

    .row {
      display: grid;
      grid-template-columns: 90px minmax(0, 1fr);
      gap: 16px;
      padding: 18px;
      border-bottom: 1px solid var(--line);
    }

    .row:last-child { border-bottom: 0; }

    .kind {
      width: fit-content;
      height: 28px;
      padding: 0 10px;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      background: #e0f2fe;
      color: #075985;
      font-size: 12px;
      font-weight: 750;
    }

    .kind.plugin {
      background: #dcfce7;
      color: #166534;
    }

    .entry-title {
      margin: 0;
      font-size: 16px;
      font-weight: 800;
    }

    .entry-copy {
      margin: 6px 0 0;
      color: var(--muted);
      line-height: 1.5;
      font-size: 14px;
    }

    .section {
      padding: 34px 0;
    }

    .section h2 {
      margin: 0 0 14px;
      font-size: 28px;
      letter-spacing: 0;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 16px;
      margin-top: 20px;
    }

    .tile {
      min-height: 170px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: var(--surface);
      padding: 22px;
    }

    .tile h3 {
      margin: 0;
      font-size: 18px;
    }

    .tile p {
      margin: 12px 0 0;
      color: var(--muted);
      line-height: 1.55;
    }

    .footer {
      margin-top: 34px;
      padding: 26px 0 34px;
      border-top: 1px solid var(--line);
      color: var(--muted);
      font-size: 13px;
    }

    @media (max-width: 860px) {
      .topbar {
        align-items: flex-start;
        gap: 18px;
        flex-direction: column;
      }

      .nav {
        flex-wrap: wrap;
      }

      .hero {
        grid-template-columns: 1fr;
        padding-top: 42px;
      }

      .grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="shell">
    <header class="topbar">
      <a class="brand" href="/">
        <span class="mark">CB</span>
        <span>CoreBlow</span>
      </a>
      <nav class="nav" aria-label="CoreHub navigation">
        <a href="/corehub">CoreHub</a>
        <a href="https://github.com/coreblow/corehub">GitHub</a>
        <a href="https://docs.coreblow.com">Docs</a>
        <a href="/health">Status</a>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div>
          <p class="eyebrow">CoreHub Directory</p>
          <h1>Skills and plugins for the CoreBlow runtime.</h1>
          <p class="lead">
            CoreHub is the public directory contract for CoreBlow skills, plugins, providers, channels, review metadata, and compatibility information.
          </p>
          <div class="actions">
            <a class="button primary" href="https://github.com/coreblow/corehub">View Repository</a>
            <a class="button" href="/corehub/catalog.json">Catalog JSON</a>
          </div>
        </div>

        <aside class="panel" aria-label="Featured CoreHub entries">
          <div class="panel-head">
            <span>Featured entries</span>
            <span>verified</span>
          </div>
          ${COREHUB_CATALOG.map(
            (entry) => `<div class="row">
              <div><span class="kind ${entry.kind}">${entry.kind}</span></div>
              <div>
                <p class="entry-title">${entry.name}</p>
                <p class="entry-copy">${entry.summary}</p>
              </div>
            </div>`,
          ).join("")}
        </aside>
      </section>

      <section class="section" aria-label="CoreHub capabilities">
        <h2>Directory surfaces</h2>
        <div class="grid">
          <article class="tile">
            <h3>Skills</h3>
            <p>Agent instruction packs with declared runtime requirements, review metadata, and deterministic fingerprints.</p>
          </article>
          <article class="tile">
            <h3>Plugins</h3>
            <p>CoreBlow extension metadata for bundled and community plugin surfaces without moving canonical source ownership.</p>
          </article>
          <article class="tile">
            <h3>Compatibility</h3>
            <p>Version, platform, provider, channel, and review state data designed for CI and future hosted APIs.</p>
          </article>
        </div>
      </section>
    </main>

    <footer class="footer">CoreHub lives at coreblow.com/corehub and is maintained in github.com/coreblow/corehub.</footer>
  </div>
</body>
</html>`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'ok' }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (url.pathname === '/dev') {
      return new Response(DEV_HTML, {
        headers: {
          'Content-Type': 'text/html;charset=UTF-8',
          'Cache-Control': 'no-store',
        },
      });
    }

    if (url.pathname === '/dev/mascot.png') {
      if (env?.ASSETS) {
        return env.ASSETS.fetch(request);
      }

      return new Response('Local asset server is not enabled. Restart wrangler with --assets public.', {
        status: 404,
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
      });
    }

    if (url.pathname === '/dev/mascot.svg') {
      return new Response(MASCOT_SVG, {
        headers: {
          'Content-Type': 'image/svg+xml;charset=UTF-8',
          'Cache-Control': 'no-store',
        },
      });
    }

    if (url.pathname === '/corehub/catalog.json') {
      return new Response(JSON.stringify(COREHUB_CATALOG, null, 2), {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Cache-Control': 'public, max-age=300',
        },
      });
    }

    if (url.pathname === '/corehub' || url.pathname === '/corehub/') {
      return new Response(COREHUB_HTML, {
        headers: {
          'Content-Type': 'text/html;charset=UTF-8',
          'Cache-Control': 'public, max-age=300',
        },
      });
    }

    return new Response(HTML, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Cache-Control': 'public, max-age=300',
      },
    });
  },
};
