// import { motion } from 'framer-motion'
// import SectionTitle from '../components/SectionTitle'
// import { heroStats, marqueeBrands } from '../data/siteData'

// const fadeUp = {
//   hidden: { opacity: 0, y: 18 },
//   show: { opacity: 1, y: 0 },
// }

// const containerStagger = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.1 } },
// }

// const features = [
//   'Hands-on Labs',
//   'Industry Talks',
//   'Project Pods',
//   'Hackathons',
//   'Mentorship',
//   'Career Support',
// ]

// const steps = [
//   { title: 'Join', text: 'Register and become part of the student cloud community.' },
//   { title: 'Learn', text: 'Attend guided labs, workshops, and AWS sessions.' },
//   { title: 'Build', text: 'Ship projects, showcase skills, and unlock opportunities.' },
// ]

// export default function Home() {
//   return (
//     <div className="bg-white text-[#111]">
//       {/* Hero */}
//       <section className="bg-white border-b-2 border-black py-16">
//         <div className="mx-auto w-[92%] max-w-[1120px] grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-7 items-center">
//           <motion.div
//             variants={containerStagger}
//             initial="hidden"
//             animate="show"
//             transition={{ duration: 0.45, ease: 'easeOut' }}
//           >
//             <motion.span
//               variants={fadeUp}
//               className="inline-block bg-[#fff4df] text-[#111] border-2 border-[#111] rounded-full font-bold px-3 py-1 mb-4"
//             >
//               NEW: Student Cloud Builder Program
//             </motion.span>

//             <motion.h1
//               variants={fadeUp}
//               className="text-[clamp(2.3rem,5vw,4.8rem)] leading-[1.05] mb-3"
//             >
//               Build your future with <span className="text-[#ff9900]">AWS</span> on campus
//             </motion.h1>

//             <motion.p variants={fadeUp} className="text-[1.06rem] max-w-[58ch] font-medium text-[#333]">
//               Join workshops, speaker sessions, cloud labs, and hands-on projects designed
//               for students who want to become cloud-native builders.
//             </motion.p>

//             <motion.div variants={fadeUp} className="mt-5 flex gap-3 flex-wrap">
//               <button className="border-2 border-black rounded-xl px-8 py-4 font-extrabold bg-black text-white shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-brutalSm transition">
//                 Start Free
//               </button>
//               <button className="border-2 border-black rounded-xl px-5 py-3 font-extrabold bg-white text-black shadow-brutalSm hover:translate-x-1 hover:translate-y-1 transition">
//                 View Events
//               </button>
//             </motion.div>

//             <motion.div variants={containerStagger} className="mt-6 flex gap-2.5 flex-wrap">
//               {heroStats.map((s) => (
//                 <motion.div key={s.label} variants={fadeUp} className="bg-white border-2 border-[#111] shadow-brutalSm px-3.5 py-2.5">
//                   <h3 className="m-0">{s.value}</h3>
//                   <p className="m-0">{s.label}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           <motion.div
//             className="bg-[#f7f8fb] border-2 border-[#111] shadow-[8px_8px_0_#111] p-3.5"
//             initial={{ opacity: 0, scale: 0.96, y: 12 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
//           >
//             <img src="/aws-smile.gif" alt="AWS visual" className="w-full h-auto block object-contain" />
//           </motion.div>
//         </div>
//       </section>

//       {/* Marquee */}
//       <section className="bg-[#f8fafc] border-y-2 border-[#111] overflow-hidden">
//         <div className="flex gap-9 whitespace-nowrap text-[#111] text-[1.8rem] font-extrabold py-4 animate-[scroll_24s_linear_infinite]">
//           {[...marqueeBrands, ...marqueeBrands].map((b, idx) => (
//             <span key={`${b}-${idx}`}>{b}</span>
//           ))}
//         </div>
//       </section>

//       {/* Feature Grid */}
//       <motion.section
//         className="py-[68px] border-y-2 border-[#111] bg-gradient-to-b from-white to-[#f4f8ff]"
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.15 }}
//         variants={containerStagger}
//       >
//         <div className="mx-auto w-[92%] max-w-[1120px]">
//           <motion.div variants={fadeUp}>
//             <SectionTitle title="Feature Grid" subtitle="Everything you need to grow your cloud skills." />
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {features.map((item) => (
//               <motion.article
//                 key={item}
//                 variants={fadeUp}
//                 className="bg-white border-2 border-[#111] rounded-[10px] shadow-brutalMd p-[18px] transition hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[10px_10px_0_#111]"
//               >
//                 <div className="inline-block text-xs font-extrabold tracking-[0.4px] bg-[#ff9900] text-[#111] border-2 border-[#111] px-2.5 py-1 mb-2.5">
//                   AWS
//                 </div>
//                 <h3>{item}</h3>
//                 <p>Structured sessions, practical projects, and mentorship for real outcomes.</p>
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* How It Works (no gif) */}
//       <section className="py-[68px] bg-white">
//         <div className="mx-auto w-[92%] max-w-[1120px]">
//           <SectionTitle title="How It Works" subtitle="Three steps to become an active AWS builder." />
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//             {steps.map((step, idx) => (
//               <div key={step.title} className="bg-white border-2 border-[#111] shadow-brutalMd p-4">
//                 <div className="w-11 h-11 rounded-full grid place-items-center mb-2.5 font-extrabold bg-[#ff9900] text-[#111] border-2 border-[#111]">
//                   {idx + 1}
//                 </div>
//                 <h3>{step.title}</h3>
//                 <p>{step.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <style>{`
//         @keyframes scroll {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }
//       `}</style>
//     </div>
//   )
// }
// import { motion } from 'framer-motion'
// import SectionTitle from '../components/SectionTitle'
// import { heroStats, marqueeBrands } from '../data/siteData'

// const fadeUp = {
//   hidden: { opacity: 0, y: 18 },
//   show: { opacity: 1, y: 0 },
// }

// const containerStagger = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.1 } },
// }

// const whySBG = [
//   {
//     title: 'Learn by Building',
//     text: 'Work on real AWS projects instead of only learning theory.',
//   },
//   {
//     title: 'Industry Mentorship',
//     text: 'Learn directly from AWS experts, Community Builders, and cloud professionals.',
//   },
//   {
//     title: 'Collaborative Community',
//     text: 'Connect with passionate students, collaborate on ideas, and grow together.',
//   },
//   {
//     title: 'Hands-on Workshops',
//     text: 'Participate in practical cloud labs, bootcamps, and technical sessions.',
//   },
//   {
//     title: 'Innovation Culture',
//     text: 'Build solutions using modern AWS services while solving real-world challenges.',
//   },
//   {
//     title: 'Career Ready',
//     text: 'Gain practical experience that strengthens your resume and technical portfolio.',
//   },
// ]

// const sbgBenefits = [
//   {
//     title: 'AWS Skill Builder Access',
//     text: 'Get access to learning resources, guided labs, and cloud learning paths.',
//   },
//   {
//     title: 'Certification Preparation',
//     text: 'Prepare for AWS certifications with workshops and study groups.',
//   },
//   {
//     title: 'Networking Opportunities',
//     text: 'Meet AWS experts, speakers, recruiters, and fellow cloud enthusiasts.',
//   },
//   {
//     title: 'Hackathons & Events',
//     text: 'Participate in hackathons, ideathons, and community events throughout the year.',
//   },
//   {
//     title: 'Project Showcase',
//     text: 'Build cloud projects and showcase them to the AWS community.',
//   },
//   {
//     title: 'Leadership Opportunities',
//     text: 'Volunteer, organize events, and develop leadership skills within SBG.',
//   },
// ]

// export default function Home() {
//   return (
//     <div className="bg-white text-[#111]">
//       {/* Hero */}
//       <section className="bg-white border-b-2 border-black py-16">
//         <div className="mx-auto w-[92%] max-w-[1120px] grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-7 items-center">
//           <motion.div
//             variants={containerStagger}
//             initial="hidden"
//             animate="show"
//             transition={{ duration: 0.45, ease: 'easeOut' }}
//           >
//             <motion.span variants={fadeUp} className="inline-block bg-[#fff4df] text-[#111] border-2 border-[#111] rounded-full font-bold px-3 py-1 mb-4">
//               NEW: Student Cloud Builder Program
//             </motion.span>

//             <motion.h1 variants={fadeUp} className="text-[clamp(2.3rem,5vw,4.8rem)] leading-[1.05] mb-3">
//               Build your future with <span className="text-[#ff9900]">AWS</span> on campus
//             </motion.h1>

//             <motion.p variants={fadeUp} className="text-[1.06rem] max-w-[58ch] font-medium text-[#333]">
//               Join workshops, speaker sessions, cloud labs, and hands-on projects designed
//               for students who want to become cloud-native builders.
//             </motion.p>

//             <motion.div variants={fadeUp} className="mt-5 flex gap-3 flex-wrap">
//               <button className="border-2 border-black rounded-xl px-8 py-4 font-extrabold bg-black text-white shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-brutalSm transition">
//                 Start Free
//               </button>
//               <button className="border-2 border-black rounded-xl px-5 py-3 font-extrabold bg-white text-black shadow-brutalSm hover:translate-x-1 hover:translate-y-1 transition">
//                 View Events
//               </button>
//             </motion.div>

//             <motion.div variants={containerStagger} className="mt-6 flex gap-2.5 flex-wrap">
//               {heroStats.map((s) => (
//                 <motion.div key={s.label} variants={fadeUp} className="bg-white border-2 border-[#111] shadow-brutalSm px-3.5 py-2.5">
//                   <h3>{s.value}</h3>
//                   <p>{s.label}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           <motion.div
//             className="bg-[#f7f8fb] border-2 border-[#111] shadow-[8px_8px_0_#111] p-3.5"
//             initial={{ opacity: 0, scale: 0.96, y: 12 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
//           >
//             <img src="/aws-smile.gif" alt="AWS visual" className="w-full h-auto block object-contain" />
//           </motion.div>
//         </div>
//       </section>

//       {/* Marquee */}
//       <section className="bg-[#f8fafc] border-y-2 border-[#111] overflow-hidden">
//         <div className="flex gap-9 whitespace-nowrap text-[#111] text-[1.8rem] font-extrabold py-4 animate-[scroll_24s_linear_infinite]">
//           {[...marqueeBrands, ...marqueeBrands].map((b, idx) => (
//             <span key={`${b}-${idx}`}>{b}</span>
//           ))}
//         </div>
//       </section>

//       {/* Why Student Builder Group */}
//       <motion.section
//         className="py-[68px] border-y-2 border-[#111] bg-gradient-to-b from-white to-[#f4f8ff]"
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.15 }}
//         variants={containerStagger}
//       >
//         <div className="mx-auto w-[92%] max-w-[1120px]">
//           <motion.div variants={fadeUp}>
//             <SectionTitle
//               title="Why Student Builder Group?"
//               subtitle="Empowering students with practical cloud skills, innovation, and industry exposure."
//             />
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {whySBG.map((item) => (
//               <motion.article
//                 key={item.title}
//                 variants={fadeUp}
//                 className="bg-white border-2 border-[#111] rounded-[10px] shadow-brutalMd p-[18px] transition hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[10px_10px_0_#111]"
//               >
//                 <div className="inline-block text-xs font-extrabold tracking-[0.4px] bg-[#ff9900] text-[#111] border-2 border-[#111] px-2.5 py-1 mb-2.5">SBG</div>
//                 <h3>{item.title}</h3>
//                 <p>{item.text}</p>
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* AWS SBG Benefits */}
//       <section className="py-[68px] bg-white">
//         <div className="mx-auto w-[92%] max-w-[1120px]">
//           <SectionTitle
//             title="AWS SBG Benefits"
//             subtitle="Everything you gain by becoming a member of the AWS Student Builder Group."
//           />

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {sbgBenefits.map((benefit) => (
//               <div
//                 key={benefit.title}
//                 className="bg-white border-2 border-[#111] shadow-brutalMd p-4 transition hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[10px_10px_0_#111]"
//               >
//                 <div className="w-12 h-12 rounded-full grid place-items-center mb-3 bg-[#ff9900] border-2 border-[#111] font-extrabold">✓</div>
//                 <h3>{benefit.title}</h3>
//                 <p>{benefit.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <style>{`
//         @keyframes scroll {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }
//       `}</style>
//     </div>
//   )
// }
import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { heroStats, marqueeBrands } from '../data/siteData'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

const containerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const whySBG = [
  {
    title: 'Learn by Building',
    text: 'Work on real AWS projects instead of only learning theory.',
  },
  {
    title: 'Industry Mentorship',
    text: 'Learn directly from AWS experts, Community Builders, and cloud professionals.',
  },
  {
    title: 'Collaborative Community',
    text: 'Connect with passionate students, collaborate on ideas, and grow together.',
  },
  {
    title: 'Hands-on Workshops',
    text: 'Participate in practical cloud labs, bootcamps, and technical sessions.',
  },
  {
    title: 'Innovation Culture',
    text: 'Build solutions using modern AWS services while solving real-world challenges.',
  },
  {
    title: 'Career Ready',
    text: 'Gain practical experience that strengthens your resume and technical portfolio.',
  },
]

const sbgBenefits = [
  {
    title: 'AWS Skill Builder Access',
    text: 'Get access to learning resources, guided labs, and cloud learning paths.',
  },
  {
    title: 'Certification Preparation',
    text: 'Prepare for AWS certifications with workshops and study groups.',
  },
  {
    title: 'Networking Opportunities',
    text: 'Meet AWS experts, speakers, recruiters, and fellow cloud enthusiasts.',
  },
  {
    title: 'Hackathons & Events',
    text: 'Participate in hackathons, ideathons, and community events throughout the year.',
  },
  {
    title: 'Project Showcase',
    text: 'Build cloud projects and showcase them to the AWS community.',
  },
  {
    title: 'Leadership Opportunities',
    text: 'Volunteer, organize events, and develop leadership skills within SBG.',
  },
]

const faqs = [
  {
    question: "What is AWS Student Builder Group?",
    answer: "AWS Student Builder Group (SBG) is a student-led community that helps learners explore cloud computing through workshops, hands-on labs, hackathons, and technical events.",
  },
  {
    question: "Who can join AWS SBG?",
    answer: "Any college student who is passionate about technology, cloud computing, or software development can join regardless of prior AWS experience.",
  },
  {
    question: "Do I need prior AWS knowledge?",
    answer: "No. AWS SBG welcomes beginners as well as experienced students. Learning paths are designed for all skill levels.",
  },
  {
    question: "Are the events free?",
    answer: "Most workshops, webinars, meetups, and technical sessions are completely free for students.",
  },
  {
    question: "Will I receive certificates?",
    answer: "Many workshops, bootcamps, and events provide participation certificates depending on the event.",
  },
  {
    question: "How do I join?",
    answer: "Register through the website, join the community, attend events, and start building projects.",
  },
]

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState(null)

  return (
    <div className="bg-white text-[#111]">
      {/* Hero */}
      <section className="bg-white border-b-2 border-black py-16">
        <div className="mx-auto w-[92%] max-w-[1120px] grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-7 items-center">
          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <motion.span variants={fadeUp} className="inline-block bg-[#fff4df] text-[#111] border-2 border-[#111] rounded-full font-bold px-3 py-1 mb-4">
              NEW: Student Cloud Builder Program
            </motion.span>

            <motion.h1 variants={fadeUp} className="text-[clamp(2.3rem,5vw,4.8rem)] leading-[1.05] mb-3">
              Build your future with <span className="text-[#ff9900]">AWS</span> on campus
            </motion.h1>

            <motion.p variants={fadeUp} className="text-[1.06rem] max-w-[58ch] font-medium text-[#333]">
              Join workshops, speaker sessions, cloud labs, and hands-on projects designed
              for students who want to become cloud-native builders.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-5 flex gap-3 flex-wrap">
              <button className="border-2 border-black rounded-xl px-8 py-4 font-extrabold bg-black text-white shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-brutalSm transition">
                Start Free
              </button>
              <button className="border-2 border-black rounded-xl px-5 py-3 font-extrabold bg-white text-black shadow-brutalSm hover:translate-x-1 hover:translate-y-1 transition">
                View Events
              </button>
            </motion.div>

            <motion.div variants={containerStagger} className="mt-6 flex gap-2.5 flex-wrap">
              {heroStats.map((s) => (
                <motion.div key={s.label} variants={fadeUp} className="bg-white border-2 border-[#111] shadow-brutalSm px-3.5 py-2.5">
                  <h3>{s.value}</h3>
                  <p>{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-[#f7f8fb] border-2 border-[#111] shadow-[8px_8px_0_#111] p-3.5"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          >
            <img src="/aws-smile.gif" alt="AWS visual" className="w-full h-auto block object-contain" />
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-[#f8fafc] border-y-2 border-[#111] overflow-hidden">
        <div className="flex gap-9 whitespace-nowrap text-[#111] text-[1.8rem] font-extrabold py-4 animate-[scroll_24s_linear_infinite]">
          {[...marqueeBrands, ...marqueeBrands].map((b, idx) => (
            <span key={`${b}-${idx}`}>{b}</span>
          ))}
        </div>
      </section>

      {/* Why Student Builder Group */}
      <motion.section
        className="py-[68px] border-y-2 border-[#111] bg-gradient-to-b from-white to-[#f4f8ff]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerStagger}
      >
        <div className="mx-auto w-[92%] max-w-[1120px]">
          <motion.div variants={fadeUp}>
            <SectionTitle
              title="Why Student Builder Group?"
              subtitle="Empowering students with practical cloud skills, innovation, and industry exposure."
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whySBG.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="bg-white border-2 border-[#111] rounded-[10px] shadow-brutalMd p-[18px] transition hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[10px_10px_0_#111]"
              >
                <div className="inline-block text-xs font-extrabold tracking-[0.4px] bg-[#ff9900] text-[#111] border-2 border-[#111] px-2.5 py-1 mb-2.5">SBG</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* AWS SBG Benefits */}
      <section className="py-[68px] bg-white">
        <div className="mx-auto w-[92%] max-w-[1120px]">
          <SectionTitle
            title="AWS SBG Benefits"
            subtitle="Everything you gain by becoming a member of the AWS Student Builder Group."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sbgBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white border-2 border-[#111] shadow-brutalMd p-4 transition hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[10px_10px_0_#111]"
              >
                <div className="w-12 h-12 rounded-full grid place-items-center mb-3 bg-[#ff9900] border-2 border-[#111] font-extrabold">✓</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[70px] bg-[#f8fafc] border-t-2 border-[#111]">
        <div className="mx-auto w-[92%] max-w-[900px]">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about AWS Student Builder Group."
          />

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border-2 border-[#111] bg-white shadow-brutalMd overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-extrabold text-lg"
                >
                  <span>{faq.question}</span>
                  <span className="text-2xl">{openFAQ === index ? "−" : "+"}</span>
                </button>

                {openFAQ === index && (
                  <div className="px-6 pb-5 text-[#555] leading-7">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

