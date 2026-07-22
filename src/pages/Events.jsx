import { motion } from 'framer-motion'
import { CalendarClock, Sparkles, Bell } from 'lucide-react'

const containerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

export default function Events() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-[#ffe17c] py-16 sm:py-20 lg:py-28 [background-image:radial-gradient(circle,rgba(0,0,0,0.12)_1.5px,transparent_1.5px)] [background-size:28px_28px]">
      <div className="relative mx-auto w-[92%] max-w-[720px] text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerStagger}
        >
          {/* floating badge */}
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-1.5 font-bold text-black shadow-[4px_4px_0_#000]"
          >
            <Sparkles className="h-4 w-4 text-[#ff9900]" strokeWidth={2.5} />
            <span className="text-xs sm:text-sm">Upcoming Events</span>
          </motion.div>

          {/* animated balloon-style icon */}
          <motion.div
            variants={fadeUp}
            animate={{ y: [0, -10, 0] }}
            transition={{ y: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-black bg-white shadow-[6px_6px_0_#000] sm:h-24 sm:w-24"
          >
            <CalendarClock className="h-9 w-9 text-black sm:h-11 sm:w-11" strokeWidth={2} />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mb-3 text-[clamp(2.4rem,8vw,4.5rem)] font-extrabold leading-[1.05] text-black"
          >
            Coming{' '}
            <span className="text-transparent [-webkit-text-stroke:2px_#000]">Soon</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-[46ch] text-sm font-medium text-[#272727] sm:text-base lg:text-lg"
          >
            We're lining up our next round of events, workshops, and hackathons.
            Check back soon, or join the community so you never miss an update.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
            <a
              href="https://chat.whatsapp.com/B7mTRzfdsxsLS2K5sV6Vnv"
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border-2 border-black bg-black px-6 py-3.5 text-sm font-extrabold text-white shadow-[6px_6px_0_#000] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_#000] sm:px-8 sm:py-4 sm:text-base sm:shadow-[8px_8px_0_#000] sm:hover:shadow-[4px_4px_0_#000]"
            >
              <Bell className="h-4 w-4" strokeWidth={2.5} />
              Notify Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}