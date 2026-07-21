import SectionTitle from '../components/SectionTitle'
import { speakers } from '../data/siteData'

export default function Speakers() {
  return (
    <section className="section yellow page-section">
      <div className="container">
        <SectionTitle title="Speakers" subtitle="Learn from cloud professionals and builders." />
        <div className="three-grid">
          {speakers.map((sp) => (
            <article key={sp.name} className="feature-card">
              <span className="pill">{sp.role}</span>
              <h3>{sp.name}</h3>
              <p><strong>Topic:</strong> {sp.topic}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}