export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-hero">
        <div className="footer-hero-overlay">
          <h3>AWS Cloud Clubs</h3>
          <p>Learn • Build • Lead</p>
        </div>
      </div>

      <div className="container footer-grid">
        <div>
          <h4>AWS Community Group</h4>
          <p>College-driven cloud learning community.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <p>Events</p>
          <p>Workshops</p>
          <p>Hackathons</p>
        </div>
        <div>
          <h4>Resources</h4>
          <p>Learning Paths</p>
          <p>Student Credits</p>
          <p>Certification Support</p>
        </div>
        <div>
          <h4>Connect</h4>
          <div className="social-row">
            <span className="social-box" />
            <span className="social-box" />
            <span className="social-box" />
            <span className="social-box" />
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        © {new Date().getFullYear()} AWS Community Group • All rights reserved.
      </div>
    </footer>
  )
}