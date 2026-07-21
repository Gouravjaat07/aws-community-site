export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white border-t-2 border-black min-h-[560px] md:min-h-[620px] max-md:min-h-[420px] pt-12 pb-9 flex flex-col justify-end bg-[#2b1248] bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url('/footer-banner.png')",
      }}
    >
      <div className="mx-auto w-[92%] max-w-[1120px] grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-4">
        <div>
          <p className="text-white/95">College-driven cloud learning community.</p>
        </div>

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
          <h4 className="text-white font-semibold mb-2">Connect</h4>
          <div className="flex gap-2">
            <span className="w-[22px] h-[22px] bg-[#272727] border-2 border-[#9f9f9f] hover:bg-yellow hover:border-black" />
            <span className="w-[22px] h-[22px] bg-[#272727] border-2 border-[#9f9f9f] hover:bg-yellow hover:border-black" />
            <span className="w-[22px] h-[22px] bg-[#272727] border-2 border-[#9f9f9f] hover:bg-yellow hover:border-black" />
            <span className="w-[22px] h-[22px] bg-[#272727] border-2 border-[#9f9f9f] hover:bg-yellow hover:border-black" />
          </div>
        </div>
      </div>

      <div className="mx-auto w-[92%] max-w-[1120px] pt-6 pb-2 text-sm text-white/80">
        © {new Date().getFullYear()} AWS Community Group • All rights reserved.
      </div>
    </footer>
  )
}