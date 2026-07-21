import SectionTitle from '../components/SectionTitle'
import { sponsors } from '../data/siteData'

export default function Sponsors() {
  return (
    <section className="section white page-section">
      <div className="container">
        <SectionTitle title="Sponsors" subtitle="Organizations supporting student innovation." />
        <div className="three-grid">
          {sponsors.map((s) => (
            <article key={s.name} className="feature-card">
              <span className="pill">{s.tier}</span>
              <h3>{s.name}</h3>
              <p>Supporting workshops, events, and student projects.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}