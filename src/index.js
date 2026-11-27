import { COREHUB_CATALOG } from "./corehub-catalog.generated.js";

const HTML = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>CoreBlow — Sovereign Autonomous Agent-OS</title>\n  <meta name=\"description\" content=\"CoreBlow v2.4.0 Sovereign Agent-OS. 12-Service Hybrid OOP/DOP Microkernel, Cory 4-Layer Memory & Wiki, Closed-Loop EvoLoop Skill Synthesis, Multi-Agent War Rooms, and Native macOS Studio.\" />\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n  <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap\" rel=\"stylesheet\" />\n  <style>\n    :root {\n      --bg-base: #050D12;\n      --bg-slate: #08171C;\n      --bg-teal: #0A2429;\n      --bg-card: rgba(10, 36, 41, 0.55);\n      --bg-card-hover: rgba(14, 46, 52, 0.75);\n      --accent-cyan: #60D9CC;\n      --accent-teal: #10B981;\n      --accent-ice: #99F6E4;\n      --text-main: #F1F5F9;\n      --text-muted: #94A3B8;\n      --text-dim: #64748B;\n      --border-subtle: rgba(96, 217, 204, 0.14);\n      --border-active: rgba(96, 217, 204, 0.4);\n      --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;\n      --font-mono: 'JetBrains Mono', ui-monospace, monospace;\n    }\n\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n\n    body {\n      background: radial-gradient(circle at 50% 0%, #0c2b31 0%, #08171c 45%, #050d12 100%);\n      color: var(--text-main);\n      font-family: var(--font-sans);\n      min-height: 100vh;\n      line-height: 1.6;\n      -webkit-font-smoothing: antialiased;\n      overflow-x: hidden;\n    }\n\n    .noise-bg {\n      position: fixed;\n      inset: 0;\n      background: radial-gradient(circle at 20% 20%, rgba(96, 217, 204, 0.05) 0%, transparent 50%),\n                  radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.04) 0%, transparent 50%);\n      pointer-events: none;\n      z-index: 0;\n    }\n\n    .container {\n      max-width: 1200px;\n      margin: 0 auto;\n      padding: 0 24px;\n      position: relative;\n      z-index: 1;\n    }\n\n    /* Header Nav */\n    header {\n      position: sticky;\n      top: 0;\n      backdrop-filter: blur(24px) saturate(140%);\n      -webkit-backdrop-filter: blur(24px) saturate(140%);\n      background: rgba(5, 13, 18, 0.85);\n      border-bottom: 1px solid var(--border-subtle);\n      z-index: 100;\n      padding: 16px 0;\n    }\n\n    .header-inner {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n\n    .brand {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      text-decoration: none;\n      color: inherit;\n    }\n\n    .brand-logo {\n      width: 34px;\n      height: 34px;\n      background: linear-gradient(135deg, rgba(96, 217, 204, 0.25), rgba(16, 185, 129, 0.25));\n      border: 1px solid var(--border-active);\n      border-radius: 9px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: var(--accent-cyan);\n    }\n\n    .brand-name {\n      font-weight: 700;\n      font-size: 1.15rem;\n      letter-spacing: -0.02em;\n    }\n\n    .brand-badge {\n      font-size: 0.7rem;\n      font-family: var(--font-mono);\n      padding: 2px 8px;\n      border-radius: 999px;\n      background: rgba(96, 217, 204, 0.12);\n      border: 1px solid rgba(96, 217, 204, 0.3);\n      color: var(--accent-cyan);\n    }\n\n    nav.nav-links {\n      display: flex;\n      align-items: center;\n      gap: 28px;\n    }\n\n    nav.nav-links a {\n      color: var(--text-muted);\n      text-decoration: none;\n      font-size: 0.9rem;\n      font-weight: 500;\n      transition: color 0.2s;\n    }\n\n    nav.nav-links a:hover {\n      color: var(--accent-cyan);\n    }\n\n    .btn-nav-install {\n      background: var(--bg-card);\n      border: 1px solid var(--border-subtle);\n      color: var(--accent-cyan);\n      font-family: var(--font-mono);\n      font-size: 0.8rem;\n      padding: 7px 16px;\n      border-radius: 8px;\n      text-decoration: none;\n      transition: all 0.2s;\n    }\n\n    .btn-nav-install:hover {\n      background: rgba(96, 217, 204, 0.15);\n      border-color: var(--border-active);\n    }\n\n    /* Hero */\n    .hero {\n      padding: 80px 0 50px;\n      text-align: center;\n    }\n\n    .hero-badge {\n      display: inline-flex;\n      align-items: center;\n      gap: 8px;\n      padding: 6px 18px;\n      border-radius: 999px;\n      background: rgba(10, 36, 41, 0.85);\n      border: 1px solid var(--border-subtle);\n      font-family: var(--font-mono);\n      font-size: 0.8rem;\n      color: var(--accent-cyan);\n      margin-bottom: 24px;\n      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);\n    }\n\n    .hero-badge-dot {\n      width: 7px;\n      height: 7px;\n      border-radius: 50%;\n      background: var(--accent-teal);\n      box-shadow: 0 0 10px var(--accent-teal);\n    }\n\n    .hero-title {\n      font-size: clamp(2.5rem, 5.5vw, 4.4rem);\n      font-weight: 900;\n      letter-spacing: -0.04em;\n      line-height: 1.08;\n      margin-bottom: 22px;\n      background: linear-gradient(180deg, #FFFFFF 30%, #A5B4FC 100%);\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n    }\n\n    .hero-subtitle {\n      font-size: clamp(1rem, 2vw, 1.25rem);\n      color: var(--text-muted);\n      max-width: 840px;\n      margin: 0 auto 36px;\n      font-weight: 400;\n    }\n\n    /* Installer Box */\n    .installer-box {\n      max-width: 640px;\n      margin: 0 auto 32px;\n      background: rgba(10, 36, 41, 0.85);\n      border: 1px solid var(--border-subtle);\n      border-radius: 12px;\n      overflow: hidden;\n      box-shadow: 0 16px 48px rgba(0, 0, 0, 0.55);\n    }\n\n    .installer-tabs {\n      display: flex;\n      border-bottom: 1px solid var(--border-subtle);\n      background: rgba(5, 13, 18, 0.6);\n    }\n\n    .installer-tab {\n      padding: 8px 18px;\n      font-size: 0.78rem;\n      font-family: var(--font-mono);\n      color: var(--text-muted);\n      background: none;\n      border: none;\n      cursor: pointer;\n      transition: all 0.2s;\n    }\n\n    .installer-tab.active {\n      color: var(--accent-cyan);\n      background: rgba(96, 217, 204, 0.08);\n      border-bottom: 2px solid var(--accent-cyan);\n    }\n\n    .installer-code-row {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 14px 18px;\n      font-family: var(--font-mono);\n      font-size: 0.85rem;\n    }\n\n    .installer-cmd {\n      color: #E2E8F0;\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      overflow-x: auto;\n    }\n\n    .installer-prompt-symbol {\n      color: var(--accent-cyan);\n      user-select: none;\n    }\n\n    .btn-copy {\n      background: rgba(255, 255, 255, 0.06);\n      border: 1px solid rgba(255, 255, 255, 0.1);\n      color: var(--text-muted);\n      padding: 6px 12px;\n      border-radius: 6px;\n      cursor: pointer;\n      font-size: 0.75rem;\n      font-family: var(--font-sans);\n      transition: all 0.2s;\n      flex-shrink: 0;\n    }\n\n    .btn-copy:hover {\n      background: rgba(96, 217, 204, 0.15);\n      border-color: var(--border-active);\n      color: var(--accent-cyan);\n    }\n\n    /* CTA buttons */\n    .cta-group {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 16px;\n      flex-wrap: wrap;\n      margin-bottom: 60px;\n    }\n\n    .btn-primary {\n      background: linear-gradient(135deg, #10B981, #0EA5E9);\n      color: #050D12;\n      font-weight: 700;\n      font-size: 0.95rem;\n      padding: 12px 26px;\n      border-radius: 10px;\n      text-decoration: none;\n      transition: transform 0.2s, box-shadow 0.2s;\n      box-shadow: 0 4px 20px rgba(16, 185, 129, 0.35);\n    }\n\n    .btn-primary:hover {\n      transform: translateY(-1px);\n      box-shadow: 0 6px 28px rgba(16, 185, 129, 0.5);\n    }\n\n    .btn-secondary {\n      background: var(--bg-card);\n      border: 1px solid var(--border-subtle);\n      color: var(--text-main);\n      font-weight: 600;\n      font-size: 0.95rem;\n      padding: 12px 24px;\n      border-radius: 10px;\n      text-decoration: none;\n      transition: all 0.2s;\n    }\n\n    .btn-secondary:hover {\n      border-color: var(--border-active);\n      background: var(--bg-card-hover);\n      color: var(--accent-cyan);\n    }\n\n    /* CoreBlow Studio 3-Pane Preview Window */\n    .studio-preview {\n      margin: 10px auto 80px;\n      background: rgba(8, 23, 28, 0.85);\n      backdrop-filter: blur(48px);\n      -webkit-backdrop-filter: blur(48px);\n      border: 1px solid var(--border-subtle);\n      border-radius: 16px;\n      overflow: hidden;\n      box-shadow: 0 32px 80px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(96, 217, 204, 0.12);\n      text-align: left;\n    }\n\n    .studio-titlebar {\n      height: 40px;\n      background: rgba(5, 13, 18, 0.8);\n      border-bottom: 1px solid var(--border-subtle);\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 0 16px;\n    }\n\n    .traffic-lights {\n      display: flex;\n      gap: 8px;\n    }\n\n    .light {\n      width: 12px;\n      height: 12px;\n      border-radius: 50%;\n    }\n    .light-red { background: #FF5F56; }\n    .light-yellow { background: #FFBD2E; }\n    .light-green { background: #27C93F; }\n\n    .studio-title {\n      font-size: 0.75rem;\n      font-family: var(--font-mono);\n      color: var(--text-muted);\n    }\n\n    .studio-status-chip {\n      font-size: 0.7rem;\n      font-family: var(--font-mono);\n      color: var(--accent-cyan);\n      background: rgba(96, 217, 204, 0.1);\n      padding: 3px 10px;\n      border-radius: 6px;\n      border: 1px solid rgba(96, 217, 204, 0.25);\n    }\n\n    .studio-panes {\n      display: grid;\n      grid-template-columns: 240px 1fr 340px;\n      min-height: 520px;\n    }\n\n    /* Left Sidebar */\n    .studio-sidebar {\n      background: rgba(6, 17, 21, 0.78);\n      border-right: 1px solid var(--border-subtle);\n      padding: 16px 12px;\n      font-size: 0.8rem;\n    }\n\n    .sidebar-section-title {\n      font-size: 0.65rem;\n      font-weight: 700;\n      color: var(--text-dim);\n      text-transform: uppercase;\n      letter-spacing: 0.05em;\n      margin-bottom: 8px;\n      padding: 0 8px;\n    }\n\n    .sidebar-item {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      padding: 6px 10px;\n      border-radius: 6px;\n      color: var(--text-muted);\n      cursor: pointer;\n      margin-bottom: 3px;\n      font-size: 0.78rem;\n    }\n\n    .sidebar-item.active {\n      background: rgba(96, 217, 204, 0.12);\n      color: var(--accent-cyan);\n      font-weight: 600;\n    }\n\n    /* Center Canvas */\n    .studio-canvas {\n      padding: 24px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      background: radial-gradient(circle at 50% 30%, rgba(10, 36, 41, 0.45) 0%, rgba(5, 13, 18, 0.95) 100%);\n    }\n\n    .canvas-center {\n      margin: auto 0;\n      text-align: center;\n    }\n\n    .canvas-emblem {\n      width: 58px;\n      height: 58px;\n      border-radius: 16px;\n      background: linear-gradient(135deg, rgba(96, 217, 204, 0.25), rgba(16, 185, 129, 0.2));\n      border: 1px solid var(--border-active);\n      margin: 0 auto 16px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: var(--accent-cyan);\n      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\n    }\n\n    .canvas-heading {\n      font-size: 1.55rem;\n      font-weight: 700;\n      color: #FFF;\n      margin-bottom: 8px;\n      letter-spacing: -0.02em;\n    }\n\n    .canvas-sub {\n      font-size: 0.85rem;\n      color: var(--text-muted);\n      max-width: 480px;\n      margin: 0 auto;\n    }\n\n    /* Floating Composer */\n    .composer-box {\n      background: rgba(10, 36, 41, 0.9);\n      border: 1px solid var(--border-active);\n      border-radius: 12px;\n      padding: 14px;\n      box-shadow: 0 14px 36px rgba(0, 0, 0, 0.65);\n    }\n\n    .composer-chips {\n      display: flex;\n      gap: 8px;\n      margin-bottom: 10px;\n    }\n\n    .context-chip {\n      font-size: 0.72rem;\n      font-family: var(--font-mono);\n      background: rgba(255, 255, 255, 0.05);\n      border: 1px solid var(--border-subtle);\n      padding: 3px 8px;\n      border-radius: 5px;\n      color: var(--accent-cyan);\n    }\n\n    .composer-input {\n      font-size: 0.88rem;\n      color: var(--text-dim);\n      padding: 4px 0 12px;\n    }\n\n    .composer-actions {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      border-top: 1px solid rgba(255, 255, 255, 0.06);\n      padding-top: 10px;\n    }\n\n    .composer-tier {\n      font-size: 0.72rem;\n      font-family: var(--font-mono);\n      color: var(--accent-teal);\n      display: flex;\n      align-items: center;\n      gap: 6px;\n    }\n\n    .tier-dot {\n      width: 6px;\n      height: 6px;\n      border-radius: 50%;\n      background: var(--accent-teal);\n    }\n\n    /* Right Inspector */\n    .studio-inspector {\n      background: rgba(6, 17, 21, 0.85);\n      border-left: 1px solid var(--border-subtle);\n      padding: 16px;\n      font-size: 0.8rem;\n    }\n\n    .gate-card {\n      background: rgba(10, 36, 41, 0.55);\n      border: 1px solid var(--border-subtle);\n      border-radius: 8px;\n      padding: 14px;\n      margin-bottom: 14px;\n    }\n\n    .gate-title {\n      font-weight: 700;\n      color: var(--accent-cyan);\n      margin-bottom: 10px;\n      font-size: 0.75rem;\n      text-transform: uppercase;\n      letter-spacing: 0.05em;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n\n    .gate-item {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 5px 0;\n      font-family: var(--font-mono);\n      font-size: 0.72rem;\n      color: var(--text-muted);\n      border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n    }\n\n    .gate-item:last-child {\n      border-bottom: none;\n    }\n\n    .gate-item span.status {\n      color: var(--accent-teal);\n      font-weight: 600;\n    }\n\n    /* 6-Card Grid */\n    .grid-section {\n      padding: 40px 0 80px;\n    }\n\n    .section-header {\n      text-align: center;\n      margin-bottom: 52px;\n    }\n\n    .section-tag {\n      font-family: var(--font-mono);\n      font-size: 0.78rem;\n      color: var(--accent-cyan);\n      text-transform: uppercase;\n      letter-spacing: 0.08em;\n      margin-bottom: 10px;\n    }\n\n    .section-title {\n      font-size: 2.3rem;\n      font-weight: 800;\n      letter-spacing: -0.03em;\n    }\n\n    .feature-grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));\n      gap: 24px;\n    }\n\n    .feature-card {\n      background: var(--bg-card);\n      border: 1px solid var(--border-subtle);\n      border-radius: 14px;\n      padding: 30px;\n      transition: all 0.25s ease;\n      position: relative;\n    }\n\n    .feature-card:hover {\n      background: var(--bg-card-hover);\n      border-color: var(--border-active);\n      transform: translateY(-2px);\n    }\n\n    .feature-icon {\n      font-size: 1.8rem;\n      margin-bottom: 16px;\n      display: inline-block;\n    }\n\n    .feature-name {\n      font-size: 1.18rem;\n      font-weight: 700;\n      margin-bottom: 10px;\n      color: var(--text-main);\n    }\n\n    .feature-desc {\n      font-size: 0.88rem;\n      color: var(--text-muted);\n      line-height: 1.6;\n    }\n\n    /* Omni-Platform Surfaces Bar */\n    .surfaces-section {\n      padding: 40px 0 80px;\n      border-top: 1px solid var(--border-subtle);\n    }\n\n    .surfaces-title {\n      text-align: center;\n      font-size: 0.85rem;\n      font-family: var(--font-mono);\n      color: var(--text-dim);\n      text-transform: uppercase;\n      letter-spacing: 0.08em;\n      margin-bottom: 24px;\n    }\n\n    .surfaces-badges {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 16px;\n      flex-wrap: wrap;\n    }\n\n    .surface-badge {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      background: rgba(10, 36, 41, 0.65);\n      border: 1px solid var(--border-subtle);\n      padding: 9px 18px;\n      border-radius: 8px;\n      font-size: 0.82rem;\n      color: var(--text-muted);\n      font-weight: 500;\n    }\n\n    .surface-badge span.dot {\n      width: 6px;\n      height: 6px;\n      border-radius: 50%;\n      background: var(--accent-teal);\n    }\n\n    /* Footer */\n    footer {\n      border-top: 1px solid var(--border-subtle);\n      padding: 48px 0;\n      background: rgba(5, 13, 18, 0.95);\n      font-size: 0.85rem;\n      color: var(--text-dim);\n    }\n\n    .footer-inner {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      flex-wrap: wrap;\n      gap: 20px;\n    }\n\n    .footer-links {\n      display: flex;\n      gap: 28px;\n    }\n\n    .footer-links a {\n      color: var(--text-muted);\n      text-decoration: none;\n      transition: color 0.2s;\n    }\n\n    .footer-links a:hover {\n      color: var(--accent-cyan);\n    }\n\n    @media (max-width: 960px) {\n      .studio-panes { grid-template-columns: 1fr; }\n      .studio-sidebar, .studio-inspector { display: none; }\n      nav.nav-links { display: none; }\n    }\n  </style>\n</head>\n<body>\n  <div class=\"noise-bg\"></div>\n\n  <!-- Header -->\n  <header>\n    <div class=\"container header-inner\">\n      <a href=\"/\" class=\"brand\">\n        <div class=\"brand-logo\">\n          <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n            <path d=\"M12 2L2 7l10 5 10-5-10-5z\"/><path d=\"M2 17l10 5 10-5\"/><path d=\"M2 12l10 5 10-5\"/>\n          </svg>\n        </div>\n        <span class=\"brand-name\">CoreBlow</span>\n        <span class=\"brand-badge\">v2.4.0 GA</span>\n      </a>\n\n      <nav class=\"nav-links\">\n        <a href=\"#studio\">Studio (macOS)</a>\n        <a href=\"#microkernel\">Microkernel</a>\n        <a href=\"/corehub\">CoreHub Store</a>\n        <a href=\"https://docs.coreblow.com\" target=\"_blank\" rel=\"noopener\">Documentation</a>\n        <a href=\"https://github.com/coreblow/coreblow\" target=\"_blank\" rel=\"noopener\">GitHub</a>\n      </nav>\n\n      <a href=\"/install.sh\" class=\"btn-nav-install\">curl install.sh</a>\n    </div>\n  </header>\n\n  <!-- Hero -->\n  <section class=\"hero\">\n    <div class=\"container\">\n      <div class=\"hero-badge\">\n        <span class=\"hero-badge-dot\"></span>\n        <span>CoreBlow v2.4.0 Sovereign GA · &lt; 1ms Microkernel Boot</span>\n      </div>\n\n      <h1 class=\"hero-title\">The Sovereign<br/>Autonomous Agent-OS.</h1>\n\n      <p class=\"hero-subtitle\">\n        12-Service Hybrid OOP/DOP Microkernel, Cory 4-Layer Memory &amp; Wiki, Closed-Loop EvoLoop Skill Synthesis, Multi-Agent War Rooms, and Native macOS Studio (⌥ + Space).\n      </p>\n\n      <!-- One-line Install Box -->\n      <div class=\"installer-box\">\n        <div class=\"installer-tabs\">\n          <button class=\"installer-tab active\" id=\"tabCurl\" onclick=\"switchInstallerTab('curl')\">macOS / Linux (curl)</button>\n          <button class=\"installer-tab\" id=\"tabWin\" onclick=\"switchInstallerTab('win')\">Windows (PowerShell)</button>\n          <button class=\"installer-tab\" id=\"tabNpm\" onclick=\"switchInstallerTab('npm')\">npm global</button>\n        </div>\n        <div class=\"installer-code-row\">\n          <div class=\"installer-cmd\">\n            <span class=\"installer-prompt-symbol\">$</span>\n            <span id=\"cmdText\">curl -fsSL https://coreblow.com/install.sh | bash</span>\n          </div>\n          <button class=\"btn-copy\" id=\"copyBtn\" onclick=\"copyInstallerCmd()\">Copy</button>\n        </div>\n      </div>\n\n      <!-- CTA Buttons -->\n      <div class=\"cta-group\">\n        <a href=\"/corehub\" class=\"btn-primary\">Explore CoreHub Store</a>\n        <a href=\"https://docs.coreblow.com\" class=\"btn-secondary\" target=\"_blank\" rel=\"noopener\">Read Documentation</a>\n        <a href=\"https://github.com/coreblow/coreblow\" class=\"btn-secondary\" target=\"_blank\" rel=\"noopener\">View GitHub</a>\n      </div>\n\n      <!-- CoreBlow Studio 3-Pane Preview Window -->\n      <div class=\"studio-preview\" id=\"studio\">\n        <div class=\"studio-titlebar\">\n          <div class=\"traffic-lights\">\n            <span class=\"light light-red\"></span>\n            <span class=\"light light-yellow\"></span>\n            <span class=\"light light-green\"></span>\n          </div>\n          <div class=\"studio-title\">CoreBlow Studio — Native macOS 3-Pane Autonomous Workspace</div>\n          <div class=\"studio-status-chip\">Microkernel Ready · Apple Silicon</div>\n        </div>\n\n        <div class=\"studio-panes\">\n          <!-- Pane 1: Project & War Room Sidebar -->\n          <div class=\"studio-sidebar\">\n            <div class=\"sidebar-section-title\">Projects &amp; Worktrees</div>\n            <div class=\"sidebar-item active\">📁 coreblow <span style=\"margin-left:auto;font-size:0.68rem;color:var(--accent-teal);\">● active</span></div>\n            <div class=\"sidebar-item\">📁 tradingview</div>\n            <div class=\"sidebar-item\">📁 dxm-scanner</div>\n            <div class=\"sidebar-item\">📁 coreblow.com</div>\n\n            <div class=\"sidebar-section-title\" style=\"margin-top:20px;\">Autonomous Swarms</div>\n            <div class=\"sidebar-item\">⚔️ War Room Swarm (4 Agents)</div>\n            <div class=\"sidebar-item\">🛡️ PR Gate Auditor</div>\n            <div class=\"sidebar-item\">📖 Cory Knowledge Scribe</div>\n\n            <div class=\"sidebar-section-title\" style=\"margin-top:20px;\">Cognitive Memory Wiki</div>\n            <div class=\"sidebar-item\">📄 USER.md</div>\n            <div class=\"sidebar-item\">📄 MEMORY.md</div>\n            <div class=\"sidebar-item\">📄 CONSTRAINTS.md</div>\n          </div>\n\n          <!-- Pane 2: Center Canvas & Floating Composer -->\n          <div class=\"studio-canvas\">\n            <div class=\"canvas-center\">\n              <div class=\"canvas-emblem\">\n                <svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n                  <path d=\"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z\"/>\n                </svg>\n              </div>\n              <h3 class=\"canvas-heading\">What should we build in coreblow?</h3>\n              <p class=\"canvas-sub\">Sovereign autonomous coding squad, multi-agent War Rooms, and live 5-gate PR scorecard active on Apple Silicon.</p>\n            </div>\n\n            <!-- Floating Composer Box -->\n            <div class=\"composer-box\">\n              <div class=\"composer-chips\">\n                <span class=\"context-chip\">📁 coreblow</span>\n                <span class=\"context-chip\">💻 Local</span>\n                <span class=\"context-chip\">⎇ main</span>\n              </div>\n              <div class=\"composer-input\">Do anything... (Press ⌥ + Space for global companion bar)</div>\n              <div class=\"composer-actions\">\n                <div class=\"composer-tier\">\n                  <span class=\"tier-dot\"></span>\n                  <span>6-Tier Router: Coding (Auto)</span>\n                </div>\n                <div style=\"font-size:0.75rem;color:var(--text-muted);font-family:var(--font-mono);\">MLX Voice RTF &le; 0.4</div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Pane 3: 5-Gate PR Pre-Flight Scorecard -->\n          <div class=\"studio-inspector\">\n            <div class=\"gate-card\">\n              <div class=\"gate-title\">\n                <span>5-Gate PR Scorecard</span>\n                <span style=\"color:var(--accent-teal);\">5/5 PASS</span>\n              </div>\n              <div class=\"gate-item\"><span>typecheck</span><span class=\"status\">✓ Clean (0 err)</span></div>\n              <div class=\"gate-item\"><span>linter</span><span class=\"status\">✓ Oxlint Green</span></div>\n              <div class=\"gate-item\"><span>unit_tests</span><span class=\"status\">✓ 268/268 Green</span></div>\n              <div class=\"gate-item\"><span>secret_scan</span><span class=\"status\">✓ 0 Leaks</span></div>\n              <div class=\"gate-item\"><span>forbidden_paths</span><span class=\"status\">✓ 100% Sovereign</span></div>\n            </div>\n\n            <div class=\"gate-card\" style=\"margin-bottom:0;\">\n              <div class=\"gate-title\">\n                <span>Live Worktree Diff</span>\n                <span style=\"color:var(--accent-cyan);font-family:var(--font-mono);font-size:0.7rem;\">+480 / -12</span>\n              </div>\n              <div style=\"font-family:var(--font-mono);font-size:0.7rem;color:var(--text-muted);line-height:1.4;background:rgba(5,13,18,0.7);padding:8px;border-radius:6px;overflow-x:auto;\">\n                <span style=\"color:#10B981;\">+++ b/apps/macos/CoreBlowStudioView.swift</span><br/>\n                <span style=\"color:var(--text-dim);\">@@ -1,8 +1,28 @@</span><br/>\n                <span style=\"color:#10B981;\">+ // Deep Muted Teal &amp; Dark Slate Frosted Glass</span><br/>\n                <span style=\"color:#10B981;\">+ VisualEffectView(.underWindowBackground)</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- 12-Service Microkernel & Two-Tier Extensibility Grid -->\n  <section class=\"grid-section\" id=\"microkernel\">\n    <div class=\"container\">\n      <div class=\"section-header\">\n        <div class=\"section-tag\">Sovereign Architecture</div>\n        <h2 class=\"section-title\">12-Service Hybrid OOP/DOP Microkernel</h2>\n      </div>\n\n      <div class=\"feature-grid\">\n        <!-- Card 1 -->\n        <div class=\"feature-card\">\n          <div class=\"feature-icon\">📖</div>\n          <h3 class=\"feature-name\">Cory 4-Layer Memory &amp; Wiki</h3>\n          <p class=\"feature-desc\">Persistent cognitive architecture compiling conversation history into structured, version-controlled markdown wiki pages (USER.md, MEMORY.md, CONSTRAINTS.md) with zero-stall background chunk compaction.</p>\n        </div>\n\n        <!-- Card 2 -->\n        <div class=\"feature-card\">\n          <div class=\"feature-icon\">🧬</div>\n          <h3 class=\"feature-name\">Cory EvoLoop Self-Learning Skills</h3>\n          <p class=\"feature-desc\">Closed-loop autonomous skill synthesis engine that distills developer correction workflows into production SKILL.md V2 packages, ranked via Wilson score lower bound confidence and secured with tamper-resistant 🔒 Locked invariants.</p>\n        </div>\n\n        <!-- Card 3 -->\n        <div class=\"feature-card\">\n          <div class=\"feature-icon\">🧭</div>\n          <h3 class=\"feature-name\">6-Tier Decision Router &amp; Failover</h3>\n          <p class=\"feature-desc\">Microsecond heuristic classifier routing requests across fast triage (&lt;50ms), coding, deep reasoning, vision, and local tiers, featuring Daybreak hot failover to air-gapped Ollama/vLLM engines during cloud disruptions.</p>\n        </div>\n\n        <!-- Card 4 -->\n        <div class=\"feature-card\">\n          <div class=\"feature-icon\">⚔️</div>\n          <h3 class=\"feature-name\">Multi-Agent War Room &amp; Kanban DAG</h3>\n          <p class=\"feature-desc\">Parallel multi-agent collaboration squad (Lead, Coder, Auditor, Verifier) coordinating over a directed acyclic graph task board, achieving cryptographic consensus before merging changes to disk.</p>\n        </div>\n\n        <!-- Card 5 -->\n        <div class=\"feature-card\">\n          <div class=\"feature-icon\">🛡️</div>\n          <h3 class=\"feature-name\">5-Gate Autonomous PR Workflow</h3>\n          <p class=\"feature-desc\">Comprehensive pre-flight evaluation running typecheck, oxlint, unit tests, secret scanning, and brand sovereignty auditing prior to automated pull request creation with 1-click merge and rollback.</p>\n        </div>\n\n        <!-- Card 6 -->\n        <div class=\"feature-card\">\n          <div class=\"feature-icon\">🔌</div>\n          <h3 class=\"feature-name\">Live Sovereign MCP Bridge</h3>\n          <p class=\"feature-desc\">Pure Model Context Protocol stdio multiplexer connecting external developer tools, browsers, databases, and filesystem inspectors with deterministic sandboxing and zero memory leak guarantees.</p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Omni-Platform Native Surfaces -->\n  <section class=\"surfaces-section\">\n    <div class=\"container\">\n      <div class=\"surfaces-title\">Omni-Platform Native Surfaces</div>\n      <div class=\"surfaces-badges\">\n        <div class=\"surface-badge\"><span class=\"dot\"></span><span>macOS Studio (Swift 6.2 + MLX TTS RTF &le; 0.4)</span></div>\n        <div class=\"surface-badge\"><span class=\"dot\"></span><span>iOS &amp; watchOS Native</span></div>\n        <div class=\"surface-badge\"><span class=\"dot\"></span><span>Android (Jetpack Compose)</span></div>\n        <div class=\"surface-badge\"><span class=\"dot\"></span><span>CoreChat (Go CLI)</span></div>\n        <div class=\"surface-badge\"><span class=\"dot\"></span><span>Windows Node (WSL &amp; PowerShell)</span></div>\n        <div class=\"surface-badge\"><span class=\"dot\"></span><span>ESP32 IoT Node</span></div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Footer -->\n  <footer>\n    <div class=\"container footer-inner\">\n      <div>&copy; 2026 CoreBlow. Sovereign Autonomous Agent-OS. Released under Apache-2.0.</div>\n      <div class=\"footer-links\">\n        <a href=\"/corehub\">CoreHub Store</a>\n        <a href=\"https://docs.coreblow.com\" target=\"_blank\" rel=\"noopener\">Documentation</a>\n        <a href=\"https://github.com/coreblow/coreblow\" target=\"_blank\" rel=\"noopener\">GitHub</a>\n        <a href=\"/install.sh\">install.sh</a>\n        <a href=\"/install.ps1\">install.ps1</a>\n      </div>\n    </div>\n  </footer>\n\n  <script>\n    function switchInstallerTab(type) {\n      const tabCurl = document.getElementById('tabCurl');\n      const tabWin = document.getElementById('tabWin');\n      const tabNpm = document.getElementById('tabNpm');\n      const cmdText = document.getElementById('cmdText');\n      const sym = document.querySelector('.installer-prompt-symbol');\n      tabCurl.classList.remove('active');\n      tabWin.classList.remove('active');\n      tabNpm.classList.remove('active');\n      if (type === 'curl') {\n        tabCurl.classList.add('active');\n        if (sym) sym.textContent = '$';\n        cmdText.textContent = 'curl -fsSL https://coreblow.com/install.sh | bash';\n      } else if (type === 'win') {\n        tabWin.classList.add('active');\n        if (sym) sym.textContent = '>';\n        cmdText.textContent = 'irm https://coreblow.com/install.ps1 | iex';\n      } else {\n        tabNpm.classList.add('active');\n        if (sym) sym.textContent = '$';\n        cmdText.textContent = 'npm install -g coreblow && coreblow onboard --install-daemon';\n      }\n    }\n\n    function copyInstallerCmd() {\n      const cmdText = document.getElementById('cmdText').textContent;\n      const copyBtn = document.getElementById('copyBtn');\n      navigator.clipboard.writeText(cmdText).then(() => {\n        copyBtn.textContent = 'Copied!';\n        setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);\n      });\n    }\n  </script>\n</body>\n</html>";

const INSTALL_SH = "#!/usr/bin/env sh\n# CoreBlow Sovereign Agent-OS Universal Installer\n# https://coreblow.com\nset -eu\n\nprintf \"\\033[1;36m\"\ncat << 'EOF'\n   ______               ____  __               \n  / ____/___  ________ / __ )/ /___ _      __ \n / /   / __ \\/ ___/ _ \\ __  / / __ \\ | /| / / \n/ /___/ /_/ / /  /  __/ /_/ / / /_/ / |/ |/ /  \n\\____/\\____/_/   \\___/_____/_/\\____/|__/|__/   \n   Sovereign Autonomous Agent-OS · v2.4.0 GA\nEOF\nprintf \"\\033[0m\\n\"\n\nCOREBLOW_VERSION=\"${COREBLOW_VERSION:-2.4.0}\"\n\nnode_is_compatible() {\n  if ! command -v node >/dev/null 2>&1; then\n    return 1\n  fi\n  NODE_VERSION=$(node -v 2>/dev/null | sed 's/^v//')\n  NODE_MAJOR=$(echo \"$NODE_VERSION\" | cut -d. -f1)\n  NODE_MINOR=$(echo \"$NODE_VERSION\" | cut -d. -f2)\n  if [ -z \"$NODE_MAJOR\" ] || [ -z \"$NODE_MINOR\" ]; then\n    return 1\n  fi\n  if [ \"$NODE_MAJOR\" -gt 22 ]; then\n    return 0\n  fi\n  if [ \"$NODE_MAJOR\" -eq 22 ] && [ \"$NODE_MINOR\" -ge 12 ]; then\n    return 0\n  fi\n  return 1\n}\n\nfetch_text() {\n  if command -v curl >/dev/null 2>&1; then\n    curl -fsSL \"$1\"\n  elif command -v wget >/dev/null 2>&1; then\n    wget -qO- \"$1\"\n  else\n    echo \"Error: curl or wget is required to download Node.js 22 LTS.\" >&2\n    return 1\n  fi\n}\n\ndownload_file() {\n  if command -v curl >/dev/null 2>&1; then\n    curl -fsSL \"$1\" -o \"$2\"\n  elif command -v wget >/dev/null 2>&1; then\n    wget -qO \"$2\" \"$1\"\n  else\n    echo \"Error: curl or wget is required to download Node.js 22 LTS.\" >&2\n    return 1\n  fi\n}\n\nbootstrap_node_tarball() {\n  OS_RAW=$(uname -s)\n  ARCH_RAW=$(uname -m)\n\n  case \"$OS_RAW\" in\n    Darwin) NODE_OS=\"darwin\" ;;\n    Linux) NODE_OS=\"linux\" ;;\n    *)\n      echo \"Error: Unsupported OS '$OS_RAW' for automatic Node.js tarball bootstrap.\" >&2\n      return 1\n      ;;\n  esac\n\n  case \"$ARCH_RAW\" in\n    x86_64|amd64) NODE_ARCH=\"x64\" ;;\n    arm64|aarch64) NODE_ARCH=\"arm64\" ;;\n    *)\n      echo \"Error: Unsupported architecture '$ARCH_RAW' for automatic Node.js tarball bootstrap.\" >&2\n      return 1\n      ;;\n  esac\n\n  RUNTIME_ROOT=\"$HOME/.coreblow/runtime\"\n  NODE_TARGET=\"$RUNTIME_ROOT/node\"\n  mkdir -p \"$RUNTIME_ROOT\"\n\n  echo \"==> Resolving latest Node.js 22 LTS archive (${NODE_OS}-${NODE_ARCH})...\"\n  NODE_TARBALL=$(fetch_text \"https://nodejs.org/dist/latest-v22.x/SHASUMS256.txt\" | awk -v pat=\"node-v22\\\\.[0-9]+\\\\.[0-9]+-${NODE_OS}-${NODE_ARCH}\\\\.tar\\\\.gz$\" '$2 ~ pat {print $2; exit}')\n  if [ -z \"$NODE_TARBALL\" ]; then\n    echo \"Error: Could not find Node.js v22 LTS tarball for ${NODE_OS}-${NODE_ARCH}.\" >&2\n    return 1\n  fi\n\n  TMP_TGZ=\"$RUNTIME_ROOT/$NODE_TARBALL\"\n  EXTRACT_DIR=\"$RUNTIME_ROOT/$(printf '%s' \"$NODE_TARBALL\" | sed 's/\\.tar\\.gz$//')\"\n\n  echo \"==> Downloading $NODE_TARBALL into $RUNTIME_ROOT...\"\n  download_file \"https://nodejs.org/dist/latest-v22.x/$NODE_TARBALL\" \"$TMP_TGZ\"\n  rm -rf \"$EXTRACT_DIR\"\n  tar -xzf \"$TMP_TGZ\" -C \"$RUNTIME_ROOT\"\n  rm -f \"$TMP_TGZ\"\n  rm -rf \"$NODE_TARGET\"\n  mv \"$EXTRACT_DIR\" \"$NODE_TARGET\"\n\n  export PATH=\"$NODE_TARGET/bin:$PATH\"\n  echo \"  Note: Add $NODE_TARGET/bin to your shell profile:\"\n  echo \"    export PATH=\\\"\\$HOME/.coreblow/runtime/node/bin:\\$PATH\\\"\"\n}\n\necho \"==> Verifying system prerequisites...\"\nif ! node_is_compatible; then\n  if [ \"${COREBLOW_SKIP_NODE_BOOTSTRAP:-0}\" = \"1\" ]; then\n    echo \"Error: Node.js >= 22.12.0 is required and COREBLOW_SKIP_NODE_BOOTSTRAP=1 is set.\" >&2\n    exit 1\n  fi\n\n  echo \"==> Node.js >= 22.12.0 not found; provisioning Node.js 22 LTS...\"\n  if [ \"$(uname -s)\" = \"Darwin\" ] && command -v brew >/dev/null 2>&1; then\n    echo \"==> Installing node@22 via Homebrew...\"\n    if brew install node@22; then\n      BREW_NODE_PREFIX=$(brew --prefix node@22 2>/dev/null || true)\n      if [ -n \"$BREW_NODE_PREFIX\" ] && [ -d \"$BREW_NODE_PREFIX/bin\" ]; then\n        export PATH=\"$BREW_NODE_PREFIX/bin:$PATH\"\n      fi\n    fi\n  fi\n\n  if ! node_is_compatible; then\n    bootstrap_node_tarball\n  fi\n\n  if ! node_is_compatible; then\n    echo \"Error: Failed to provision Node.js >= 22.12.0.\" >&2\n    echo \"Please install Node.js 22.12.0 or higher from https://nodejs.org\" >&2\n    exit 1\n  fi\nfi\n\nNODE_VERSION=$(node -v | sed 's/^v//')\necho \"==> Detected Node.js v$NODE_VERSION (Compatible)\"\n\nif ! command -v npm >/dev/null 2>&1; then\n  echo \"Error: npm is required but not found in PATH.\" >&2\n  exit 1\nfi\n\necho \"==> Installing CoreBlow Sovereign CLI (v${COREBLOW_VERSION}) globally via npm...\"\nif ! npm install -g \"coreblow@${COREBLOW_VERSION}\" 2>/dev/null; then\n  echo \"  Notice: Global npm install failed with permission issues; falling back to \\$HOME/.local prefix...\"\n  mkdir -p \"$HOME/.local/bin\"\n  npm install -g --prefix \"$HOME/.local\" \"coreblow@${COREBLOW_VERSION}\"\n  case \":$PATH:\" in\n    *\":$HOME/.local/bin:\"*) ;;\n    *)\n      echo \"  Note: Add $HOME/.local/bin to your PATH:\"\n      echo \"    export PATH=\\\"\\$HOME/.local/bin:\\$PATH\\\"\"\n      export PATH=\"$HOME/.local/bin:$PATH\"\n      ;;\n  esac\nfi\n\necho \"\"\nprintf \"\\033[1;32m==> CoreBlow v${COREBLOW_VERSION} successfully installed!\\033[0m\\n\"\necho \"To initialize your sovereign agent workspace and background daemon, run:\"\nprintf \"  \\033[1;36mcoreblow onboard --install-daemon\\033[0m\\n\\n\"\n\nif [ \"$(uname -s)\" = \"Darwin\" ]; then\n  echo \"==> macOS Companion Options:\"\n  echo \"  - Install CoreBlow Studio via Homebrew Cask:\"\n  printf \"    \\033[1;36mbrew install --cask coreblow/tap/coreblow\\033[0m\\n\"\n  echo \"  - Download standalone .dmg disk image:\"\n  printf \"    \\033[1;36mhttps://github.com/coreblow/coreblow/releases/download/v${COREBLOW_VERSION}/CoreBlow-${COREBLOW_VERSION}-darwin-arm64.dmg\\033[0m\\n\\n\"\nfi\n\necho \"To launch the native macOS Studio companion, use Option + Space.\"\necho \"Documentation: https://docs.coreblow.com\"\necho \"CoreHub Store: https://coreblow.com/corehub\"\n";

const INSTALL_PS1 = "﻿# CoreBlow Sovereign Agent-OS Windows PowerShell Installer\n# https://coreblow.com\n$ErrorActionPreference = \"Stop\"\n\n$CoreBlowVersion = if ($env:COREBLOW_VERSION) { $env:COREBLOW_VERSION } else { \"2.4.0\" }\n\nWrite-Host @\"\n   ______               ____  __               \n  / ____/___  ________ / __ )/ /___ _      __ \n / /   / __ \\/ ___/ _ \\ __  / / __ \\ | /| / / \n/ /___/ /_/ / /  /  __/ /_/ / / /_/ / |/ |/ /  \n\\____/\\____/_/   \\___/_____/_/\\____/|__/|__/   \n   Sovereign Autonomous Agent-OS · v2.4.0 GA\n\"@ -ForegroundColor Cyan\nWrite-Host \"\"\n\nfunction Get-NodeSemver {\n  $nodeCmd = Get-Command node -ErrorAction SilentlyContinue\n  if (-not $nodeCmd) { return $null }\n  try {\n    $raw = (& node -v 2>$null).Trim().TrimStart(\"v\")\n    $parts = $raw.Split(\".\")\n    if ($parts.Length -ge 2) {\n      return @{\n        Raw   = $raw\n        Major = [int]$parts[0]\n        Minor = [int]$parts[1]\n      }\n    }\n  } catch {\n    return $null\n  }\n  return $null\n}\n\nfunction Test-NodeCompatible($ver) {\n  if (-not $ver) { return $false }\n  if ($ver.Major -gt 22) { return $true }\n  if ($ver.Major -eq 22 -and $ver.Minor -ge 12) { return $true }\n  return $false\n}\n\nfunction Refresh-ProcessPath {\n  $machinePath = [Environment]::GetEnvironmentVariable(\"Path\", \"Machine\")\n  $userPath = [Environment]::GetEnvironmentVariable(\"Path\", \"User\")\n  $defaultNode = Join-Path $env:ProgramFiles \"nodejs\"\n  $combined = @($machinePath, $userPath, $defaultNode) | Where-Object { $_ }\n  $env:Path = ($combined -join \";\")\n}\n\nfunction Install-PortableNode22 {\n  $arch = if ($env:PROCESSOR_ARCHITECTURE -eq \"ARM64\") { \"arm64\" } else { \"x64\" }\n  $runtimeRoot = Join-Path $env:USERPROFILE \".coreblow\\runtime\"\n  $nodeTarget = Join-Path $runtimeRoot \"node\"\n  New-Item -ItemType Directory -Force -Path $runtimeRoot | Out-Null\n\n  Write-Host \"==> Fetching Node.js 22 LTS archive metadata from nodejs.org...\"\n  $shasums = (Invoke-WebRequest -Uri \"https://nodejs.org/dist/latest-v22.x/SHASUMS256.txt\" -UseBasicParsing).Content\n  $pattern = \"node-v22\\.\\d+\\.\\d+-win-$arch\\.zip\"\n  $match = [regex]::Match($shasums, $pattern)\n  if (-not $match.Success) {\n    throw \"Could not resolve a Node.js v22 LTS Windows ($arch) archive.\"\n  }\n\n  $zipName = $match.Value\n  $zipUrl = \"https://nodejs.org/dist/latest-v22.x/$zipName\"\n  $zipPath = Join-Path $runtimeRoot $zipName\n  $extractDir = Join-Path $runtimeRoot ([System.IO.Path]::GetFileNameWithoutExtension($zipName))\n\n  Write-Host \"==> Downloading $zipName...\"\n  Invoke-WebRequest -Uri $zipUrl -OutFile $zipPath -UseBasicParsing\n\n  if (Test-Path $extractDir) { Remove-Item -Recurse -Force $extractDir }\n  Expand-Archive -Path $zipPath -DestinationPath $runtimeRoot -Force\n  Remove-Item -Force $zipPath -ErrorAction SilentlyContinue\n\n  if (Test-Path $nodeTarget) { Remove-Item -Recurse -Force $nodeTarget }\n  Move-Item -Path $extractDir -Destination $nodeTarget\n  $env:Path = \"$nodeTarget;$env:Path\"\n\n  $userPath = [Environment]::GetEnvironmentVariable(\"Path\", \"User\")\n  if ($userPath -notlike \"*$nodeTarget*\") {\n    $newUserPath = if ($userPath) { \"$nodeTarget;$userPath\" } else { $nodeTarget }\n    [Environment]::SetEnvironmentVariable(\"Path\", $newUserPath, \"User\")\n  }\n}\n\nWrite-Host \"==> Verifying system prerequisites...\"\n$nodeVer = Get-NodeSemver\n\nif (-not (Test-NodeCompatible $nodeVer)) {\n  if ($env:COREBLOW_SKIP_NODE_BOOTSTRAP -eq \"1\") {\n    Write-Error \"Node.js >= 22.12.0 is required and COREBLOW_SKIP_NODE_BOOTSTRAP=1 is set.\"\n    exit 1\n  }\n\n  $detectedMsg = if ($nodeVer) { \"v$($nodeVer.Raw)\" } else { \"not installed\" }\n  Write-Host \"==> Node.js >= 22.12.0 required (detected: $detectedMsg). Provisioning Node.js 22 LTS...\" -ForegroundColor Yellow\n\n  $bootstrapped = $false\n  $wingetCmd = Get-Command winget -ErrorAction SilentlyContinue\n  if ($wingetCmd) {\n    Write-Host \"==> Installing OpenJS.NodeJS.LTS via winget...\"\n    & winget install --id OpenJS.NodeJS.LTS -e --accept-source-agreements --accept-package-agreements\n    if ($LASTEXITCODE -eq 0) {\n      Refresh-ProcessPath\n      $nodeVer = Get-NodeSemver\n      if (Test-NodeCompatible $nodeVer) {\n        $bootstrapped = $true\n      }\n    }\n  }\n\n  if (-not $bootstrapped) {\n    try {\n      Install-PortableNode22\n      $nodeVer = Get-NodeSemver\n      if (Test-NodeCompatible $nodeVer) {\n        $bootstrapped = $true\n      }\n    } catch {\n      Write-Warning \"Automatic Node.js 22 LTS provisioning failed: $_\"\n    }\n  }\n\n  if (-not $bootstrapped) {\n    Write-Error \"Failed to provision Node.js >= 22.12.0 automatically. Please install Node.js 22 LTS from https://nodejs.org/en/download and re-run this installer.\"\n    exit 1\n  }\n}\n\nWrite-Host \"==> Detected Node.js v$($nodeVer.Raw) (Compatible)\"\n\n$npmCmd = Get-Command npm -ErrorAction SilentlyContinue\nif (-not $npmCmd) {\n  Write-Error \"npm is required but was not found in PATH.\"\n  exit 1\n}\n\nWrite-Host \"==> Installing CoreBlow Sovereign CLI (v$CoreBlowVersion) globally via npm...\"\n& npm install -g \"coreblow@$CoreBlowVersion\"\nif ($LASTEXITCODE -ne 0) {\n  Write-Error \"npm install -g coreblow@$CoreBlowVersion failed with exit code $LASTEXITCODE.\"\n  exit $LASTEXITCODE\n}\n\nWrite-Host \"\"\nWrite-Host \"==> CoreBlow v$CoreBlowVersion successfully installed!\" -ForegroundColor Green\nWrite-Host \"To initialize your sovereign agent workspace and background daemon, run:\"\nWrite-Host \"  coreblow onboard --install-daemon\" -ForegroundColor Cyan\nWrite-Host \"\"\nWrite-Host \"==> Windows Desktop Installer:\"\nWrite-Host \"  https://github.com/coreblow/coreblow/releases/download/v$CoreBlowVersion/CoreBlow-$CoreBlowVersion-win-x64.exe\" -ForegroundColor Cyan\nWrite-Host \"\"\nWrite-Host \"Documentation: https://docs.coreblow.com\"\nWrite-Host \"CoreHub Store: https://coreblow.com/corehub\"\n";

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
      <p class="tagline" id="tagline">One sovereign brain. Every surface.</p>
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

const coreHubKinds = ["all", "skill", "plugin", "provider", "channel"];

const coreHubKindCounts = COREHUB_CATALOG.reduce(
  (counts, entry) => {
    counts.all += 1;
    counts[entry.kind] = (counts[entry.kind] ?? 0) + 1;
    return counts;
  },
  { all: 0, skill: 0, plugin: 0, provider: 0, channel: 0 },
);

const coreHubPublisherCount = listCoreHubPublishers().length;
const coreHubVersionCount = COREHUB_CATALOG.reduce(
  (count, entry) => count + (Array.isArray(entry.versions) && entry.versions.length > 0 ? entry.versions.length : 1),
  0,
);
const coreHubDownloadableCount = COREHUB_CATALOG.filter((entry) =>
  (Array.isArray(entry.versions) ? entry.versions : []).some((version) => version.artifact?.downloadEnabled),
).length;
const coreHubVerifiedCount = COREHUB_CATALOG.filter((entry) => entry.review?.state === "verified").length;

const coreHubFilterHtml = coreHubKinds.map((kind) => {
  const active = kind === "all" ? " active" : "";
  const count = coreHubKindCounts[kind] ?? 0;
  return `<button class="filter-button${active}" type="button" data-filter="${kind}" aria-pressed="${kind === "all"}">${capitalize(kind)} <span>${count}</span></button>`;
}).join("");

const coreHubEntriesHtml = COREHUB_CATALOG.map((entry) => {
  const tags = Array.isArray(entry.tags) ? entry.tags : [];
  const capabilities = Array.isArray(entry.capabilities) ? entry.capabilities : [];
  const platforms = Array.isArray(entry.coreblow?.platforms) ? entry.coreblow.platforms : [];
  const sourceUrl = getCoreHubSourceUrl(entry);
  const homepageUrl = entry.homepage ?? sourceUrl;
  const reviewState = entry.review?.state ?? "review";
  const minVersion = entry.coreblow?.minCoreblowVersion ?? "not declared";
  const publisher = entry.publisher?.displayName ?? entry.publisher?.handle ?? "unknown";
  const latestVersion = normalizeCoreHubVersion(entry);
  const installCommand = `corehub install ${entry.id} --registry https://coreblow.com/corehub`;
  const searchText = [
    entry.id,
    entry.kind,
    entry.name,
    entry.summary,
    tags.join(" "),
    capabilities.join(" "),
    platforms.join(" "),
    reviewState,
  ].join(" ").toLowerCase();

  return `<article class="entry-card" data-kind="${escapeAttr(entry.kind)}" data-search="${escapeAttr(searchText)}">
    <div class="entry-card-head">
      <span class="kind ${escapeAttr(entry.kind)}">${escapeHtml(entry.kind)}</span>
      <span class="review">${escapeHtml(reviewState)}</span>
    </div>
    <h3>${escapeHtml(entry.name)}</h3>
    <p class="entry-summary">${escapeHtml(entry.summary)}</p>
    <code class="install-command">${escapeHtml(installCommand)}</code>
    <dl class="entry-meta">
      <div><dt>Version</dt><dd>${escapeHtml(latestVersion?.version ?? entry.version ?? "unversioned")}</dd></div>
      <div><dt>Publisher</dt><dd>${escapeHtml(publisher)}</dd></div>
      <div><dt>CoreBlow</dt><dd>${escapeHtml(minVersion)}</dd></div>
      <div><dt>Platforms</dt><dd>${escapeHtml(platforms.length ? platforms.join(", ") : "not declared")}</dd></div>
    </dl>
    <div class="tag-list" aria-label="${escapeAttr(entry.name)} tags">
      ${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
    </div>
    <div class="capability-list" aria-label="${escapeAttr(entry.name)} capabilities">
      ${capabilities.map((capability) => `<span>${escapeHtml(capability)}</span>`).join("")}
    </div>
    <div class="entry-links">
      ${homepageUrl ? `<a href="${escapeAttr(homepageUrl)}">Homepage</a>` : ""}
      ${sourceUrl ? `<a href="${escapeAttr(sourceUrl)}">Source</a>` : ""}
    </div>
  </article>`;
}).join("");

const coreHubSkills = COREHUB_CATALOG.filter((entry) => entry.kind === "skill");
const coreHubPlugins = COREHUB_CATALOG.filter((entry) => entry.kind === "plugin");
const coreHubFeaturedSource = coreHubSkills.concat(COREHUB_CATALOG.filter((entry) => entry.kind !== "skill"));

function renderCoreHubFeatureCard(entry, options = {}) {
  const publisher = entry.publisher?.displayName ?? entry.publisher?.handle ?? "unknown";
  const latestVersion = normalizeCoreHubVersion(entry);
  const artifact = latestVersion?.artifact;
  const downloadEnabled = artifact?.downloadEnabled === true;
  const versionLabel = latestVersion?.version ?? entry.version ?? "latest";
  const installCommand = `corehub install ${entry.id} --registry https://coreblow.com/corehub`;
  const classes = ["featured-card", options.compact ? "compact" : ""].filter(Boolean).join(" ");

  return `<article class="${classes}">
      <div class="featured-card-main">
        <h3>${escapeHtml(entry.name)}</h3>
        <p class="featured-byline">by ${escapeHtml(publisher)}</p>
        ${options.showKind === false ? "" : `<span class="featured-kind">${escapeHtml(capitalize(entry.kind))}</span>`}
        <p class="featured-summary">${escapeHtml(entry.summary)}</p>
      </div>
      <div class="featured-card-foot">
        <span class="featured-stat">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z"/></svg>
          ${escapeHtml(entry.review?.state ?? "review")}
        </span>
        <span class="featured-stat">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>
          ${downloadEnabled ? "installable" : escapeHtml(versionLabel)}
        </span>
        <button class="featured-install" type="button" title="${escapeAttr(installCommand)}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>
          Install
        </button>
      </div>
    </article>`;
}

const coreHubFeaturedHtml = (coreHubSkills.length ? coreHubSkills : coreHubFeaturedSource)
  .slice(0, 5)
  .map((entry) => renderCoreHubFeatureCard(entry))
  .join("");
const coreHubPluginFeaturedHtml = (coreHubPlugins.length ? coreHubPlugins : COREHUB_CATALOG)
  .slice(0, 3)
  .map((entry) => renderCoreHubFeatureCard(entry, { compact: true, showKind: false }))
  .join("");

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function capitalize(value) {
  const text = String(value);
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function getCoreHubSourceUrl(entry) {
  if (typeof entry.source === "string") return entry.source;
  if (entry.source && typeof entry.source.url === "string") return entry.source.url;
  return "";
}

function normalizeCoreHubEntry(entry, options = {}) {
  const sourceUrl = getCoreHubSourceUrl(entry);
  const record = {
    id: entry.id,
    kind: entry.kind,
    name: entry.name,
    summary: entry.summary,
    source: sourceUrl,
    homepage: entry.homepage ?? sourceUrl,
    version: entry.version ?? null,
    tags: Array.isArray(entry.tags) ? entry.tags : [],
    capabilities: Array.isArray(entry.capabilities) ? entry.capabilities : [],
    publisher: entry.publisher ?? null,
    versions: Array.isArray(entry.versions) ? entry.versions : [],
    review: entry.review ?? null,
    coreblow: entry.coreblow ?? null,
    links: {
      self: `/corehub/api/v1/entries/${encodeURIComponent(entry.id)}`,
      package: `/corehub/api/v1/packages/${encodeURIComponent(entry.id)}`,
      versions: `/corehub/api/v1/packages/${encodeURIComponent(entry.id)}/versions`,
      files: `/corehub/api/v1/packages/${encodeURIComponent(entry.id)}/files`,
      artifact: `/corehub/api/v1/packages/${encodeURIComponent(entry.id)}/artifact`,
      download: `/corehub/api/v1/packages/${encodeURIComponent(entry.id)}/download`,
    },
  };

  if (options.score !== undefined) {
    record.score = options.score;
  }

  return record;
}

function normalizeCoreHubPublisher(publisher) {
  if (!publisher?.handle) return null;
  const entries = COREHUB_CATALOG
    .filter((entry) => entry.publisher?.handle === publisher.handle)
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((entry) => ({
      id: entry.id,
      kind: entry.kind,
      name: entry.name,
      links: {
        entry: `/corehub/api/v1/entries/${encodeURIComponent(entry.id)}`,
        package: `/corehub/api/v1/packages/${encodeURIComponent(entry.id)}`,
      },
    }));

  return {
    handle: publisher.handle,
    displayName: publisher.displayName,
    url: publisher.url,
    verified: Boolean(publisher.verified),
    contact: publisher.contact ?? null,
    entries,
    links: {
      self: `/corehub/api/v1/publishers/${encodeURIComponent(publisher.handle)}`,
    },
  };
}

function listCoreHubPublishers() {
  const publishers = new Map();
  for (const entry of COREHUB_CATALOG) {
    const publisher = entry.publisher;
    if (!publisher?.handle || publishers.has(publisher.handle)) continue;
    publishers.set(publisher.handle, normalizeCoreHubPublisher(publisher));
  }
  return [...publishers.values()].filter(Boolean).sort((a, b) => a.handle.localeCompare(b.handle));
}

function findCoreHubPublisher(handle) {
  return listCoreHubPublishers().find((publisher) => publisher.handle === handle) ?? null;
}

function listCoreHubEntries(options = {}) {
  const kind = options.kind;
  return COREHUB_CATALOG
    .filter((entry) => !kind || entry.kind === kind)
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((entry) => normalizeCoreHubEntry(entry));
}

function findCoreHubEntry(id) {
  const entry = COREHUB_CATALOG.find((item) => item.id === id);
  return entry ? normalizeCoreHubEntry(entry) : null;
}

function searchCoreHubEntries(query, options = {}) {
  const terms = tokenizeCoreHubQuery(query);
  const kind = options.kind;
  const limit = parseCoreHubLimit(options.limit);
  if (terms.length === 0) return [];

  return COREHUB_CATALOG
    .filter((entry) => !kind || entry.kind === kind)
    .map((entry) => ({ entry, score: scoreCoreHubEntry(entry, terms) }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.entry.id.localeCompare(b.entry.id))
    .slice(0, limit)
    .map((result) => normalizeCoreHubEntry(result.entry, { score: result.score }));
}

function tokenizeCoreHubQuery(query) {
  return String(query ?? "")
    .toLowerCase()
    .split(/[^a-z0-9-]+/)
    .map((term) => term.trim())
    .filter(Boolean);
}

function scoreCoreHubEntry(entry, terms) {
  const searchable = [
    entry.id,
    entry.kind,
    entry.name,
    entry.summary,
    ...(Array.isArray(entry.tags) ? entry.tags : []),
    ...(Array.isArray(entry.capabilities) ? entry.capabilities : []),
    ...(Array.isArray(entry.coreblow?.platforms) ? entry.coreblow.platforms : []),
    entry.publisher?.handle,
    entry.publisher?.displayName,
    entry.review?.state,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  let score = 0;
  for (const term of terms) {
    if (entry.id === term) score += 10;
    if (entry.kind === term) score += 5;
    if (searchable.includes(term)) score += 2;
  }
  return score;
}

function parseCoreHubLimit(value) {
  const parsed = Number.parseInt(String(value ?? "25"), 10);
  if (!Number.isInteger(parsed) || parsed < 1) return 25;
  return Math.min(parsed, 100);
}

function coreHubJson(data, options = {}) {
  const body = {
    apiVersion: "v1",
    data,
    meta: {
      count: Array.isArray(data) ? data.length : data === null ? 0 : 1,
      ...options.meta,
    },
  };

  return new Response(JSON.stringify(body, null, 2), {
    status: options.status ?? 200,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Cache-Control": options.cacheControl ?? "public, max-age=300",
    },
  });
}

function coreHubNotFound(message) {
  return coreHubJson(
    { error: "not_found", message },
    { status: 404, cacheControl: "public, max-age=60", meta: { count: 0 } },
  );
}

function coreHubNotImplemented(data, meta = {}) {
  return coreHubJson(
    {
      error: "not_implemented",
      message: "CoreHub file downloads require storage-backed artifacts and download policy enforcement.",
      ...data,
    },
    { status: 501, cacheControl: "public, max-age=60", meta: { count: 0, ...meta } },
  );
}

function coreHubForbidden(data, meta = {}) {
  return coreHubJson(
    {
      error: "download_forbidden",
      ...data,
    },
    { status: 403, cacheControl: "no-store", meta: { count: 0, ...meta } },
  );
}

function normalizeCoreHubVersion(entry) {
  return listCoreHubVersions(entry)[0] ?? null;
}

function listCoreHubVersions(entry) {
  const versions = Array.isArray(entry.versions) && entry.versions.length > 0
    ? entry.versions
    : [
        {
          version: entry.version ?? null,
          tag: "latest",
          publishedAt: null,
          publisher: entry.publisher ? { handle: entry.publisher.handle } : null,
          status: "metadata-only",
          artifact: null,
        },
      ];

  return versions.map((version) => ({
    id: entry.id,
    version: version.version,
    tag: version.tag,
    publishedAt: version.publishedAt,
    publisher: version.publisher ?? null,
    status: version.status,
    artifact: version.artifact ?? null,
    review: entry.review,
    source: entry.source,
    links: {
      files: `/corehub/api/v1/packages/${encodeURIComponent(entry.id)}/files?version=${encodeURIComponent(version.version ?? "")}`,
      artifact: `/corehub/api/v1/packages/${encodeURIComponent(entry.id)}/artifact?version=${encodeURIComponent(version.version ?? "")}`,
      download: `/corehub/api/v1/packages/${encodeURIComponent(entry.id)}/download?version=${encodeURIComponent(version.version ?? "")}`,
    },
  }));
}

function normalizeCoreHubFileList(entry, options = {}) {
  const versionRecord = findCoreHubVersion(entry, options.version);
  const artifact = versionRecord?.artifact ?? null;
  return {
    package: {
      id: entry.id,
      kind: entry.kind,
      name: entry.name,
    },
    version: versionRecord?.version ?? null,
    publisher: versionRecord?.publisher ?? null,
    files: artifact?.files ?? [],
    artifact,
    links: {
      package: `/corehub/api/v1/packages/${encodeURIComponent(entry.id)}`,
      versions: `/corehub/api/v1/packages/${encodeURIComponent(entry.id)}/versions`,
      download: `/corehub/api/v1/packages/${encodeURIComponent(entry.id)}/download`,
    },
  };
}

function normalizeCoreHubArtifact(entry, options = {}) {
  const versionRecord = findCoreHubVersion(entry, options.version);
  const artifact = versionRecord?.artifact ?? null;
  return {
    package: {
      id: entry.id,
      kind: entry.kind,
      name: entry.name,
    },
    version: versionRecord?.version ?? null,
    publisher: versionRecord?.publisher ?? null,
    artifact,
    files: artifact?.files ?? [],
    download: {
      available: Boolean(artifact?.downloadEnabled),
      reason: artifact?.downloadEnabled
        ? null
        : "CoreHub artifact manifests are available, but binary downloads are not enabled yet.",
      storage: artifact?.storage ?? null,
    },
    links: {
      package: `/corehub/api/v1/packages/${encodeURIComponent(entry.id)}`,
      files: `/corehub/api/v1/packages/${encodeURIComponent(entry.id)}/files`,
      download: `/corehub/api/v1/packages/${encodeURIComponent(entry.id)}/download`,
    },
  };
}

function readCoreHubVersion(url, entry) {
  const requested = url.searchParams.get("version")?.trim() || url.searchParams.get("tag")?.trim();
  return findCoreHubVersion(entry, requested)?.version ?? null;
}

function findCoreHubVersion(entry, requested) {
  const versions = listCoreHubVersions(entry);
  const target = requested?.trim();
  if (!target || target === "latest") {
    return versions.find((version) => version.tag === "latest") ?? versions[0] ?? null;
  }
  return versions.find((version) => version.version === target || version.tag === target) ?? null;
}

async function signCoreHubDownloadUrl(entry, versionRecord, env) {
  const artifact = versionRecord?.artifact;
  const storageUrl = artifact?.storage?.url;
  if (!storageUrl) return null;

  const expires = Math.floor(Date.now() / 1000) + 300;
  const payload = [
    entry.id,
    versionRecord.version,
    artifact.sha256,
    artifact.storage.key,
    expires,
  ].join(":");
  const keyText = env?.COREHUB_DOWNLOAD_SIGNING_KEY ?? artifact.sha256;
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(keyText),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signatureBytes = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(payload),
  );
  const signature = [...new Uint8Array(signatureBytes)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  const signedUrl = new URL(storageUrl);
  signedUrl.searchParams.set("corehub_expires", String(expires));
  signedUrl.searchParams.set("corehub_signature", signature);
  return {
    url: signedUrl.toString(),
    expires,
    signature,
    signaturePayload: payload,
  };
}

async function coreHubDownloadResponse(url, entry, version, env) {
  const versionRecord = findCoreHubVersion(entry, version);
  const artifact = versionRecord?.artifact ?? null;
  const packageInfo = {
    id: entry.id,
    kind: entry.kind,
    name: entry.name,
  };
  const data = {
    package: packageInfo,
    version,
    publisher: versionRecord?.publisher ?? null,
    artifact,
  };

  if (!artifact) {
    return coreHubNotImplemented(
      { ...data, message: "CoreHub package version does not have an artifact manifest." },
      { package: entry.id, version },
    );
  }

  if (versionRecord.status !== "available" || !artifact.downloadEnabled) {
    return coreHubForbidden(
      {
        ...data,
        message: "CoreHub artifact downloads are not enabled for this version.",
        download: { available: false, reason: versionRecord.status },
      },
      { package: entry.id, version },
    );
  }

  const signed = await signCoreHubDownloadUrl(entry, versionRecord, env);
  if (!signed) {
    return coreHubNotImplemented(
      { ...data, message: "CoreHub artifact is available but has no storage URL." },
      { package: entry.id, version },
    );
  }

  const download = {
    available: true,
    redirect: true,
    url: signed.url,
    expires: signed.expires,
    signature: signed.signature,
  };
  if (url.searchParams.get("redirect") === "false") {
    return coreHubJson({ ...data, download }, {
      cacheControl: "no-store",
      meta: { package: entry.id, version },
    });
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: signed.url,
      "Cache-Control": "no-store",
      "X-CoreHub-Package": entry.id,
      "X-CoreHub-Version": version,
      "X-CoreHub-Artifact-Sha256": artifact.sha256,
      "X-CoreHub-Download-Expires": String(signed.expires),
      "X-CoreHub-Download-Signature": signed.signature,
    },
  });
}

async function handleCoreHubApi(url, env) {
  const path = url.pathname.replace(/\/+$/, "");
  const apiRoot = "/corehub/api/v1";

  if (path === apiRoot) {
    return coreHubJson({
      name: "CoreHub Registry API",
      registry: "https://coreblow.com/corehub",
      catalog: "/corehub/api/v1/catalog",
      entries: "/corehub/api/v1/entries",
      search: "/corehub/api/v1/search?q=plugin",
      packages: "/corehub/api/v1/packages",
      publishers: "/corehub/api/v1/publishers",
      files: "/corehub/api/v1/packages/plugin-lab/files",
      artifact: "/corehub/api/v1/packages/plugin-lab/artifact",
      download: "/corehub/api/v1/packages/plugin-lab/download",
    });
  }

  if (path === `${apiRoot}/catalog` || path === `${apiRoot}/entries`) {
    const kind = url.searchParams.get("kind") || undefined;
    const entries = listCoreHubEntries({ kind });
    return coreHubJson(entries, { meta: { kind: kind ?? "all" } });
  }

  if (path === `${apiRoot}/search` || path === `${apiRoot}/packages/search`) {
    const query = url.searchParams.get("q") ?? "";
    const kind = url.searchParams.get("kind") || undefined;
    const results = searchCoreHubEntries(query, {
      kind,
      limit: url.searchParams.get("limit"),
    });
    return coreHubJson(results, { meta: { query, kind: kind ?? "all" } });
  }

  if (path === `${apiRoot}/packages`) {
    const family = url.searchParams.get("family");
    const kind = family === "skill" ? "skill" : url.searchParams.get("kind") || undefined;
    const entries = listCoreHubEntries({ kind });
    return coreHubJson(entries, { meta: { kind: kind ?? "all" } });
  }

  if (path === `${apiRoot}/publishers`) {
    return coreHubJson(listCoreHubPublishers());
  }

  const publisherMatch = path.match(/^\/corehub\/api\/v1\/publishers\/([^/]+)$/);
  if (publisherMatch) {
    const handle = decodeURIComponent(publisherMatch[1]);
    const publisher = findCoreHubPublisher(handle);
    return publisher ? coreHubJson(publisher) : coreHubNotFound(`CoreHub publisher not found: ${handle}`);
  }

  const entryMatch = path.match(/^\/corehub\/api\/v1\/entries\/([^/]+)$/);
  if (entryMatch) {
    const id = decodeURIComponent(entryMatch[1]);
    const entry = findCoreHubEntry(id);
    return entry ? coreHubJson(entry) : coreHubNotFound(`CoreHub entry not found: ${id}`);
  }

  const packageMatch = path.match(/^\/corehub\/api\/v1\/packages\/([^/]+)$/);
  if (packageMatch) {
    const id = decodeURIComponent(packageMatch[1]);
    const entry = findCoreHubEntry(id);
    return entry ? coreHubJson(entry) : coreHubNotFound(`CoreHub package not found: ${id}`);
  }

  const packageVersionsMatch = path.match(/^\/corehub\/api\/v1\/packages\/([^/]+)\/versions$/);
  if (packageVersionsMatch) {
    const id = decodeURIComponent(packageVersionsMatch[1]);
    const entry = findCoreHubEntry(id);
    if (!entry) return coreHubNotFound(`CoreHub package not found: ${id}`);
    return coreHubJson(listCoreHubVersions(entry));
  }

  const packageFilesMatch = path.match(/^\/corehub\/api\/v1\/packages\/([^/]+)\/files$/);
  if (packageFilesMatch) {
    const id = decodeURIComponent(packageFilesMatch[1]);
    const entry = findCoreHubEntry(id);
    if (!entry) return coreHubNotFound(`CoreHub package not found: ${id}`);
    const version = readCoreHubVersion(url, entry);
    if (!version) return coreHubNotFound(`CoreHub package version not found: ${id}`);
    return coreHubJson(normalizeCoreHubFileList(entry, { version }), {
      meta: { package: id, version, filesAvailable: false },
    });
  }

  const packageArtifactMatch = path.match(/^\/corehub\/api\/v1\/packages\/([^/]+)\/artifact$/);
  if (packageArtifactMatch) {
    const id = decodeURIComponent(packageArtifactMatch[1]);
    const entry = findCoreHubEntry(id);
    if (!entry) return coreHubNotFound(`CoreHub package not found: ${id}`);
    const version = readCoreHubVersion(url, entry);
    if (!version) return coreHubNotFound(`CoreHub package version not found: ${id}`);
    return coreHubJson(normalizeCoreHubArtifact(entry, { version }), {
      meta: { package: id, version, artifactAvailable: false },
    });
  }

  const packageDownloadMatch = path.match(/^\/corehub\/api\/v1\/packages\/([^/]+)\/download$/);
  if (packageDownloadMatch) {
    const id = decodeURIComponent(packageDownloadMatch[1]);
    const entry = findCoreHubEntry(id);
    if (!entry) return coreHubNotFound(`CoreHub package not found: ${id}`);
    const version = readCoreHubVersion(url, entry);
    if (!version) return coreHubNotFound(`CoreHub package version not found: ${id}`);
    return coreHubDownloadResponse(url, entry, version, env);
  }

  if (path === `${apiRoot}/download`) {
    const id = url.searchParams.get("id")?.trim() || url.searchParams.get("package")?.trim();
    if (!id) {
      return coreHubJson(
        { error: "validation_error", message: "Missing id or package query parameter." },
        { status: 400, cacheControl: "public, max-age=60", meta: { count: 0 } },
      );
    }
    const entry = findCoreHubEntry(id);
    if (!entry) return coreHubNotFound(`CoreHub package not found: ${id}`);
    const version = readCoreHubVersion(url, entry);
    if (!version) return coreHubNotFound(`CoreHub package version not found: ${id}`);
    return coreHubDownloadResponse(url, entry, version, env);
  }

  return coreHubNotFound(`CoreHub API route not found: ${url.pathname}`);
}

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
      color-scheme: light dark;
      --bg: #fbfaf6;
      --surface: #ffffff;
      --surface-soft: #f3efe7;
      --text: #1b1d1f;
      --muted: #686f77;
      --line: #ded8ce;
      --accent: #dd3f2f;
      --accent-dark: #8f241b;
      --green: #1d7a52;
      --blue: #2563eb;
      --yellow: #b7791f;
      --shadow: 0 22px 60px rgba(51, 43, 34, 0.1);
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      min-height: 100vh;
      background:
        linear-gradient(90deg, rgba(27,29,31,0.035) 1px, transparent 1px),
        linear-gradient(rgba(27,29,31,0.035) 1px, transparent 1px),
        var(--bg);
      background-size: 38px 38px;
      color: var(--text);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .shell {
      width: min(1180px, calc(100% - 36px));
      margin: 0 auto;
    }

    .topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 76px;
      gap: 18px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 850;
    }

    .mark {
      display: grid;
      place-items: center;
      width: 36px;
      height: 36px;
      border-radius: 6px;
      background: var(--text);
      color: #fff;
      font-size: 13px;
      letter-spacing: 0;
    }

    .nav {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--muted);
      font-size: 14px;
      font-weight: 750;
    }

    .nav a {
      min-height: 36px;
      display: inline-flex;
      align-items: center;
      border-radius: 999px;
      padding: 0 12px;
    }

    .nav a:hover,
    .nav a:focus-visible {
      background: rgba(255,255,255,0.72);
      color: var(--text);
    }

    .hero {
      min-height: min(760px, calc(84svh - 76px));
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 28px 0 46px;
    }

    .eyebrow {
      margin: 0 0 20px;
      color: var(--accent-dark);
      font-size: 13px;
      font-weight: 850;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    h1 {
      margin: 0;
      max-width: 980px;
      font-size: clamp(58px, 10vw, 132px);
      line-height: 0.86;
      letter-spacing: 0;
      font-weight: 950;
    }

    .lead {
      margin: 24px 0 0;
      max-width: 760px;
      color: var(--muted);
      font-size: clamp(18px, 2vw, 23px);
      line-height: 1.55;
      font-weight: 600;
    }

    .search-panel {
      width: min(940px, 100%);
      margin-top: 32px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: rgba(255,255,255,0.88);
      box-shadow: var(--shadow);
      overflow: hidden;
    }

    .search-row {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: 12px;
      padding: 12px;
    }

    .search-box {
      width: 100%;
      min-width: 0;
      min-height: 58px;
      border: 0;
      border-radius: 6px;
      background: transparent;
      color: var(--text);
      font: inherit;
      font-size: 18px;
      font-weight: 750;
      padding: 0 16px;
    }

    .search-box:focus {
      outline: 2px solid rgba(221, 63, 47, 0.22);
      background: #fff;
    }

    .search-button {
      min-height: 48px;
      border: 0;
      border-radius: 6px;
      background: var(--text);
      color: #fff;
      padding: 0 22px;
      font: inherit;
      font-weight: 850;
    }

    .prompt-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding: 0 12px 12px;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 32px;
      padding: 0 11px;
      border-radius: 999px;
      border: 1px solid var(--line);
      background: var(--surface-soft);
      color: #4c5560;
      font-size: 13px;
      font-weight: 750;
      cursor: pointer;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 12px;
      width: min(940px, 100%);
      margin-top: 26px;
    }

    .stat {
      border: 1px solid var(--line);
      border-radius: 8px;
      background: rgba(255,255,255,0.72);
      padding: 16px;
    }

    .stat strong {
      display: block;
      font-size: clamp(28px, 4vw, 44px);
      line-height: 1;
      font-weight: 950;
    }

    .stat span {
      display: block;
      margin-top: 8px;
      color: var(--muted);
      font-size: 13px;
      font-weight: 800;
      text-transform: uppercase;
    }

    .quick-links {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 14px;
      margin: 10px 0 34px;
    }

    .quick-group {
      border: 1px solid var(--line);
      border-radius: 8px;
      background: var(--surface);
      padding: 18px;
    }

    .quick-group h2 {
      margin: 0 0 14px;
      font-size: 16px;
    }

    .quick-group a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 34px;
      border-top: 1px solid var(--line);
      color: var(--muted);
      font-size: 13px;
      font-weight: 750;
    }

    .quick-group a:first-of-type {
      border-top: 0;
    }

    .section {
      padding: 36px 0;
    }

    .section-head {
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 24px;
      margin-bottom: 22px;
    }

    .section h2 {
      margin: 0;
      font-size: clamp(28px, 4vw, 42px);
      letter-spacing: 0;
    }

    .section-intro {
      max-width: 640px;
      margin: 8px 0 0;
      color: var(--muted);
      line-height: 1.6;
      font-weight: 600;
    }

    .filter-group {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 8px;
    }

    .filter-button {
      min-height: 38px;
      border: 1px solid var(--line);
      border-radius: 999px;
      background: var(--surface);
      color: var(--muted);
      font: inherit;
      font-size: 13px;
      font-weight: 800;
      padding: 0 12px;
      cursor: pointer;
    }

    .filter-button span {
      color: #334155;
      margin-left: 4px;
    }

    .filter-button.active {
      border-color: var(--text);
      background: var(--text);
      color: #fff;
    }

    .filter-button.active span {
      color: #fff;
    }

    .directory-status {
      margin: 0 0 14px;
      color: var(--muted);
      font-size: 13px;
      font-weight: 800;
    }

    .entry-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 16px;
    }

    .entry-card {
      display: flex;
      flex-direction: column;
      min-height: 408px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: rgba(255,255,255,0.92);
      padding: 18px;
      box-shadow: 0 10px 30px rgba(51, 43, 34, 0.06);
    }

    .entry-card[hidden] {
      display: none;
    }

    .entry-card-head {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      align-items: center;
      margin-bottom: 16px;
    }

    .kind {
      width: fit-content;
      height: 28px;
      padding: 0 10px;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      background: #eaf2ff;
      color: #1d4ed8;
      font-size: 12px;
      font-weight: 850;
      text-transform: lowercase;
    }

    .kind.plugin {
      background: #e6f6ed;
      color: var(--green);
    }

    .entry-card h3 {
      margin: 0;
      font-size: 20px;
      line-height: 1.2;
    }

    .entry-summary {
      margin: 11px 0 0;
      color: var(--muted);
      line-height: 1.55;
      font-size: 14px;
    }

    .review {
      color: var(--accent-dark);
      font-size: 12px;
      font-weight: 850;
      text-transform: uppercase;
    }

    .install-command {
      display: block;
      margin-top: 16px;
      border: 1px solid var(--line);
      border-radius: 6px;
      background: #1b1d1f;
      color: #f8fafc;
      padding: 12px;
      font: 12px/1.45 ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      overflow-wrap: anywhere;
    }

    .entry-meta {
      display: grid;
      gap: 8px;
      margin: 18px 0 0;
      padding: 0;
    }

    .entry-meta div {
      display: grid;
      grid-template-columns: 82px minmax(0, 1fr);
      gap: 10px;
    }

    .entry-meta dt {
      color: var(--muted);
      font-size: 12px;
      font-weight: 850;
      text-transform: uppercase;
    }

    .entry-meta dd {
      margin: 0;
      color: var(--text);
      font-size: 13px;
      overflow-wrap: anywhere;
    }

    .tag-list,
    .capability-list {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 16px;
    }

    .tag-list span,
    .capability-list span {
      display: inline-flex;
      align-items: center;
      min-height: 26px;
      border-radius: 999px;
      padding: 0 9px;
      font-size: 12px;
      font-weight: 800;
    }

    .tag-list span {
      background: var(--surface-soft);
      color: #4c5560;
    }

    .capability-list span {
      background: #e6f6ed;
      color: var(--green);
    }

    .entry-links {
      display: flex;
      gap: 12px;
      margin-top: auto;
      padding-top: 18px;
      font-size: 13px;
      font-weight: 850;
    }

    .entry-links a {
      color: var(--blue);
    }

    .empty-state {
      margin-top: 18px;
      border: 1px dashed var(--line);
      border-radius: 8px;
      background: var(--surface);
      color: var(--muted);
      padding: 22px;
    }

    .surface-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
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

    @media (prefers-color-scheme: dark) {
      :root {
        --bg: #101112;
        --surface: #181a1d;
        --surface-soft: #22252a;
        --text: #f4f1eb;
        --muted: #a7adb5;
        --line: #30343a;
        --accent: #ff6b57;
        --accent-dark: #ff947f;
        --green: #62d18f;
        --blue: #8db4ff;
        --yellow: #ffd37a;
        --shadow: 0 22px 60px rgba(0, 0, 0, 0.28);
      }

      body {
        background:
          linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px),
          linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
          var(--bg);
        background-size: 38px 38px;
      }

      .search-panel,
      .stat,
      .entry-card {
        background: rgba(24,26,29,0.92);
      }

      .search-box:focus {
        background: #181a1d;
      }
    }

    @media (max-width: 860px) {
      .shell {
        width: min(320px, calc(100dvw - 36px));
        padding: 0;
      }

      .topbar {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 16px 0;
      }

      .nav {
        flex-wrap: nowrap;
        max-width: 100%;
        overflow-x: auto;
        padding-bottom: 2px;
      }

      .hero {
        min-height: auto;
        padding: 44px 0 34px;
      }

      h1 {
        max-width: 100%;
        font-size: clamp(38px, 11vw, 44px);
        line-height: 0.92;
        overflow-wrap: break-word;
      }

      .stats,
      .quick-links,
      .surface-grid {
        grid-template-columns: 1fr;
      }

      .search-row {
        grid-template-columns: 1fr;
      }

      .search-button {
        width: 100%;
      }

      .prompt-chips {
        flex-wrap: nowrap;
        overflow-x: auto;
      }

      .section-head {
        align-items: flex-start;
        flex-direction: column;
      }

      .entry-grid {
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
        <a href="#directory">Skills</a>
        <a href="#directory">Plugins</a>
        <a href="/corehub/publisher">Publishers</a>
        <a href="https://docs.coreblow.com/corehub/quickstart">Docs</a>
        <a href="https://github.com/coreblow/corehub">GitHub</a>
      </nav>
    </header>

    <main>
      <section class="hero">
        <p class="eyebrow">Built by the CoreBlow community.</p>
        <h1>Equip. Install. Ship. Build.</h1>
        <p class="lead">
          Discover reviewed skills, plugins, providers, and channel integrations for the CoreBlow runtime.
          Every listing keeps publisher identity, review state, artifact metadata, and install commands in reach.
        </p>

        <div class="search-panel" role="search" aria-label="Search CoreHub">
          <div class="search-row">
            <input class="search-box" id="corehub-search" type="search" placeholder="Search plugins, skills, publishers, capabilities" aria-label="Search CoreHub entries" autocomplete="off" />
            <button class="search-button" type="button" id="corehub-search-button">Search</button>
          </div>
          <div class="prompt-chips" aria-label="Suggested CoreHub searches">
            <button class="chip" type="button" data-query="plugin">plugin</button>
            <button class="chip" type="button" data-query="skill">skill</button>
            <button class="chip" type="button" data-query="security">security</button>
            <button class="chip" type="button" data-query="runtime">runtime</button>
            <button class="chip" type="button" data-query="compatibility">compatibility</button>
          </div>
        </div>

        <div class="stats" aria-label="CoreHub stats">
          <div class="stat"><strong>${coreHubKindCounts.all}</strong><span>tools</span></div>
          <div class="stat"><strong>${coreHubPublisherCount}</strong><span>publishers</span></div>
          <div class="stat"><strong>${coreHubVersionCount}</strong><span>versions</span></div>
          <div class="stat"><strong>${coreHubVerifiedCount}</strong><span>verified</span></div>
        </div>
      </section>

      <section class="quick-links" aria-label="CoreHub quick links">
        <div class="quick-group">
          <h2>Browse</h2>
          <a href="#directory">Skills <span>${coreHubKindCounts.skill}</span></a>
          <a href="#directory">Plugins <span>${coreHubKindCounts.plugin}</span></a>
          <a href="/corehub/api/v1">Registry API <span>v1</span></a>
        </div>
        <div class="quick-group">
          <h2>Publish</h2>
          <a href="/corehub/publisher">Publisher Portal <span>open</span></a>
          <a href="https://docs.coreblow.com/corehub/cli">CLI Publish <span>docs</span></a>
          <a href="/corehub/catalog.json">Catalog JSON <span>raw</span></a>
        </div>
        <div class="quick-group">
          <h2>Community</h2>
          <a href="https://github.com/coreblow/corehub">GitHub <span>repo</span></a>
          <a href="https://github.com/coreblow/corehub/issues">Issues <span>triage</span></a>
          <a href="https://github.com/coreblow/corehub/security/policy">Security <span>policy</span></a>
        </div>
        <div class="quick-group">
          <h2>Platform</h2>
          <a href="/health">Website Status <span>ok</span></a>
          <a href="/corehub/api/v1/packages/plugin-lab/download?redirect=false">Signed Read <span>${coreHubDownloadableCount}</span></a>
          <a href="https://docs.coreblow.com/corehub/trust-model">Trust Model <span>docs</span></a>
        </div>
      </section>

      <section class="section" id="directory" aria-label="CoreHub directory">
        <div class="section-head">
          <div>
            <h2>Browse</h2>
            <p class="section-intro">Search the canonical CoreHub catalog. Results update locally and stay aligned with the served Registry API.</p>
          </div>
          <div class="filter-group" aria-label="Filter CoreHub entries">
            ${coreHubFilterHtml}
          </div>
        </div>
        <p class="directory-status" id="corehub-status"></p>
        <div class="entry-grid" id="corehub-entries">
          ${coreHubEntriesHtml}
        </div>
        <p class="empty-state" id="corehub-empty" hidden>No CoreHub entries match the current view.</p>
      </section>

      <section class="section" aria-label="CoreHub capabilities">
        <div class="section-head">
          <div>
            <h2>Platform</h2>
            <p class="section-intro">CoreHub keeps discovery pretty on the surface and strict underneath: publisher identity, signed downloads, compatibility metadata, and auditable APIs.</p>
          </div>
        </div>
        <div class="surface-grid">
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
          <article class="tile">
            <h3>Downloads</h3>
            <p>Signed read metadata points clients to external artifact URLs while CoreHub remains the trust boundary.</p>
          </article>
        </div>
      </section>
    </main>

    <footer class="footer">CoreHub lives at coreblow.com/corehub and is maintained in github.com/coreblow/corehub.</footer>
  </div>
  <script>
    const searchInput = document.querySelector("#corehub-search");
    const searchButton = document.querySelector("#corehub-search-button");
    const statusNode = document.querySelector("#corehub-status");
    const emptyNode = document.querySelector("#corehub-empty");
    const cards = Array.from(document.querySelectorAll(".entry-card"));
    const buttons = Array.from(document.querySelectorAll(".filter-button"));
    const chips = Array.from(document.querySelectorAll(".chip"));
    let activeKind = "all";

    function updateDirectory() {
      const query = searchInput.value.trim().toLowerCase();
      let visible = 0;

      cards.forEach((card) => {
        const kindMatches = activeKind === "all" || card.dataset.kind === activeKind;
        const queryMatches = !query || card.dataset.search.includes(query);
        const show = kindMatches && queryMatches;
        card.hidden = !show;
        if (show) visible += 1;
      });

      statusNode.textContent = visible === 1 ? "1 entry" : visible + " entries";
      emptyNode.hidden = visible !== 0;
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        activeKind = button.dataset.filter;
        buttons.forEach((item) => {
          const isActive = item === button;
          item.classList.toggle("active", isActive);
          item.setAttribute("aria-pressed", String(isActive));
        });
        updateDirectory();
      });
    });

    searchInput.addEventListener("input", updateDirectory);
    searchButton.addEventListener("click", () => document.querySelector("#directory").scrollIntoView({ block: "start" }));
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        searchInput.value = chip.dataset.query || "";
        updateDirectory();
        document.querySelector("#directory").scrollIntoView({ block: "start" });
      });
    });
    updateDirectory();
  </script>
</body>
</html>`;

const COREHUB_SOVEREIGN_STORE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CoreHub</title>
  <meta name="description" content="CoreHub is the CoreBlow directory for skills, plugins, providers, channels, review metadata, and compatibility information." />
  <script>
    (() => {
      try {
        const stored = localStorage.getItem("corehub-theme") || "system";
        const resolved = stored === "system"
          ? (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")
          : stored;
        document.documentElement.dataset.corehubTheme = resolved;
        document.documentElement.dataset.corehubThemeMode = stored;
      } catch {
        document.documentElement.dataset.corehubTheme = "dark";
        document.documentElement.dataset.corehubThemeMode = "system";
      }
    })();
  </script>
  <style>
    *, *::before, *::after { box-sizing: border-box; }

    :root {
      --bg: #ffffff;
      --surface: rgba(255, 255, 255, 0.44);
      --surface-soft: rgba(248, 244, 255, 0.36);
      --ink: #17132f;
      --ink-soft: #555a72;
      --muted: #697088;
      --line: rgba(132, 111, 255, 0.22);
      --line-strong: rgba(132, 111, 255, 0.38);
      --accent: #5f46ff;
      --accent-soft: rgba(233, 227, 255, 0.62);
      --accent-line: rgba(132, 111, 255, 0.34);
      --opera-violet: #5021ff;
      --opera-violet-soft: rgba(233, 227, 255, 0.62);
      --radius: 8px;
      --ui-font: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    html { min-height: 100%; }

    body {
      margin: 0;
      min-height: 100vh;
      overflow-x: hidden;
      background:
        radial-gradient(circle at 86% 28%, rgba(80, 33, 255, 0.2), transparent 32%),
        radial-gradient(circle at 32% 42%, rgba(95, 70, 255, 0.09), transparent 34%),
        radial-gradient(circle at 70% 82%, rgba(120, 94, 255, 0.1), transparent 36%),
        linear-gradient(180deg, #ffffff 0%, #ffffff 54%, #f4f1ff 100%);
      background-repeat: no-repeat;
      color: var(--ink);
      font-family: var(--ui-font);
      -webkit-font-smoothing: antialiased;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button, input {
      font: inherit;
    }

    .app-shell {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
    }

    .navbar {
      border-bottom: 1px solid var(--line);
      background: rgba(255, 255, 255, 0.42);
      backdrop-filter: blur(26px) saturate(160%);
      -webkit-backdrop-filter: blur(26px) saturate(160%);
      box-shadow: 0 14px 42px rgba(80, 33, 255, 0.05);
    }

    .navbar-inner {
      width: min(1400px, calc(100% - 32px));
      margin: 0 auto;
    }

    .navbar-top {
      min-height: 62px;
      display: grid;
      grid-template-columns: 150px minmax(0, 1fr) auto;
      align-items: center;
      gap: 18px;
    }

    .nav-mobile {
      display: none;
    }

    .nav-mobile-trigger,
    .navbar-search-mobile-trigger,
    .theme-btn {
      width: 38px;
      height: 38px;
      border: 1px solid var(--line);
      border-radius: var(--radius);
      background: var(--surface);
      color: var(--ink);
      display: inline-grid;
      place-items: center;
      padding: 0;
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
      font-weight: 800;
    }

    .brand-mark {
      width: 30px;
      height: 30px;
      border-radius: 7px;
      display: grid;
      place-items: center;
      background: #050505;
      color: #fff;
      font-size: 12px;
      font-weight: 900;
      box-shadow: 0 1px 5px rgba(32, 28, 26, 0.18);
    }

    .brand-name {
      font-size: 16px;
      letter-spacing: 0;
    }

    .navbar-spacer {
      min-width: 0;
    }

    .hero-search input::placeholder {
      color: rgba(37, 43, 66, 0.55);
      opacity: 1;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .navbar-search-mobile-trigger {
      display: none;
    }

    .theme-toggle {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      min-height: 32px;
      border: 1px solid var(--line);
      border-radius: var(--radius);
      background: var(--surface);
      padding: 3px 8px;
      color: var(--muted);
      backdrop-filter: blur(18px) saturate(155%);
      -webkit-backdrop-filter: blur(18px) saturate(155%);
    }

    .theme-toggle button {
      width: 24px;
      height: 24px;
      border: 0;
      background: transparent;
      color: inherit;
      display: inline-grid;
      place-items: center;
      border-radius: 6px;
      padding: 0;
      cursor: pointer;
    }

    .theme-toggle button.is-active {
      background: rgba(95, 70, 255, 0.12);
      color: var(--accent);
      box-shadow: inset 0 0 0 1px rgba(95, 70, 255, 0.18);
    }

    .github-button {
      min-height: 32px;
      border: 1px solid var(--line);
      border-radius: var(--radius);
      background: var(--surface);
      color: var(--ink);
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 0 12px;
      font-size: 14px;
      font-weight: 700;
      white-space: nowrap;
      backdrop-filter: blur(18px) saturate(155%);
      -webkit-backdrop-filter: blur(18px) saturate(155%);
    }

    .navbar-tabs {
      min-height: 54px;
      display: flex;
      align-items: center;
      gap: 26px;
      border-top: 1px solid transparent;
    }

    .navbar-tabs-primary,
    .navbar-tabs-secondary {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .navbar-tabs-primary {
      padding-right: 28px;
      border-right: 1px solid var(--line);
    }

    .navbar-tab {
      min-height: 36px;
      display: inline-flex;
      align-items: center;
      gap: 7px;
      color: var(--muted);
      font-size: 14px;
    }

    .home-main {
      flex: 1;
    }

    .hero {
      position: relative;
      min-height: 412px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-bottom: 1px solid var(--line);
      background:
        radial-gradient(circle at 78% 48%, rgba(80, 33, 255, 0.22), transparent 42%),
        radial-gradient(circle at 50% 38%, rgba(95, 70, 255, 0.1), transparent 34%),
        linear-gradient(180deg, rgba(255, 255, 255, 0.46), rgba(247, 244, 255, 0.64));
      background-repeat: no-repeat;
      text-align: center;
      padding: 54px 20px 58px;
    }

    .hero-label {
      border: 0;
      background: transparent;
      color: #7b7f93;
      padding: 0;
      margin: 0 0 24px;
      font: 800 12px/1 var(--ui-font);
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }

    .headline {
      margin: 0;
      color: #2d255f;
      font: 850 clamp(44px, 5vw, 64px)/1.02 var(--ui-font);
      letter-spacing: -0.025em;
    }

    .headline .core {
      color: var(--accent);
      text-shadow: none;
    }

    .headline .sep {
      margin: 0 12px;
      color: rgba(132, 111, 255, 0.38);
      font-weight: 500;
    }

    .sub {
      margin: 22px 0 0;
      color: #3c4055;
      font-size: 17px;
      line-height: 1.5;
    }

    .hero-search-container {
      width: min(920px, 100%);
      margin-top: 34px;
      border-radius: 999px;
      background:
        linear-gradient(120deg, rgba(255, 255, 255, 0.42), rgba(104, 127, 255, 0.12) 52%, rgba(255, 255, 255, 0.18)),
        rgba(244, 239, 255, 0.2);
      border: 1px solid rgba(149, 177, 255, 0.5);
      backdrop-filter: blur(28px) saturate(175%);
      -webkit-backdrop-filter: blur(28px) saturate(175%);
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.64),
        inset 0 -1px 0 rgba(95, 70, 255, 0.08),
        0 0 0 1px rgba(80, 33, 255, 0.08),
        0 24px 60px rgba(80, 33, 255, 0.15);
      padding: 4px;
      overflow: hidden;
    }

    .hero-search {
      min-height: 66px;
      border: 0;
      border-radius: 999px;
      background: transparent;
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 18px;
      padding: 0 4px 0 26px;
      color: var(--ink);
    }

    .hero-search input {
      min-width: 0;
      border: 0;
      outline: 0;
      background: transparent;
      color: var(--ink);
      font-size: 24px;
      font-weight: 400;
    }

    .hero-search input::placeholder {
      color: rgba(37, 43, 66, 0.55);
    }

    .hero-search-go {
      min-width: 138px;
      min-height: 58px;
      border: 1px solid rgba(128, 173, 255, 0.58);
      border-radius: 999px;
      background:
        linear-gradient(180deg, rgba(255, 255, 255, 0.42), rgba(124, 142, 221, 0.18)),
        rgba(96, 118, 190, 0.24);
      color: #ffffff;
      backdrop-filter: blur(18px) saturate(160%);
      -webkit-backdrop-filter: blur(18px) saturate(160%);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 0 28px;
      font-size: 25px;
      font-weight: 400;
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.52),
        0 12px 26px rgba(104, 180, 255, 0.18);
      cursor: pointer;
    }

    .hero-search-go-label {
      display: inline;
    }

    .hero-search-clear {
      font-size: 34px;
      line-height: 1;
      font-weight: 300;
      transform: translateY(-1px);
    }

    .suggestions {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      margin-top: 16px;
    }

    .suggestion {
      min-height: 34px;
      border: 1px solid var(--line-strong);
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.24);
      color: #3c4055;
      padding: 0 15px;
      font-size: 14px;
      cursor: pointer;
      backdrop-filter: blur(16px) saturate(145%);
      -webkit-backdrop-filter: blur(16px) saturate(145%);
    }

    .featured {
      border-top: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
      background:
        radial-gradient(circle at 78% 6%, rgba(120, 94, 255, 0.14), transparent 34%),
        linear-gradient(90deg, rgba(255, 255, 255, 0.24), rgba(247, 239, 255, 0.16) 52%, rgba(255, 255, 255, 0.22)),
        rgba(247, 244, 255, 0.14);
      backdrop-filter: blur(18px) saturate(135%);
      -webkit-backdrop-filter: blur(18px) saturate(135%);
      padding: 36px 0 46px;
    }

    .featured-inner {
      width: min(1330px, calc(100% - 96px));
      margin: 0 auto;
    }

    .featured-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      margin-bottom: 28px;
    }

    .featured-title {
      margin: 0;
      color: #534a45;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }

    .featured-actions {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #534a45;
      font-size: 13px;
      white-space: nowrap;
    }

    .featured-view {
      color: inherit;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }

    .featured-arrow {
      width: 36px;
      height: 36px;
      border: 1px solid rgba(160, 177, 255, 0.34);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.28);
      color: var(--accent);
      display: grid;
      place-items: center;
      backdrop-filter: blur(18px) saturate(150%);
      -webkit-backdrop-filter: blur(18px) saturate(150%);
    }

    .featured-rail {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: minmax(306px, 32%);
      gap: 16px;
      overflow-x: auto;
      overscroll-behavior-inline: contain;
      scroll-snap-type: x proximity;
      padding-bottom: 4px;
      scrollbar-width: none;
    }

    .featured-rail::-webkit-scrollbar {
      display: none;
    }

    .featured-card {
      min-height: 232px;
      border: 1px solid rgba(162, 176, 255, 0.42);
      border-radius: 8px;
      background:
        linear-gradient(145deg, rgba(255, 255, 255, 0.44), rgba(248, 244, 255, 0.2)),
        rgba(255, 255, 255, 0.18);
      backdrop-filter: blur(24px) saturate(165%);
      -webkit-backdrop-filter: blur(24px) saturate(165%);
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.62),
        inset 0 -1px 0 rgba(95, 70, 255, 0.06),
        0 18px 42px rgba(83, 63, 145, 0.1);
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      scroll-snap-align: start;
    }

    .featured-card.compact {
      min-height: 174px;
      padding: 24px;
    }

    .featured-card h3 {
      margin: 0;
      color: #2b2725;
      font-size: 16px;
      font-weight: 760;
    }

    .featured-byline {
      margin: 4px 0 16px;
      color: #867a72;
      font-size: 13px;
    }

    .featured-kind {
      display: inline-flex;
      align-items: center;
      min-height: 25px;
      width: fit-content;
      border: 1px solid rgba(162, 176, 255, 0.3);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.24);
      color: #6f7182;
      padding: 0 10px;
      font-size: 12px;
    }

    .featured-summary {
      margin: 16px 0 0;
      color: #62564e;
      font-size: 13px;
      line-height: 1.48;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .featured-card-foot {
      display: flex;
      align-items: center;
      gap: 13px;
      margin-top: 22px;
      color: #958981;
      font-size: 12px;
    }

    .featured-card.compact .featured-card-foot {
      margin-top: 18px;
    }

    .featured-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 16px;
      margin-top: 16px;
    }

    .featured-grid + .featured-head {
      margin-top: 52px;
      padding-top: 32px;
      border-top: 1px solid var(--line);
    }

    .featured-stat {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      min-width: 0;
    }

    .featured-install {
      margin-left: auto;
      min-height: 34px;
      border: 1px solid rgba(132, 111, 255, 0.36);
      border-radius: 8px;
      background:
        linear-gradient(145deg, rgba(255, 255, 255, 0.32), rgba(233, 227, 255, 0.26)),
        rgba(233, 227, 255, 0.24);
      color: var(--accent);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 0 12px;
      font-size: 13px;
      font-weight: 720;
      cursor: pointer;
      backdrop-filter: blur(16px) saturate(150%);
      -webkit-backdrop-filter: blur(16px) saturate(150%);
    }

    .categories {
      width: min(1330px, calc(100% - 96px));
      margin: 0 auto;
      padding: 40px 0 24px;
      border-bottom: 1px solid var(--line);
      background: transparent;
    }

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      align-items: center;
    }

    .cat-item {
      min-height: 76px;
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 16px;
      padding: 0 24px;
      color: var(--ink);
    }

    .cat-item + .cat-item {
      border-left: 1px solid var(--line);
    }

    .cat-icon {
      width: 44px;
      height: 44px;
      border: 1px solid var(--accent-line);
      border-radius: 8px;
      background:
        linear-gradient(145deg, rgba(255, 255, 255, 0.34), rgba(233, 227, 255, 0.3)),
        var(--accent-soft);
      color: var(--accent);
      display: grid;
      place-items: center;
      backdrop-filter: blur(18px) saturate(150%);
      -webkit-backdrop-filter: blur(18px) saturate(150%);
    }

    .cat-name {
      display: block;
      font-size: 16px;
      font-weight: 800;
    }

    .cat-desc {
      display: block;
      margin-top: 4px;
      color: var(--muted);
      font-size: 14px;
    }

    .cat-arrow {
      display: none;
      color: var(--muted);
    }

    .proof-bar {
      width: min(920px, calc(100% - 96px));
      min-height: 88px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 42px;
      color: var(--ink);
    }

    .proof-item {
      display: inline-flex;
      align-items: baseline;
      gap: 8px;
      white-space: nowrap;
    }

    .proof-num {
      font: 800 22px/1 var(--ui-font);
      letter-spacing: -0.02em;
    }

    .proof-label {
      color: var(--muted);
      font-size: 13px;
    }

    .proof-sep {
      width: 1px;
      height: 18px;
      background: var(--line);
    }

    .site-footer {
      margin-top: 128px;
      border-top: 1px solid var(--line);
      background: rgba(255, 255, 255, 0.34);
      backdrop-filter: blur(24px) saturate(145%);
      -webkit-backdrop-filter: blur(24px) saturate(145%);
    }

    .site-footer-inner {
      width: min(1080px, calc(100% - 96px));
      margin: 0 auto;
      padding: 28px 0 0;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 54px;
    }

    .footer-col-title {
      margin: 0 0 12px;
      color: #3c4055;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .footer-col-links {
      display: grid;
      gap: 8px;
    }

    .footer-col-links a {
      color: var(--muted);
      font-size: 13px;
    }

    html[data-corehub-theme="light"],
    html[data-corehub-theme="light"] :root {
      --surface: rgba(255, 255, 255, 0.48);
      --surface-soft: rgba(248, 244, 255, 0.38);
      --ink: #17132f;
      --ink-soft: #555a72;
      --muted: #697088;
      --line: rgba(132, 111, 255, 0.16);
      --line-strong: rgba(132, 111, 255, 0.28);
      --accent: #5f46ff;
      --accent-soft: rgba(233, 227, 255, 0.62);
      --accent-line: rgba(132, 111, 255, 0.34);
    }

    html[data-corehub-theme="light"] body {
      background:
        radial-gradient(circle at 86% 28%, rgba(80, 33, 255, 0.16), transparent 32%),
        radial-gradient(circle at 42% 46%, rgba(95, 70, 255, 0.07), transparent 34%),
        linear-gradient(180deg, #ffffff 0%, #ffffff 54%, #f4f1ff 100%);
      background-repeat: no-repeat;
    }

    html[data-corehub-theme="light"] .navbar,
    html[data-corehub-theme="light"] .site-footer {
      background: rgba(255, 255, 255, 0.42);
    }

    html[data-corehub-theme="light"] .brand-mark {
      background: #050505;
      color: #fff;
    }

    html[data-corehub-theme="light"] .hero {
      background:
        radial-gradient(circle at 78% 48%, rgba(80, 33, 255, 0.18), transparent 42%),
        radial-gradient(circle at 50% 38%, rgba(95, 70, 255, 0.075), transparent 34%),
        linear-gradient(180deg, rgba(255, 255, 255, 0.46), rgba(247, 244, 255, 0.64));
      background-repeat: no-repeat;
    }

    html[data-corehub-theme="light"] .hero-label,
    html[data-corehub-theme="light"] .sub,
    html[data-corehub-theme="light"] .featured-summary {
      color: var(--muted);
    }

    html[data-corehub-theme="light"] .headline {
      color: #2d255f;
    }

    html[data-corehub-theme="light"] .hero-search-container,
    html[data-corehub-theme="light"] .featured-card {
      background:
        linear-gradient(145deg, rgba(255, 255, 255, 0.44), rgba(248, 244, 255, 0.2)),
        rgba(255, 255, 255, 0.18);
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.62),
        0 18px 42px rgba(83, 63, 145, 0.1);
    }

    html[data-corehub-theme="light"] .hero-search,
    html[data-corehub-theme="light"] .hero-search input {
      color: var(--ink);
    }

    html[data-corehub-theme="light"] .hero-search input::placeholder {
      color: rgba(37, 43, 66, 0.55);
    }

    html[data-corehub-theme="light"] .suggestion,
    html[data-corehub-theme="light"] .theme-toggle,
    html[data-corehub-theme="light"] .github-button,
    html[data-corehub-theme="light"] .featured-arrow {
      background: rgba(255, 255, 255, 0.66);
    }

    html[data-corehub-theme="light"] .featured {
      background:
        radial-gradient(circle at 78% 6%, rgba(120, 94, 255, 0.1), transparent 34%),
        linear-gradient(90deg, rgba(255, 255, 255, 0.24), rgba(247, 239, 255, 0.16) 52%, rgba(255, 255, 255, 0.22)),
        rgba(247, 244, 255, 0.14);
    }

    html[data-corehub-theme="light"] .featured-title,
    html[data-corehub-theme="light"] .footer-col-title,
    html[data-corehub-theme="light"] .featured-card h3 {
      color: var(--ink);
    }

    html[data-corehub-theme="light"] .featured-byline,
    html[data-corehub-theme="light"] .featured-card-foot,
    html[data-corehub-theme="light"] .featured-actions {
      color: var(--muted);
    }

    html[data-corehub-theme="light"] .categories {
      background: rgba(248, 244, 255, 0.3);
    }

    .mobile-only {
      display: none;
    }

    @media (max-width: 760px) {
      .navbar-inner {
        width: 100%;
      }

      .navbar-top {
        min-height: 56px;
        grid-template-columns: auto 1fr;
        gap: 8px;
        padding: 8px 10px;
      }

      .nav-mobile {
        display: block;
      }

      .brand,
      .nav-actions {
        display: none;
      }

      .navbar-spacer {
        min-width: 0;
      }

      .navbar-tabs {
        display: none;
      }

      .hero {
        min-height: 408px;
        padding: 50px 20px 40px;
      }

      .hero-label {
        margin-bottom: 24px;
        font-size: 13px;
        letter-spacing: 0.26em;
      }

      .headline {
        width: min(300px, 100%);
        max-width: 100%;
        font-size: 30px;
        line-height: 1.05;
        overflow-wrap: break-word;
      }

      .headline .sep {
        margin: 0 8px;
      }

      .sub {
        width: min(340px, 100%);
        max-width: 100%;
        font-size: 16px;
        white-space: normal;
      }

      .hero-search-container {
        width: min(100%, calc(100vw - 40px));
        max-width: calc(100vw - 40px);
        margin-top: 36px;
        backdrop-filter: blur(8px) saturate(115%);
        -webkit-backdrop-filter: blur(8px) saturate(115%);
      }

      .hero-search {
        min-height: 66px;
        grid-template-columns: auto minmax(0, 1fr) auto;
        gap: 12px;
        padding-left: 18px;
      }

      .hero-search input {
        width: 100%;
        font-size: 18px;
      }

      .hero-search-go {
        width: 58px;
        min-width: 58px;
        padding: 0;
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
      }

      .hero-search-go-label {
        display: none;
      }

      .suggestions {
        width: 100%;
        overflow: hidden;
        gap: 8px;
      }

      .suggestion {
        font-size: 13px;
        padding: 0 13px;
      }

      .featured {
        padding: 28px 0 36px;
      }

      .featured-inner {
        width: calc(100% - 40px);
      }

      .featured-head {
        align-items: flex-start;
        margin-bottom: 18px;
      }

      .featured-actions {
        gap: 6px;
      }

      .featured-view {
        display: none;
      }

      .featured-arrow {
        width: 34px;
        height: 34px;
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
      }

      .featured-rail {
        grid-auto-columns: minmax(282px, 86vw);
      }

      .featured-grid {
        grid-template-columns: minmax(282px, 86vw);
        grid-auto-flow: column;
        grid-auto-columns: minmax(282px, 86vw);
        overflow-x: auto;
        overscroll-behavior-inline: contain;
        scroll-snap-type: x proximity;
        scrollbar-width: none;
      }

      .featured-grid::-webkit-scrollbar {
        display: none;
      }

      .featured-card {
        min-height: 220px;
        padding: 20px;
      }

      .featured-card.compact {
        min-height: 216px;
        padding: 20px;
      }

      .featured-install {
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
      }

      .featured-grid + .featured-head {
        margin-top: 42px;
        padding-top: 28px;
      }

      .featured-card-foot {
        gap: 10px;
      }

      .featured-stat {
        max-width: 86px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .categories {
        width: calc(100% - 40px);
        padding: 32px 0 26px;
      }

      .categories-grid {
        grid-template-columns: 1fr;
        gap: 28px;
      }

      .cat-item {
        min-height: 72px;
        padding: 0 24px;
      }

      .cat-item + .cat-item {
        border-left: 0;
      }

      .proof-bar {
        width: calc(100% - 40px);
        min-height: 96px;
        justify-content: flex-start;
        gap: 24px;
        overflow: hidden;
      }

      .proof-num {
        font-size: 22px;
      }

      .site-footer {
        margin-top: 90px;
      }

      .site-footer-inner {
        width: calc(100% - 40px);
      }

      .footer-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="app-shell">
    <header class="navbar">
      <div class="navbar-inner">
        <div class="navbar-top">
          <div class="nav-mobile">
            <button class="nav-mobile-trigger" type="button" aria-label="Open menu">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
            </button>
          </div>
          <a class="brand" href="/corehub">
            <span class="brand-mark">CB</span>
            <span class="brand-name">CoreHub</span>
          </a>
          <div class="navbar-spacer" aria-hidden="true"></div>
          <div class="nav-actions">
            <button class="navbar-search-mobile-trigger" type="button" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
            </button>
            <div class="theme-toggle" aria-label="Theme controls">
              <button type="button" data-theme-mode="system" aria-label="Use system theme" title="System theme">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>
              </button>
              <button type="button" data-theme-mode="light" aria-label="Use light theme" title="Light theme">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M2 12h2"/><path d="M20 12h2"/></svg>
              </button>
              <button type="button" data-theme-mode="dark" aria-label="Use dark theme" title="Dark theme">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              </button>
            </div>
            <a class="github-button" href="https://github.com/coreblow/corehub">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.16 1.18.92-.26 1.9-.38 2.88-.39.98 0 1.96.13 2.88.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.39-5.25 5.67.42.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
              <span>Sign in with GitHub</span>
            </a>
          </div>
        </div>
        <nav class="navbar-tabs" aria-label="Content types">
          <div class="navbar-tabs-primary">
            <a href="/corehub/api/v1/entries?kind=skill" class="navbar-tab">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1a6 6 0 0 1-7.3 7.3l-7.9 7.9a1 1 0 0 1-3-3l7.9-7.9a6 6 0 0 1 7.3-7.3z"/></svg>
              Skills
            </a>
            <a href="/corehub/api/v1/entries?kind=plugin" class="navbar-tab">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22v-5"/><path d="M15 8V2"/><path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z"/><path d="M9 8V2"/></svg>
              Plugins
            </a>
          </div>
          <div class="navbar-tabs-secondary">
            <a href="/corehub/api/v1/publishers" class="navbar-tab">Publishers</a>
            <a href="https://docs.coreblow.com/corehub/quickstart" class="navbar-tab">Docs</a>
          </div>
        </nav>
      </div>
    </header>

    <main class="home-main">
      <section class="hero">
        <button class="hero-label" type="button">COREBLOW REGISTRY.</button>
        <h1 class="headline"><span class="core">CoreHub</span> for Skills and Plugins.</h1>
        <p class="sub">Find trusted CoreBlow extensions, ready in one search.</p>
        <div class="hero-search-container">
          <form class="hero-search" role="search" aria-label="Search CoreHub">
            <span class="hero-search-clear" aria-hidden="true">×</span>
            <input id="corehub-home-search" autofocus type="text" placeholder="What are you looking for?" />
            <button class="hero-search-go" type="submit">
              <span class="hero-search-go-label">Search</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </form>
        </div>
        <div class="suggestions">
          <button class="suggestion" type="button">self-improving agent</button>
          <button class="suggestion" type="button">GitHub integration</button>
          <button class="suggestion" type="button">security soul</button>
          <button class="suggestion" type="button">dashboard builder</button>
        </div>
      </section>

      <section class="featured" aria-labelledby="featured-skills-title">
        <div class="featured-inner">
          <div class="featured-head">
            <h2 class="featured-title" id="featured-skills-title">Featured Skills</h2>
            <div class="featured-actions">
              <a class="featured-view" href="/corehub/api/v1/entries?kind=skill">
                View all
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <button class="featured-arrow" type="button" aria-label="Previous featured skill">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button class="featured-arrow" type="button" aria-label="Next featured skill">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>
          <div class="featured-rail" aria-label="Featured CoreHub entries">
            ${coreHubFeaturedHtml}
          </div>
          <div class="featured-head">
            <h2 class="featured-title">Featured Plugins</h2>
            <div class="featured-actions">
              <a class="featured-view" href="/corehub/api/v1/entries?kind=plugin">
                View all
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
          <div class="featured-grid" aria-label="Featured CoreHub plugins">
            ${coreHubPluginFeaturedHtml}
          </div>
        </div>
      </section>

      <section class="categories" aria-label="CoreHub categories">
        <div class="categories-grid">
          <a href="/corehub/api/v1/entries?kind=skill" class="cat-item">
            <span class="cat-icon"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.29 7 8.71 5 8.71-5"/></svg></span>
            <span class="cat-text"><span class="cat-name">Skills</span><span class="cat-desc">Agent skill bundles</span></span>
            <span class="cat-arrow">›</span>
          </a>
          <a href="/corehub/api/v1/entries?kind=plugin" class="cat-item">
            <span class="cat-icon"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg></span>
            <span class="cat-text"><span class="cat-name">Plugins</span><span class="cat-desc">Gateway plugins</span></span>
            <span class="cat-arrow">›</span>
          </a>
          <a href="/corehub/api/v1/publishers" class="cat-item">
            <span class="cat-icon"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.74"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg></span>
            <span class="cat-text"><span class="cat-name">Publishers</span><span class="cat-desc">Builders and orgs</span></span>
            <span class="cat-arrow">›</span>
          </a>
        </div>
      </section>

      <div class="proof-bar" aria-label="CoreHub proof stats">
        <div class="proof-item"><span class="proof-num">${coreHubKindCounts.all}</span><span class="proof-label">tools</span></div>
        <span class="proof-sep"></span>
        <div class="proof-item"><span class="proof-num">${coreHubPublisherCount}</span><span class="proof-label">users</span></div>
        <span class="proof-sep"></span>
        <div class="proof-item"><span class="proof-num">${coreHubDownloadableCount}</span><span class="proof-label">downloads</span></div>
        <span class="proof-sep"></span>
        <div class="proof-item"><span class="proof-num">${coreHubVerifiedCount}</span><span class="proof-label">avg rating</span></div>
      </div>
    </main>

    <footer class="site-footer" role="contentinfo">
      <div class="site-footer-inner">
        <div class="footer-grid">
          <div class="footer-col">
            <h4 class="footer-col-title">Browse</h4>
            <div class="footer-col-links">
              <a href="/corehub/api/v1/entries?kind=skill">Skills</a>
              <a href="/corehub/api/v1/entries?kind=plugin">Plugins</a>
              <a href="/corehub/api/v1">Audits</a>
            </div>
          </div>
          <div class="footer-col">
            <h4 class="footer-col-title">Publish</h4>
            <div class="footer-col-links">
              <a href="/corehub/publisher">Publish Skill</a>
              <a href="/corehub/publisher">Publish Plugin</a>
            </div>
          </div>
          <div class="footer-col">
            <h4 class="footer-col-title">Community</h4>
            <div class="footer-col-links">
              <a href="https://github.com/coreblow/corehub">GitHub</a>
              <a href="https://coreblow.com">CoreBlow</a>
            </div>
          </div>
          <div class="footer-col">
            <h4 class="footer-col-title">Platform</h4>
            <div class="footer-col-links">
              <a href="https://workers.cloudflare.com">Deployed on Cloudflare</a>
              <a href="https://developers.cloudflare.com/d1/">Powered by D1</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <script>
    const forms = Array.from(document.querySelectorAll("form[role='search']"));
    const heroInput = document.querySelector("#corehub-home-search");
    const suggestionButtons = Array.from(document.querySelectorAll(".suggestion"));
    const themeButtons = Array.from(document.querySelectorAll("[data-theme-mode]"));
    const themeMedia = window.matchMedia("(prefers-color-scheme: light)");

    function resolveTheme(mode) {
      return mode === "system" ? (themeMedia.matches ? "light" : "dark") : mode;
    }

    function applyCoreHubTheme(mode) {
      const selectedMode = ["system", "light", "dark"].includes(mode) ? mode : "system";
      document.documentElement.dataset.corehubThemeMode = selectedMode;
      document.documentElement.dataset.corehubTheme = resolveTheme(selectedMode);
      try {
        localStorage.setItem("corehub-theme", selectedMode);
      } catch {
        // Ignore storage failures; the current page can still switch theme.
      }
      themeButtons.forEach((button) => {
        const active = button.dataset.themeMode === selectedMode;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
    }

    function searchCoreHub(value) {
      const query = String(value || "").trim();
      if (!query) return;
      window.location.href = "/corehub/api/v1/search?q=" + encodeURIComponent(query);
    }

    forms.forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        searchCoreHub(form.querySelector("input")?.value);
      });
    });

    suggestionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        if (heroInput) heroInput.value = button.textContent.trim();
        searchCoreHub(button.textContent);
      });
    });

    themeButtons.forEach((button) => {
      button.addEventListener("click", () => applyCoreHubTheme(button.dataset.themeMode));
    });

    themeMedia.addEventListener("change", () => {
      if (document.documentElement.dataset.corehubThemeMode === "system") {
        applyCoreHubTheme("system");
      }
    });

    applyCoreHubTheme(document.documentElement.dataset.corehubThemeMode || "system");
  </script>
</body>
</html>`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/install.sh' || url.pathname === '/install-cli.sh') {
      return new Response(INSTALL_SH, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=300',
        },
      });
    }

    if (url.pathname === '/install.ps1') {
      return new Response(INSTALL_PS1, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=300',
        },
      });
    }

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

    if (url.pathname === '/corehub/api/v1' || url.pathname.startsWith('/corehub/api/v1/')) {
      return handleCoreHubApi(url, env);
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
      return new Response(COREHUB_SOVEREIGN_STORE_HTML, {
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
