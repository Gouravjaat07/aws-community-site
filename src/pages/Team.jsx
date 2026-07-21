import { useEffect, useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { team } from '../data/siteData'
import LinkedInHoverOverlay from './LinkedinhoverOverlay'

function TeamCard({ member, index, leadership = false }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80 * index)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <article
      className={[
        'group relative flex h-full w-full max-w-[230px] flex-col items-center p-6 text-center',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        'transition-[opacity,transform] duration-300 ease-out'
      ].join(' ')}
    >
      {/* image wrapper: glow + overlay + centered linkedin icon live here */}
      <div className="relative mb-5 h-[110px] w-[110px] rounded-full transition-shadow duration-300 ease-out shadow-[0_0_0_rgba(255,170,0,0)] group-hover:shadow-[0_0_20px_rgba(255,170,0,.45),0_0_45px_rgba(255,170,0,.35),0_0_70px_rgba(255,170,0,.18)]">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full rounded-full object-cover"
        />

        {/* dark overlay on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-black/0 transition-colors duration-300 ease-out group-hover:bg-black/40" />

        {/* linkedin icon, centered, hidden until hover */}
        <LinkedInHoverOverlay href={member.linkedin} name={member.name} />
      </div>

      <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
      <p className="mt-1 text-sm text-gray-500">{member.role}</p>
    </article>
  )
}

export default function Team() {
  const faculty = team.find((m) => m.type === 'faculty')
  const captains = team.filter((m) => m.type === 'captain')
  const coreTeam = team.filter((m) => m.type === 'core')

  return (
    <section className="page-section bg-white py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Team" subtitle="Meet the students behind the community." />

        <div className="mb-14 grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
  {faculty && (
    <TeamCard
      member={faculty}
      index={0}
      leadership
    />
  )}

  {captains.map((member, i) => (
    <TeamCard
      key={member.name}
      member={member}
      index={i + 1}
      leadership
    />
  ))}
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {coreTeam.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  )
}
