export function Hero({ profile }) {
  return (
    <section className="hero-section section-band">
      <div className="hero-copy">
        <p className="eyebrow">
          {profile.role} / {profile.location}
        </p>
        <h1>Pathum Rathnayaka</h1>
        <p className="hero-text">{profile.summary}</p>
        <div className="hero-actions">
          <a className="button primary" href="#work">
            View work
          </a>
          <a className="button secondary" href={`mailto:${profile.email}`}>
            Contact me
          </a>
        </div>
      </div>

      <aside className="hero-panel" aria-label="Profile highlights">
        <div className="portrait" aria-hidden="true">
          <img src="/og-image.png" alt="Pathum Rathnayaka - Software Engineer" />
        </div>
        <div>
          <p className="panel-label">Currently</p>
          <p className="panel-text">{profile.availability}</p>
        </div>
        <div className="quick-stats">
          <span>
            <strong>SaaS</strong>
            Platforms
          </span>
          <span>
            <strong>AI</strong>
            Monitoring
          </span>
          <span>
            <strong>Full</strong>
            Stack
          </span>
        </div>
      </aside>
    </section>
  )
}
