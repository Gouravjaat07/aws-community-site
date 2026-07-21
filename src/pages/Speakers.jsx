import SectionTitle from '../components/SectionTitle'
import { speakers } from '../data/siteData'

export default function Speakers() {
  return (
    <section className="py-[68px] bg-[#ffe17c] min-h-[60vh] border-y-2 border-black">
      <div className="mx-auto w-[92%] max-w-[1120px]">
        <SectionTitle title="Speakers" subtitle="Learn from cloud professionals and builders." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {speakers.map((sp) => (
            <article
              key={sp.name}
              className="bg-white border-2 border-black shadow-[4px_4px_0_#000] p-[18px]"
            >
              <span className="inline-block bg-white border-2 border-black rounded-full font-bold px-3 py-1 mb-4 text-sm">
                {sp.role}
              </span>
              <h3 className="text-xl mb-2">{sp.name}</h3>
              <p>
                <strong>Topic:</strong> {sp.topic}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}