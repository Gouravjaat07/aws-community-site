import SectionTitle from '../components/SectionTitle'

export default function Sponsors() {
  return (
    <section className="py-[68px] bg-white min-h-[60vh]">
      <div className="mx-auto w-[92%] max-w-[900px]">
        <SectionTitle
          title="Sponsors"
          subtitle="Partner with us to empower the next generation of cloud builders."
        />

        <div className="bg-[#fff7dc] border-2 border-black rounded-2xl shadow-[8px_8px_0_#000] p-10 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Become Our Event Partner
          </h2>

          <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-8">
            Support student innovation, technical workshops, meetups, and cloud learning
            initiatives. Join us in building a stronger developer community and make a lasting
            impact on the next generation of builders.
          </p>

          <a
            href="YOUR_SPONSOR_FORM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white font-bold px-8 py-4 rounded-xl border-2 border-black shadow-[6px_6px_0_#000] transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#000]"
          >
            Become a Sponsor →
          </a>
        </div>
      </div>
    </section>
  )
}