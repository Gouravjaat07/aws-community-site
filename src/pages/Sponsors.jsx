import SectionTitle from '../components/SectionTitle'
import { sponsors } from '../data/siteData'

export default function Sponsors() {
  return (
    <section className="py-[68px] bg-white min-h-[60vh]">
      <div className="mx-auto w-[92%] max-w-[1120px]">
        <SectionTitle title="Sponsors" subtitle="Organizations supporting student innovation." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sponsors.map((s) => (
            <article
              key={s.name}
              className="bg-white border-2 border-black shadow-[4px_4px_0_#000] p-[18px]"
            >
              <span className="inline-block bg-white border-2 border-black rounded-full font-bold px-3 py-1 mb-4 text-sm">
                {s.tier}
              </span>
              <h3 className="text-xl mb-2">{s.name}</h3>
              <p>Supporting workshops, events, and student projects.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}