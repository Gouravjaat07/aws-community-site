import { useEffect, useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { team } from '../data/siteData'
import {LinkedInHoverOverlay, OfficialLinkedInGlyph } from './LinkedInHoverOverlay'

function TeamCard({ member, index, leadership = false }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80 * index)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <article
      className={[
        'group relative flex h-full w-full max-w-[150px] flex-col items-center p-3 text-center sm:max-w-[230px] sm:p-6',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        'transition-[opacity,transform] duration-300 ease-out'
      ].join(' ')}
    >
      {/* image wrapper: glow + overlay + centered linkedin icon live here */}
      <div className="relative mb-3 h-[72px] w-[72px] rounded-full shadow-[0_0_10px_rgba(255,170,0,.35),0_0_18px_rgba(255,170,0,.2)] transition-shadow duration-300 ease-out sm:mb-5 sm:h-[110px] sm:w-[110px] sm:shadow-[0_0_0_rgba(255,170,0,0)] sm:group-hover:shadow-[0_0_20px_rgba(255,170,0,.45),0_0_45px_rgba(255,170,0,.35),0_0_70px_rgba(255,170,0,.18)]">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full rounded-full object-cover"
        />

        {/* dark overlay on hover — desktop only, since mobile has no real "hover" */}
        <div className="pointer-events-none absolute inset-0 hidden rounded-full bg-black/0 transition-colors duration-300 ease-out group-hover:bg-black/40 sm:block" />

        {/* linkedin icon, centered, hover-to-reveal — desktop/laptop only, unchanged */}
        {member.linkedin && (
          <div className="hidden sm:block">
            <LinkedInHoverOverlay href={member.linkedin} name={member.name} />
          </div>
        )}

        {/* linkedin icon, top-left, always visible — mobile only */}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="absolute -left-1 -top-1 z-10 grid h-6 w-6 place-items-center rounded-[3px] bg-[#5a5af6] shadow-[0_1px_4px_rgba(0,0,0,0.35)] sm:hidden"
          >
            <OfficialLinkedInGlyph className="h-[62%] w-[62%]" />
          </a>
        )}
      </div>

      <h3 className="text-sm font-bold leading-snug text-gray-900 sm:text-lg">{member.name}</h3>
      <p className="mt-1 text-xs text-gray-500 sm:text-sm">{member.role}</p>
    </article>
  )
}

export default function Team() {
  const faculty = team.find((m) => m.type === 'faculty')
  const captains = team.filter((m) => m.type === 'captain')
  const coreTeam = team.filter((m) => m.type === 'core')

  return (
    <section className="page-section bg-white py-14 sm:py-20">
      <div className="mx-auto w-[92%] max-w-[1120px]">
        <b><SectionTitle title="Team" subtitle="Meet the faculty members and students leading our community." /></b>

        {/* ===== Mobile / tablet (below md) — unchanged from before ===== */}
        <div className="md:hidden">
          {faculty && (
            <div className="mb-6 flex justify-center sm:mb-8">
              <TeamCard member={faculty} index={0} leadership />
            </div>
          )}

          <div className="mb-10 grid grid-cols-2 justify-items-center gap-3 sm:mb-14 sm:gap-6">
            {captains.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i + 1} leadership />
            ))}
          </div>

          <div className="grid grid-cols-2 justify-items-center gap-3 sm:gap-6">
            {coreTeam.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i + 2} />
            ))}
          </div>
        </div>

        {/* ===== Laptop (md and up) — faculty + captains share one row, 3-up, ===== */}
        {/* wraps and auto-centers whatever is left on the last line             */}
        <div className="hidden md:block">
          <div className="mb-14 flex flex-wrap justify-center gap-6">
            {faculty && <TeamCard member={faculty} index={0} leadership />}
            {captains.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i + 1} leadership />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {coreTeam.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i + 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}