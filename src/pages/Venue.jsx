import SectionTitle from '../components/SectionTitle'

export default function Venue() {
  return (
    <section className="py-[68px] bg-[#b7c6c2] min-h-[60vh] border-y-2 border-black">
      <div className="mx-auto w-[92%] max-w-[1120px]">
        <SectionTitle title="Venue" subtitle="Where we host sessions and events." />

        <div className="border-2 border-black bg-white shadow-[8px_8px_0_#000] p-6">
          <h3 className="text-2xl mb-3">Main Auditorium, Tech Block</h3>
          <p>ABC College of Engineering</p>
          <p>City, State, India</p>
          <p className="mt-2">
            <strong>Event Days:</strong> Saturday & Sunday
          </p>
          <p>
            <strong>Time:</strong> 10:00 AM – 4:00 PM
          </p>
        </div>
      </div>
    </section>
  )
}