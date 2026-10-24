import { useState, type ReactNode } from "react"

type IconName = "grid" | "game" | "target" | "cube" | "clock" | "zap" | "temp" | "layers" | "flask" | "spark" | "palette" | "key" | "gauge" | "sun" | "shield" | "wifi" | "tool" | "search" | "bell" | "settings" | "chevron" | "play" | "pause" | "previous" | "next" | "volume" | "activity" | "check"

const paths: Record<IconName, ReactNode> = {
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="7" rx="2" />
      <rect x="3" y="14" width="7" height="7" rx="2" />
      <rect x="14" y="14" width="7" height="7" rx="2" />
    </>
  ),
  game: (
    <>
      <path d="M8.5 12h-3m1.5-1.5v3" />
      <path d="M15.5 13h.01M18 11h.01" />
      <path d="M7 7h10a5 5 0 0 1 4.7 6.7l-1.1 3.1a2.8 2.8 0 0 1-4.7 1l-1.4-1.3h-5l-1.4 1.3a2.8 2.8 0 0 1-4.7-1l-1.1-3.1A5 5 0 0 1 7 7Z" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  cube: (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4.3 7.7 7.7 4.4 7.7-4.4M12 12.1V21" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  zap: <path d="m13 2-9 12h8l-1 8 9-12h-8l1-8Z" />,
  temp: (
    <>
      <path d="M14 14.8V5a2 2 0 1 0-4 0v9.8a4 4 0 1 0 4 0Z" />
      <path d="M12 11v6" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3" />
      <path d="M7.5 16h9" />
    </>
  ),
  spark: (
    <>
      <path d="m12 3-1.4 4.2a5 5 0 0 1-3.2 3.2L3 12l4.4 1.6a5 5 0 0 1 3.2 3.2L12 21l1.4-4.2a5 5 0 0 1 3.2-3.2L21 12l-4.4-1.6a5 5 0 0 1-3.2-3.2L12 3Z" />
    </>
  ),
  palette: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="8" cy="9" r=".8" fill="currentColor" />
      <circle cx="12" cy="7" r=".8" fill="currentColor" />
      <circle cx="16" cy="10" r=".8" fill="currentColor" />
      <path d="M15 18c-1.5 0-2-1-1.3-2 .8-1.2 2.5-.8 4-.4" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="m11 12 8-8M15 8l2 2M17 6l2 2" />
    </>
  ),
  gauge: (
    <>
      <path d="M4.9 19a9 9 0 1 1 14.2 0" />
      <path d="m12 13 4-4M9 19h6" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 2.8 8 7 10 4.2-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  wifi: (
    <>
      <path d="M3 9a14 14 0 0 1 18 0M6 12.5a9 9 0 0 1 12 0M9.5 16a4 4 0 0 1 5 0" />
      <circle cx="12" cy="19" r=".7" fill="currentColor" />
    </>
  ),
  tool: (
    <>
      <path d="M14.5 6.5a4 4 0 0 0-5-5L12 4l-3 3-2.5-2.5a4 4 0 0 0 5 5L19 17a1.4 1.4 0 0 1-2 2l-7.5-7.5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
    </>
  ),
  chevron: <path d="m9 18 6-6-6-6" />,
  play: <path d="m9 7 8 5-8 5V7Z" fill="currentColor" stroke="none" />,
  pause: (
    <>
      <path d="M9 8v8M15 8v8" />
    </>
  ),
  previous: (
    <>
      <path d="M7 6v12M17 7l-8 5 8 5V7Z" />
    </>
  ),
  next: (
    <>
      <path d="M17 6v12M7 7l8 5-8 5V7Z" />
    </>
  ),
  volume: (
    <>
      <path d="M6 10H3v4h3l4 3V7l-4 3Z" />
      <path d="M14 9a4 4 0 0 1 0 6M17 6a8 8 0 0 1 0 12" />
    </>
  ),
  activity: <path d="M3 12h4l2-5 4 10 2-5h6" />,
  check: <path d="m6 12 4 4 8-8" />,
}

function Icon({ name, size = 18 }: { name: IconName size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

const nav = [
  { label: "Overview", icon: "grid" },
  { label: "Games", icon: "game" },
  { label: "Aim Trainer", icon: "target" },
  { label: "Roblox", icon: "cube" },
  { label: "Playtime", icon: "clock" },
  { label: "Debloat", icon: "zap" },
  { label: "Temps", icon: "temp" },
  { label: "Overlay", icon: "layers" },
  { label: "Tester", icon: "flask" },
  { label: "Assistant", icon: "spark" },
  { label: "Style", icon: "palette" },
  { label: "License", icon: "key" },
  { label: "Performance", icon: "gauge" },
  { label: "Appearance", icon: "sun" },
  { label: "Privacy", icon: "shield" },
  { label: "Network", icon: "wifi" },
  { label: "Maintenance", icon: "tool" },
] as const satisfies ReadonlyArray<{ label: string icon: IconName }>

function App() {
  const [active, setActive] = useState("Overview")
  const [playing, setPlaying] = useState(true)
  const [boost, setBoost] = useState(false)
  const [overlay, setOverlay] = useState(true)

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">
            <Icon name="zap" size={17} />
          </span>
          <span>tweak</span>
          <span className="brand-dot">.</span>
        </div>
        <nav className="nav-list" aria-label="Main navigation">
          {nav.map((item) => (
            <button
              key={item.label}
              className={`nav-item ${active === item.label ? "active" : ""}`}
              onClick={() => setActive(item.label)}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
              {item.label === "Assistant" && (
                <span className="ai-pill">AI</span>
              )}
            </button>
          ))}
        </nav>
        <div className="user-card">
          <div className="avatar">MS</div>
          <div>
            <strong>Marcus Stone</strong>
            <span>Pro license</span>
          </div>
          <Icon name="chevron" size={15} />
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Control center</p>
            <h1>{active}</h1>
          </div>
          <div className="top-actions">
            <label className="search">
              <Icon name="search" size={17} />
              <input aria-label="Search" placeholder="Search anything" />
            </label>
            <button className="icon-button" aria-label="Notifications">
              <Icon name="bell" />
              <span className="notification-dot" />
            </button>
            <button className="icon-button" aria-label="Settings">
              <Icon name="settings" />
            </button>
          </div>
        </header>

        <div className="dashboard">
          <section className="hero">
            <div className="hero-copy">
              <div className="status-label">
                <span />
                <span>System running smooth</span>
              </div>
              <h2>
                Your setup is
                <br />
                <em>dialed in.</em>
              </h2>
              <p>
                Everything looks good. Keep your performance profile active for
                the best gaming experience.
              </p>
              <button
                className={`boost-button ${boost ? "boosted" : ""}`}
                onClick={() => setBoost(!boost)}
              >
                <Icon name={boost ? "check" : "zap"} size={17} />
                {boost ? "Boost active" : "Quick boost"}
              </button>
            </div>
            <div className="score-wrap">
              <div className="score-ring">
                <div>
                  <strong>{boost ? "98" : "94"}</strong>
                  <span>System score</span>
                </div>
              </div>
              <div className="score-note">
                <Icon name="activity" size={15} /> Top 8% of similar systems
              </div>
            </div>
          </section>

          <section className="metrics-grid">
            <article className="metric-card">
              <div className="card-heading">
                <span className="metric-icon violet">
                  <Icon name="gauge" />
                </span>
                <span>CPU load</span>
                <small>LIVE</small>
              </div>
              <div className="metric-value">
                24<span>%</span>
              </div>
              <div className="sparkline">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <p>
                <span className="good-dot" /> Ryzen 7 7800X3D
              </p>
            </article>
            <article className="metric-card">
              <div className="card-heading">
                <span className="metric-icon blue">
                  <Icon name="temp" />
                </span>
                <span>GPU temp</span>
                <small>LIVE</small>
              </div>
              <div className="metric-value">
                57<span>°C</span>
              </div>
              <div className="temp-track">
                <i />
              </div>
              <p>
                <span className="good-dot" /> RTX 4070 Super
              </p>
            </article>
            <article className="metric-card">
              <div className="card-heading">
                <span className="metric-icon green">
                  <Icon name="wifi" />
                </span>
                <span>Network</span>
                <small>LIVE</small>
              </div>
              <div className="metric-value">
                12<span>ms</span>
              </div>
              <div className="network-stats">
                <span>↓ 842 Mbps</span>
                <span>↑ 94 Mbps</span>
              </div>
              <p>
                <span className="good-dot" /> Excellent connection
              </p>
            </article>
          </section>

          <section className="lower-grid">
            <article className="panel">
              <div className="panel-title">
                <div>
                  <span>Quick controls</span>
                  <p>Your most-used settings</p>
                </div>
                <button>
                  View all <Icon name="chevron" size={14} />
                </button>
              </div>
              <div className="controls">
                <button
                  className="control-row"
                  onClick={() => setBoost(!boost)}
                >
                  <span className="control-icon">
                    <Icon name="zap" />
                  </span>
                  <span>
                    <strong>Performance mode</strong>
                    <small>Prioritize gaming performance</small>
                  </span>
                  <span className={`toggle ${boost ? "on" : ""}`}>
                    <i />
                  </span>
                </button>
                <button
                  className="control-row"
                  onClick={() => setOverlay(!overlay)}
                >
                  <span className="control-icon">
                    <Icon name="layers" />
                  </span>
                  <span>
                    <strong>In-game overlay</strong>
                    <small>Show live stats while gaming</small>
                  </span>
                  <span className={`toggle ${overlay ? "on" : ""}`}>
                    <i />
                  </span>
                </button>
              </div>
            </article>

            <article className="spotify panel">
              <div className="spotify-top">
                <div className="spotify-logo">
                  <i />
                  <i />
                  <i />
                </div>
                <span>SPOTIFY</span>
                <button>•••</button>
              </div>
              <div className="track">
                <div className="album-art">
                  <span>V</span>
                </div>
                <div>
                  <strong>Nightcall</strong>
                  <span>Kavinsky</span>
                </div>
              </div>
              <div className="progress">
                <span>1:42</span>
                <div>
                  <i />
                </div>
                <span>4:17</span>
              </div>
              <div className="player-controls">
                <button aria-label="Previous">
                  <Icon name="previous" size={19} />
                </button>
                <button
                  className="play-button"
                  aria-label={playing ? "Pause" : "Play"}
                  onClick={() => setPlaying(!playing)}
                >
                  <Icon name={playing ? "pause" : "play"} size={22} />
                </button>
                <button aria-label="Next">
                  <Icon name="next" size={19} />
                </button>
                <span className="volume">
                  <Icon name="volume" size={17} />
                  <i>
                    <b />
                  </i>
                </span>
              </div>
            </article>
          </section>
        </div>
      </section>
    </main>
  )
}

export default App
