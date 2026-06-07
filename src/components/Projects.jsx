export function Projects({ projects }) {
  return (
    <section className="section-band" id="work">
      <div className="section-heading">
        <p className="section-kicker">Selected work</p>
        <h2>Projects shaped around outcomes.</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-topline">
              <span>{project.type}</span>
              <span>Featured</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link ? (
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                View project
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
