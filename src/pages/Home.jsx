import Hero from './Hero'
import Marquee from './Marquee'
import WhySBG from './Whysbg'
import SBGBenefits from './SBGBenefits'
import Team from './Team'
import FAQ from './faq'

export default function Home() {
  return (
    <div className="bg-white text-[#171e19]">
      <Hero />
      <Marquee />
      <WhySBG />
      <SBGBenefits />
      <Team />
      <FAQ />
    </div>
  )
}