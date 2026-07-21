import SectionTitle from '../components/SectionTitle'
import { team } from '../data/siteData'

export default function Team() {
  return (
    <section className="section white page-section">
      <div className="container">
        <SectionTitle title="Team" subtitle="Meet the students behind the community." />
        <div className="persona-grid">
          {team.map((member, i) => (
            <article
              key={member.name}
              className={`persona-card ${i % 3 === 0 ? 'sage' : i % 3 === 1 ? 'yellow-highlight' : 'dark-card'}`}
            >
              <span className="pill">Core Team</span>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}