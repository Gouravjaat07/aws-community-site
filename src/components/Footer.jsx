// export default function Footer() {
//   return (
//     <footer
//       className="relative overflow-hidden text-white border-t-2 border-black min-h-[560px] md:min-h-[620px] max-md:min-h-[420px] pt-12 pb-9 flex flex-col justify-end bg-[#2b1248] bg-no-repeat bg-center bg-cover"
//       style={{
//         backgroundImage:
//           "linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url('/footer-banner.png')",
//       }}
//     >
//       <div className="mx-auto w-[92%] max-w-[1120px] grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-4">
//         <div>
//           <p className="text-white/95">College-driven cloud learning community.</p>
//         </div>

//         <div>
//           <h4 className="text-white font-semibold mb-2">Explore</h4>
//           <p className="text-white/95">Events</p>
//           <p className="text-white/95">Workshops</p>
//           <p className="text-white/95">Hackathons</p>
//         </div>

//         <div>
//           <h4 className="text-white font-semibold mb-2">Resources</h4>
//           <p className="text-white/95">Learning Paths</p>
//           <p className="text-white/95">Student Credits</p>
//           <p className="text-white/95">Certification Support</p>
//         </div>

//         <div>
//           <h4 className="text-white font-semibold mb-2">Connect</h4>
//           <div className="flex gap-2">
//             <span className="w-[22px] h-[22px] bg-[#272727] border-2 border-[#9f9f9f] hover:bg-yellow hover:border-black" />
//             <span className="w-[22px] h-[22px] bg-[#272727] border-2 border-[#9f9f9f] hover:bg-yellow hover:border-black" />
//             <span className="w-[22px] h-[22px] bg-[#272727] border-2 border-[#9f9f9f] hover:bg-yellow hover:border-black" />
//             <span className="w-[22px] h-[22px] bg-[#272727] border-2 border-[#9f9f9f] hover:bg-yellow hover:border-black" />
//           </div>
//         </div>
//       </div>

//       <div className="mx-auto w-[92%] max-w-[1120px] pt-6 pb-2 text-sm text-white/80">
//         © {new Date().getFullYear()} AWS Community Group • All rights reserved.
//       </div>
//     </footer>
//   )
// }
// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden text-white border-t-2 border-black">
//       {/* Background image layer */}
//       <div className="absolute inset-0">
//         <img
//           src="/footer-banner.png"
//           alt=""
//           className="w-full h-full object-cover object-[65%_center]"
//           loading="lazy"
//         />
//         <div className="absolute inset-0 bg-black/55" />
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
//       </div>

//       {/* Content layer */}
//       <div className="relative z-10 pt-10 pb-8 min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
//         <div className="mx-auto w-[92%] max-w-[1120px] grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-4">
//           <div>
//             <p className="text-white/95">College-driven cloud learning community.</p>
//           </div>

//           <div>
//             <h4 className="text-white font-semibold mb-2">Explore</h4>
//             <p className="text-white/95">Events</p>
//             <p className="text-white/95">Workshops</p>
//             <p className="text-white/95">Hackathons</p>
//           </div>

//           <div>
//             <h4 className="text-white font-semibold mb-2">Resources</h4>
//             <p className="text-white/95">Learning Paths</p>
//             <p className="text-white/95">Student Credits</p>
//             <p className="text-white/95">Certification Support</p>
//           </div>

//           <div>
//             <h4 className="text-white font-semibold mb-2">Connect</h4>
//             <div className="flex gap-2">
//               <span className="w-[22px] h-[22px] bg-[#272727] border-2 border-[#9f9f9f] hover:bg-yellow-400 hover:border-black cursor-pointer transition" />
//               <span className="w-[22px] h-[22px] bg-[#272727] border-2 border-[#9f9f9f] hover:bg-yellow-400 hover:border-black cursor-pointer transition" />
//               <span className="w-[22px] h-[22px] bg-[#272727] border-2 border-[#9f9f9f] hover:bg-yellow-400 hover:border-black cursor-pointer transition" />
//               <span className="w-[22px] h-[22px] bg-[#272727] border-2 border-[#9f9f9f] hover:bg-yellow-400 hover:border-black cursor-pointer transition" />
//             </div>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="mx-auto w-[92%] max-w-[1120px] mt-8 pt-4 border-t border-white/20 flex justify-end">
//           <p className="text-sm text-white/90">
//             © {new Date().getFullYear()} AWS Community Group • All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }
// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden text-white border-t-2 border-black">
//       {/* Background image layer */}
//       <div className="absolute inset-0">
//         <img
//           src="/footer-banner.png"
//           alt=""
//           className="w-full h-full object-cover object-[65%_center]"
//           loading="lazy"
//         />
//         <div className="absolute inset-0 bg-black/55" />
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
//       </div>

//       {/* Tagline positioned right under the Cloud Clubs logo */}
//       <div className="absolute top-[190px] left-[8%] z-10">
//         <p className="text-white/95">College-driven cloud learning community.</p>
//       </div>

//       {/* Content layer */}
//       <div className="relative z-10 pt-10 pb-8 min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
//         <div className="mx-auto w-[92%] max-w-[1120px] grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-4">
//           <div></div>

//           <div>
//             <h4 className="text-white font-semibold mb-2">Explore</h4>
//             <p className="text-white/95">Events</p>
//             <p className="text-white/95">Workshops</p>
//             <p className="text-white/95">Hackathons</p>
//           </div>

//           <div>
//             <h4 className="text-white font-semibold mb-2">Resources</h4>
//             <p className="text-white/95">Learning Paths</p>
//             <p className="text-white/95">Student Credits</p>
//             <p className="text-white/95">Certification Support</p>
//           </div>

//           <div>
//             <h4 className="text-white font-semibold mb-2">Connect</h4>
//             <div className="flex gap-2">
//               <span className="w-[22px] h-[22px] bg-[#272727] border-2 border-[#9f9f9f] hover:bg-yellow-400 hover:border-black cursor-pointer transition" />
//               <span className="w-[22px] h-[22px] bg-[#272727] border-2 border-[#9f9f9f] hover:bg-yellow-400 hover:border-black cursor-pointer transition" />
//               <span className="w-[22px] h-[22px] bg-[#272727] border-2 border-[#9f9f9f] hover:bg-yellow-400 hover:border-black cursor-pointer transition" />
//               <span className="w-[22px] h-[22px] bg-[#272727] border-2 border-[#9f9f9f] hover:bg-yellow-400 hover:border-black cursor-pointer transition" />
//             </div>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="mx-auto w-[92%] max-w-[1120px] mt-8 pt-4 border-t border-white/20 flex justify-end">
//           <p className="text-sm text-white/90">
//             © {new Date().getFullYear()} AWS Community Group • All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }
import { FaLinkedinIn, FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: FaLinkedinIn },
    { name: 'GitHub', href: 'https://github.com', icon: FaGithub },
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
      <div className="absolute top-[190px] left-[8%] z-10">
        <p className="text-white/95">College-driven cloud learning community.</p>
      </div>

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
            <h4 className="text-white font-semibold mb-2">Connect</h4>
            <div className="flex gap-2">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  title={name}
                  className="w-[22px] h-[22px] bg-[#272727] border-2 border-[#9f9f9f] hover:bg-yellow-400 hover:border-black cursor-pointer transition inline-flex items-center justify-center"
                >
                  <Icon size={11} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mx-auto w-[92%] max-w-[1120px] mt-8 pt-4 border-t border-white/20 flex justify-end">
          <p className="text-sm text-white/90">
            © {new Date().getFullYear()} AWS Community Group • All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}