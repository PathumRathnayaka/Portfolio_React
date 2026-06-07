import { Icon } from '@iconify/react'

export function Skills({ skills }) {
  const filteredSkills = skills.filter((skill) => skill.icon !== null)

  return (
    <section className="section-band skills-section" id="skills">
      <div className="section-heading">
        <p className="section-kicker">Toolbox</p>
        <h2>Skills for building clean, useful products.</h2>
      </div>
      <div className="skill-collection">
        {filteredSkills.map((skill) => (
          <div key={skill.name} className="skill-pill" title={skill.name}>
            <Icon icon={skill.icon} className="skill-icon" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
