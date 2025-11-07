import LeftSection from "../components/Home/LeftSection"
import ReservationSection from "../components/Home/ReservationSection"
import RightSection from "../components/Home/RightSection"

const Home = () => {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 py-6">
        <LeftSection/>
        <RightSection/>
      </div>
    </main>
  )
}
export default Home