export function Contact({ profile }) {
  return (
    <section className="contact-section" id="contact">
      <p className="section-kicker">Contact</p>
      <h2>Have a product, role, or idea that needs a careful engineer?</h2>
      <p>
        I am ready to talk through the problem, shape the approach, and build
        the software with focus.
      </p>
      <a className="button primary" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <div className="contact-links" aria-label="Profile links">
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.portfolio} target="_blank" rel="noreferrer">
          Portfolio
        </a>
      </div>
    </section>
  )
}
