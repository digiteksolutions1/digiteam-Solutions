import HeroSection from '../components/Home/HeroSection'
import JobOpenings from '../components/Home/JobOpenings'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import FutureRoles from '../components/Home/FutureRoles'
import Testimonials from '../components/Home/Testimonials'
import CallToAction from '../components/Home/CallToAction'

export default function Home() {
  return (
    <div className="bg-secondary-light">
      <HeroSection />
      <JobOpenings />
      <WhyChooseUs />
      <FutureRoles />
      <Testimonials />
      <CallToAction />
    </div>
  )
}