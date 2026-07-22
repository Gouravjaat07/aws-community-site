import { Handshake, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const containerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

export default function Sponsors() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-[68px]">
      {/* subtle dot-grid backdrop, consistent with other pages */}
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(#00000014_1px,transparent_1px)] [background-size:16px_16px] sm:[background-size:22px_22px]" />

      <div className="relative mx-auto w-[92%] max-w-[900px]">
        <b><SectionTitle
          title="Sponsors"
          subtitle="Partner with us to empower the next generation of cloud builders."
        /></b>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerStagger}
          className="rounded-2xl border-2 border-black bg-[#fff7dc] p-5 text-center shadow-[4px_4px_0_#000] sm:p-8 sm:shadow-[6px_6px_0_#000] lg:p-10 lg:shadow-[8px_8px_0_#000]"
        >
          {/* <motion.div
            variants={fadeUp}
            className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border-2 border-black bg-white px-3.5 py-1.5 font-bold text-black shadow-[3px_3px_0_#000] sm:mb-5"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#ff9900] sm:h-4 sm:w-4" strokeWidth={2.5} />
            <span className="text-[11px] sm:text-sm">Partnership Program</span>
          </motion.div> */}

          <motion.div
            variants={fadeUp}
            className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-[#ffe17c] shadow-[3px_3px_0_#000] sm:mb-5 sm:h-16 sm:w-16"
          >
            <Handshake className="h-6 w-6 text-black sm:h-7 sm:w-7" strokeWidth={2.25} />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mb-3 text-2xl font-extrabold leading-tight sm:mb-4 sm:text-3xl lg:text-4xl"
          >
            Become Our Event Partner
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-gray-800 sm:mb-8 sm:text-base lg:text-lg"
          >
            Support student innovation, technical workshops, meetups, and cloud
            learning initiatives. Join us in building a stronger developer
            community and make a lasting impact on the next generation of
            builders.
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="YOUR_SPONSOR_FORM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-black bg-black px-6 py-3.5 text-sm font-bold text-white shadow-[4px_4px_0_#000] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] sm:w-auto sm:px-8 sm:py-4 sm:text-base sm:shadow-[6px_6px_0_#000] sm:hover:translate-x-[3px] sm:hover:translate-y-[3px] sm:hover:shadow-[3px_3px_0_#000]"
          >
            Become a Sponsor →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}