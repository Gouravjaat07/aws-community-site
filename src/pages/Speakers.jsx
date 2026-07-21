import SectionTitle from '../components/SectionTitle'

export default function Speakers() {
  return (
    <section className="py-[68px] bg-[#fff] min-h-[60vh] border-y-2 border-black">
      <div className="mx-auto w-[92%] max-w-[900px]">
        <SectionTitle
          title="Become a Speaker"
          subtitle="Share your knowledge with the community."
        />

        <div className="bg-[#eef5f2] border-2 border-black rounded-2xl shadow-[8px_8px_0_#000] p-10 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Speak at Our Next Event
          </h2>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Interested in delivering a technical talk, workshop, or sharing your
            experience? Fill out the speaker application form and become a part
            of our upcoming community events.
          </p>

          <a
            href="YOUR_GOOGLE_FORM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white font-bold px-8 py-4 rounded-xl border-2 border-black shadow-[6px_6px_0_#000] transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#000]"
          >
            Apply as Speaker →
          </a>
        </div>
      </div>
    </section>
  )
}