import SectionTitle from '../components/SectionTitle'

export default function About() {
  return (
    <section className="section white page-section">
      <div className="container">
        <SectionTitle
          title="About AWS Community Group"
          subtitle="A student-led community helping peers learn cloud through action."
        />
        <div className="content-card">
          <p>
            Our mission is to make cloud education accessible, practical, and career-oriented for every student in our college.
            We organize workshops, hackathons, certifications guidance, and mentorship opportunities.
          </p>
          <p>
            Whether you are a beginner or already building projects, this community gives you a space to grow, collaborate,
            and connect with industry experts.
          </p>
        </div>
      </div>
    </section>
  )
}