import HomeHeader from "../components/Home/HomeHeader"
import LeftSection from "../components/Home/LeftSection"
import RightSection from "../components/Home/RightSection"
import HomeButtons from "../components/Home/HomeButtons"
import HomeBgOverlay from "../components/Home/HomeBgOverlay"

const Home = () => {
  return (
    <main className="grid grid-cols-2 px-10 py-6">
      <LeftSection>
        <HomeHeader/>
        <HomeButtons/>
      </LeftSection>
      <RightSection>

      </RightSection>
    </main>
  )
}
export default Home