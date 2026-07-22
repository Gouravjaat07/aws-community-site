import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const faqs = [
  {
    question: 'What is AWS Student Builder Group?',
    answer:
      'AWS Student Builder Group (SBG) is a student-led community that helps learners explore cloud computing through workshops, hands-on labs, hackathons, and technical events.',
  },
  {
    question: 'Who can join AWS SBG?',
    answer:
      'Any college student who is passionate about technology, cloud computing, or software development can join regardless of prior AWS experience.',
  },
  {
    question: 'Do I need prior AWS knowledge?',
    answer:
      'No. AWS SBG welcomes beginners as well as experienced students. Learning paths are designed for all skill levels.',
  },
  {
    question: 'Are the events free?',
    answer:
      'Most workshops, webinars, meetups, and technical sessions are completely free for students.',
  },
  {
    question: 'Will I receive certificates?',
    answer:
      'Many workshops, bootcamps, and events provide participation certificates depending on the event.',
  },
  {
    question: 'How do I join?',
    answer: 'Register through the website, join the community, attend events, and start building projects.',
  },
]

// A light, distinct color for each card — cycles if there are more FAQs than colors.
const cardColors = [
  { bg: '#fff4d6', chip: '#ffe17c' }, // warm yellow
  { bg: '#e3f1ee', chip: '#b7c6c2' }, // sage
  { bg: '#e8f0ff', chip: '#a9c6ff' }, // sky blue
  { bg: '#ffe9ec', chip: '#ffb3c1' }, // blush pink
  { bg: '#eaf7e6', chip: '#b7e3a8' }, // mint green
  { bg: '#f1e9ff', chip: '#cbb3ff' }, // lavender
]

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null)

  // Close the open FAQ item on Escape, and whenever the user navigates
  // away from the page (tab hidden) so it doesn't stay stuck open.
  useEffect(() => {
    if (openFAQ === null) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpenFAQ(null)
    }

    const handleVisibilityChange = () => {
      if (document.hidden) setOpenFAQ(null)
    }

    window.addEventListener('keydown', handleKeyDown)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [openFAQ])

  return (
    <section className="border-t-2 border-black bg-[#f8fafc] py-10 sm:py-14 md:py-[70px]">
      <div className="mx-auto w-[92%] max-w-[1120px]">
        <b><SectionTitle
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about AWS Student Builder Group."
        /></b>

        <div className="mt-6 space-y-3 sm:mt-10 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFAQ === index
            const color = cardColors[index % cardColors.length]

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                style={{ backgroundColor: color.bg }}
                className={`overflow-hidden rounded-lg border-2 border-black transition-shadow sm:rounded-xl ${
                  isOpen ? 'shadow-[6px_6px_0_#000] sm:shadow-[8px_8px_0_#000]' : 'shadow-[4px_4px_0_#000] sm:shadow-[6px_6px_0_#000]'
                }`}
              >
                <button
                  onClick={() => setOpenFAQ(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-extrabold text-black transition-colors sm:gap-4 sm:px-6 sm:py-5 sm:text-lg"
                >
                  <span>{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    style={{ backgroundColor: color.chip }}
                    className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border-2 border-black text-base font-extrabold text-black sm:h-8 sm:w-8 sm:text-xl"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="border-t-2 border-black/10"
                    >
                      <div className="px-4 py-3.5 text-sm leading-6 text-[#444] sm:px-6 sm:py-5 sm:text-base sm:leading-7">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}