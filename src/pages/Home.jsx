import LeftSection from "../components/Home/LeftSection"
import RightSection from "../components/Home/RightSection"

const Home = () => {
  return (
    <main className="grid grid-cols-2 px-10 py-6">
      <LeftSection/>
      <RightSection/>
    </main>
  )
}
export default Home