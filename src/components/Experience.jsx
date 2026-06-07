export function Experience({ experience }) {
  return (
    <section className="section-band" id="experience">
      <div className="section-heading">
        <p className="section-kicker">Experience</p>
        <h2>Engineering strengths that travel across projects.</h2>
      </div>
      <div className="experience-list">
        {experience.map((item, index) => (
          <article className="experience-item" key={item.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
