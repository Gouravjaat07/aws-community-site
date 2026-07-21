import SectionTitle from '../components/SectionTitle'

export default function About() {
  return (
    <section className="py-[68px] bg-white min-h-[60vh]">
      <div className="mx-auto w-[92%] max-w-[1120px]">
        <SectionTitle
          title="About AWS Community Group"
          subtitle="A student-led community helping peers learn cloud through action."
        />

        <div className="border-2 border-black bg-white shadow-[8px_8px_0_#000] p-6 rounded-[2px]">
          <p className="mb-4 text-[1.02rem] leading-7">
            Our mission is to make cloud education accessible, practical, and career-oriented for every student in our college.
            We organize workshops, hackathons, certifications guidance, and mentorship opportunities.
          </p>
          <p className="text-[1.02rem] leading-7">
            Whether you are a beginner or already building projects, this community gives you a space to grow, collaborate,
            and connect with industry experts.
          </p>
        </div>
      </div>
    </section>
  )
}