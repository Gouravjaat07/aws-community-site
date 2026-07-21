import SectionTitle from '../components/SectionTitle'
import { team } from '../data/siteData'

export default function Team() {
  return (
    <section className="py-[68px] bg-white min-h-[60vh]">
      <div className="mx-auto w-[92%] max-w-[1120px]">
        <SectionTitle title="Team" subtitle="Meet the students behind the community." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.map((member, i) => {
            const variant =
              i % 3 === 0
                ? 'bg-[#b7c6c2] text-black'
                : i % 3 === 1
                ? 'bg-[#ffe17c] text-black shadow-[8px_8px_0_#000]'
                : 'bg-[#272727] text-white'

            return (
              <article
                key={member.name}
                className={`border-2 border-black p-5 shadow-[4px_4px_0_#000] ${variant}`}
              >
                <span className="inline-block bg-white text-black border-2 border-black rounded-full font-bold px-3 py-1 mb-4 text-sm">
                  Core Team
                </span>
                <h3 className="text-xl mb-1">{member.name}</h3>
                <p>{member.role}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}