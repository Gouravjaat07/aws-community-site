import { marqueeBrands } from '../data/siteData'

export default function Marquee() {
  return (
    <section className="overflow-hidden border-y-2 border-black bg-[#171e19]">
      <div className="flex animate-[scroll_24s_linear_infinite] gap-9 whitespace-nowrap py-4 text-[1.8rem] font-extrabold text-[#b7c6c2] opacity-50">
        {[...marqueeBrands, ...marqueeBrands].map((b, idx) => (
          <span key={`${b}-${idx}`}>{b}</span>
        ))}
      </div>
    </section>
  )
}