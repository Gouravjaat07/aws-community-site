import { FaLinkedinIn, FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/aws-student-builder-group-at-svsu/', icon: FaLinkedinIn },
    // { name: 'GitHub', href: 'https://github.com', icon: FaGithub },
    { name: 'Instagram', href: 'https://instagram.com', icon: FaInstagram },
    { name: 'X (Twitter)', href: 'https://x.com', icon: FaXTwitter },
  ]

  return (
    <footer className="relative overflow-hidden text-white border-t-2 border-black">
      {/* Background image layer */}
      <div className="absolute inset-0">
        <img
          src="/footer-banner.png"
          alt=""
          className="w-full h-full object-cover object-[65%_center]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      </div>

      {/* Tagline positioned right under the Cloud Clubs logo */}
      {/* <div className="absolute top-[190px] left-[8%] z-10">
        <p className="text-white/95">College-driven cloud learning community.</p>
      </div> */}

      {/* Content layer */}
      <div className="relative z-10 pt-10 pb-8 min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        <div className="mx-auto w-[92%] max-w-[1120px] grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-4">
          <div></div>

          <div>
            <h4 className="text-white font-semibold mb-2">Explore</h4>
            <p className="text-white/95">Events</p>
            <p className="text-white/95">Workshops</p>
            <p className="text-white/95">Hackathons</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Resources</h4>
            <p className="text-white/95">Learning Paths</p>
            <p className="text-white/95">Student Credits</p>
            <p className="text-white/95">Certification Support</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Connect with us</h4>
            <div className="flex gap-2.5">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  title={name}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white/90 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-[#ff9900] hover:text-black hover:shadow-[0_4px_14px_rgba(255,153,0,0.35)]"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Desktop-only spacing */}
        <div className="hidden md:block">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>    
        {/* Bottom bar */}
        {/* Bottom bar */}
        <div className="mx-auto mt-8 w-[92%] max-w-[1120px] pt-4 flex justify-end">
          <p className="text-sm text-white/90">
            © {new Date().getFullYear()} AWS Community Group • All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}