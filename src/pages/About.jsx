import Banner from '../components/About/Banner'
import AboutTheSystem from "../components/About/AboutSection"
import VisionSection from "../components/About/VisionSection"
import MissionSection from '../components/About/MissionSection'
import MeetTheTeam from '../components/About/Developers'

export default function About() {
  return (
    <main className="px-12 pb-12">
      <Banner/>
      <AboutTheSystem/>
      <MissionSection/>
      <VisionSection/>
      <MeetTheTeam/>
      
    </main>
  )
}
