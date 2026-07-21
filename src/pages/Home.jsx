import SectionTitle from '../components/SectionTitle'
import { heroStats, marqueeBrands } from '../data/siteData'

export default function Home() {
  return (
    <>
      <section className="hero dots-bg">
        <div className="container hero-grid">
          <div>
            <span className="badge">NEW: Student Cloud Builder Program</span>
            <h1>
              Build your future with <span className="stroke-word">AWS</span> on campus
            </h1>
            <p>
              Join workshops, speaker sessions, cloud labs, and hands-on projects designed for students who want to become cloud-native builders.
            </p>
            <div className="cta-row">
              <button className="btn btn-dark btn-lg">Start Free</button>
              <button className="btn btn-light">View Events</button>
            </div>
            <div className="stats-row">
              {heroStats.map((s) => (
                <div key={s.label} className="stat-card">
                  <h3>{s.value}</h3>
                  <p>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="browser-mockup">
            <div className="browser-top">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="browser-body">
              <div className="panel dark">
                <h4>Monthly Reach</h4>
                <p>+38%</p>
              </div>
              <div className="panel sage">
                <h4>Labs Completed</h4>
                <p>1,842</p>
              </div>
              <div className="panel sage wide">
                <h4>Upcoming Events</h4>
                <p>Cloud 101 • Serverless Sprint • GenAI Hack Night</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-wrap">
        <div className="marquee">
          {[...marqueeBrands, ...marqueeBrands].map((b, idx) => (
            <span key={`${b}-${idx}`}>{b}</span>
          ))}
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <SectionTitle title="Problem vs Solution" subtitle="Why students join our community." />
          <div className="two-grid">
            <article className="card problem">
              <h3>Problem</h3>
              <ul>
                <li>❌ Limited practical cloud exposure</li>
                <li>❌ No direct industry interaction</li>
                <li>❌ Unclear roadmap for certifications</li>
              </ul>
            </article>
            <article className="card solution">
              <h3>Solution</h3>
              <ul>
                <li>✅ Weekly hands-on cloud labs</li>
                <li>✅ Speaker sessions with experts</li>
                <li>✅ Guided pathways for AWS cert prep</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section yellow border-y">
        <div className="container">
          <SectionTitle title="Feature Grid" subtitle="Everything you need to grow your cloud skills." />
          <div className="three-grid">
            {['Hands-on Labs', 'Industry Talks', 'Project Pods', 'Hackathons', 'Mentorship', 'Career Support'].map((item) => (
              <article key={item} className="feature-card">
                <div className="icon-box" />
                <h3>{item}</h3>
                <p>Structured sessions and practical guidance for real learning outcomes.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <SectionTitle title="How It Works" subtitle="Three steps to become an active builder." />
          <div className="steps">
            <div className="step">
              <div className="step-circle sage-border">1</div>
              <h3>Join</h3>
              <p>Register and become part of the student community.</p>
            </div>
            <div className="step-line" />
            <div className="step">
              <div className="step-circle yellow-border">2</div>
              <h3>Learn</h3>
              <p>Attend labs, speaker sessions, and technical bootcamps.</p>
            </div>
            <div className="step-line" />
            <div className="step">
              <div className="step-circle white-border">3</div>
              <h3>Build</h3>
              <p>Create projects, showcase work, and unlock opportunities.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}