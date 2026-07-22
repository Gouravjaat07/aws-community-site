import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

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

export default function WhySBG() {
  return (
    <motion.section
      className="border-y-2 border-black bg-gradient-to-b from-white to-[#eef3f1] py-10 sm:py-12 lg:py-[68px]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerStagger}
    >
      <div className="mx-auto w-[92%] max-w-[1120px]">
        <motion.div variants={fadeUp}>
          <b><SectionTitle
            title="Why Student Builder Group?"
            subtitle="Empowering students with practical cloud skills, innovation, and industry exposure."
          /></b>
        </motion.div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 md:grid-cols-3 md:gap-4">
          {whySBG.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              className="rounded-lg border-2 border-black bg-white p-2.5 shadow-[3px_3px_0_#000] transition hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0_#000] sm:rounded-[10px] sm:p-[18px] sm:shadow-[6px_6px_0_#000] sm:hover:-translate-x-[3px] sm:hover:-translate-y-[3px] sm:hover:shadow-[10px_10px_0_#000]"
            >
              <div className="mb-1.5 inline-block border-2 border-black bg-[#ffe17c] px-1.5 py-0.5 text-[10px] font-extrabold tracking-[0.4px] text-black sm:mb-2.5 sm:px-2.5 sm:py-1 sm:text-xs">
                SBG
              </div>
              <h3 className="text-sm font-bold text-black sm:text-base">{item.title}</h3>
              <p className="mt-0.5 text-xs leading-snug text-[#444] sm:mt-1 sm:text-sm sm:leading-normal">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}