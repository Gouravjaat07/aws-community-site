import SectionTitle from '../components/SectionTitle'

const sbgBenefits = [
  {
    title: 'AWS Skill Builder Access',
    text: 'Get access to learning resources, guided labs, and cloud learning paths.',
  },
  {
    title: 'AWS Certifications & Swags',
    text: 'Access certification guidance, exam prep sessions, and exclusive AWS Cloud Clubs swags.',
  },
  {
    title: 'Networking Opportunities',
    text: 'Meet AWS experts, speakers, recruiters, and fellow cloud enthusiasts.',
  },
  {
    title: 'Events',
    text: 'Participate in Meetup, ideathons, and community events throughout the year.',
  },
  {
    title: 'Project Showcase',
    text: 'Build cloud projects and showcase them to the AWS community.',
  },
  {
    title: 'Leadership Opportunities',
    text: 'Volunteer, organize events, and develop leadership skills within SBG.',
  },
]

// Same light-color family used in the FAQ section, so the two areas feel consistent.
const cardColors = [
  { bg: '#fff4d6', chip: '#ffe17c' }, // warm yellow
  { bg: '#e3f1ee', chip: '#b7c6c2' }, // sage
  { bg: '#e8f0ff', chip: '#a9c6ff' }, // sky blue
  { bg: '#ffe9ec', chip: '#ffb3c1' }, // blush pink
  { bg: '#eaf7e6', chip: '#b7e3a8' }, // mint green
  { bg: '#f1e9ff', chip: '#cbb3ff' }, // lavender
]

export default function SBGBenefits() {
  return (
    <section className="bg-[#b7c6c2] py-10 sm:py-14 md:py-[68px]">
      <div className="mx-auto w-[92%] max-w-[1120px]">
        <b><SectionTitle
          title="AWS SBG Benefits"
          subtitle="Everything you gain by becoming a member of the AWS Student Builder Group."
        /></b>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
          {sbgBenefits.map((benefit, index) => {
            const color = cardColors[index % cardColors.length]
            return (
              <div
                key={benefit.title}
                style={{ backgroundColor: color.bg }}
                className="rounded-2xl border-2 border-black p-4 shadow-[6px_6px_0_#000] transition hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[10px_10px_0_#000] sm:shadow-[8px_8px_0_#000]"
              >
                <div
                  style={{ backgroundColor: color.chip }}
                  className="mb-3 grid h-11 w-11 place-items-center rounded-full border-2 border-black text-base font-extrabold text-black sm:h-12 sm:w-12"
                >
                  ✓
                </div>
                <h3 className="text-base font-bold leading-snug text-black">{benefit.title}</h3>
                <p className="mt-1.5 text-sm leading-snug text-[#444]">
                  {benefit.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}