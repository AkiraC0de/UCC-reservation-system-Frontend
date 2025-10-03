import RightSection from "../components/About/RightSection"
import LeftSection from "../components/About/LeftSection"

export default function About() {
  return (
    /*gap-30 is tentative*/
    <main className="grid grid-cols-2 gap-30 p-20 h-full w-full items-center">
        <LeftSection/>
        <RightSection/>
    </main>
  )
}
