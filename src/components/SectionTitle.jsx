export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] mb-2">{title}</h2>
      {subtitle && <p className="mt-0 font-medium text-gray-700">{subtitle}</p>}
    </div>
  )
}