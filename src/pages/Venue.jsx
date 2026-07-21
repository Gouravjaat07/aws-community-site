import SectionTitle from '../components/SectionTitle'

export default function Venue() {
  return (
    <section className="section sage page-section">
      <div className="container">
        <SectionTitle title="Venue" subtitle="Where we host sessions and events." />
        <div className="content-card">
          <h3>Main Auditorium, Tech Block</h3>
          <p>ABC College of Engineering</p>
          <p>City, State, India</p>
          <p>
            <strong>Event Days:</strong> Saturday & Sunday
          </p>
          <p>
            <strong>Time:</strong> 10:00 AM – 4:00 PM
          </p>
        </div>
      </div>
    </section>
  )
}