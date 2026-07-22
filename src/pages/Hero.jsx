import { motion } from 'framer-motion'
import { heroStats } from '../data/siteData'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

const containerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const joinCommunity = () => {
  window.open(
    "https://chat.whatsapp.com/B7mTRzfdsxsLS2K5sV6Vnv",
    "_blank"
  );
};

const joinMeetup = () => {
  window.open(
    "https://www.meetup.com/aws-sbg-at-shri-vishwakarma-skill-university-palwal/?utm_medium=email&utm_source=braze_canvas&utm_campaign=mmrk_alleng_new_group_announcement_prod_v7_en&utm_term=promo&utm_content=lp_meetup&dispatch_id=6a51e0fe4ce5262b81cec77e29bd40aa",
    "_blank"
  );
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-black bg-[#ffe17c] py-16 [background-image:radial-gradient(circle,rgba(0,0,0,0.12)_1.5px,transparent_1.5px)] [background-size:32px_32px]">
      <div className="mx-auto grid w-[92%] max-w-[1120px] grid-cols-1 items-center gap-7 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <motion.span
            variants={fadeUp}
            className="mb-4 inline-block rounded-full border-2 border-black bg-white px-3 py-1 font-bold text-black"
          >
            AWS Student Builder Group at SVSU
          </motion.span>

          <motion.h1 variants={fadeUp} className="mb-3 text-[clamp(2.3rem,5vw,4.8rem)] font-bold leading-[1.05] text-black">
            Build your future with{' '}
            <span className="text-[#ff9900]">AWS</span> on campus
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-[58ch] text-[1.06rem] font-medium text-[#272727]">
            Join workshops, speaker sessions, cloud labs, and hands-on projects designed
            for students who want to become cloud-native builders.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={joinCommunity}
              className="cursor-pointer rounded-xl border-2 border-black bg-black px-8 py-4 font-extrabold text-white shadow-[8px_8px_0_#000] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_#000]"
            >
              Join Our Community
            </button>

            <button
              onClick={joinMeetup}
              className="cursor-pointer rounded-xl border-2 border-black bg-white px-5 py-3 font-extrabold text-black shadow-[4px_4px_0_#000] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#000]"
            >
              Join Us on Meetup.com
            </button>
          </motion.div>

          {/* <motion.div variants={containerStagger} className="mt-6 flex flex-wrap gap-2.5">
            {heroStats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="border-2 border-black bg-white px-3.5 py-2.5 shadow-[4px_4px_0_#000]"
              >
                <h3 className="font-extrabold text-black">{s.value}</h3>
                <p className="text-[#272727]">{s.label}</p>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>

        {/* Browser-window style visual, echoing the site's own mockup language */}
        <motion.div
          className="overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[12px_12px_0_#000]"
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="flex gap-2 bg-black p-3">
            <span className="inline-block h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
            <span className="inline-block h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
            <span className="inline-block h-[11px] w-[11px] rounded-full bg-[#28c840]" />
          </div>
          <div className="p-3.5">
            <img src="/aws-smile.gif" alt="AWS visual" className="block h-auto w-full rounded-md object-contain" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}