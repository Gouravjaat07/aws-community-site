import SectionTitle from '../components/SectionTitle'

export default function Speakers() {
  return (
    <section className="border-y-2 border-black bg-white py-10 sm:py-14 md:min-h-[60vh] md:py-[68px]">
      <div className="mx-auto w-[92%] max-w-[900px]">
        <b><SectionTitle
          title="Become a Speaker"
          subtitle="Share your knowledge with the community."
        /></b>

        <div className="relative overflow-hidden rounded-2xl border-2 border-black bg-[#eef5f2] p-6 text-center shadow-[6px_6px_0_#000] sm:p-8 sm:shadow-[8px_8px_0_#000] md:p-10">
          {/* soft accent glow, purely decorative */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#ffe17c] opacity-40 blur-2xl sm:h-52 sm:w-52" />

          {/* mic badge */}
          <div className="relative mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full border-2 border-black bg-[#ffe17c] text-2xl shadow-[4px_4px_0_#000] sm:mb-5 sm:h-16 sm:w-16 sm:text-3xl">
            🎤
          </div>

          <h2 className="relative mb-3 text-xl font-extrabold leading-tight sm:mb-4 sm:text-2xl md:text-4xl">
            Speak at Our Next Event
          </h2>

          <p className="relative mx-auto mb-6 max-w-2xl text-sm leading-6 text-gray-700 sm:mb-8 sm:text-base md:text-lg md:leading-7">
            Interested in delivering a technical talk, workshop, or sharing your
            experience? Fill out the speaker application form and become a part
            of our upcoming community events.
          </p>

          <a
            href="YOUR_GOOGLE_FORM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block w-full rounded-xl border-2 border-black bg-black px-6 py-3.5 text-sm font-bold text-white shadow-[4px_4px_0_#000] transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_#000] sm:w-auto sm:px-8 sm:py-4 sm:text-base sm:shadow-[6px_6px_0_#000] sm:hover:shadow-[3px_3px_0_#000]"
          >
            Apply as Speaker →
          </a>
        </div>
      </div>
    </section>
  )
}