import { useState } from "react"
import ModelPlatform from "../components/Room/ModelPlatform"
import RoomNav from "../components/Room/RoomNav"

const Room = () => {
  const [isNavOpen, setIsNavOpen] = useState(true)

  return (
    <main className={`grid ${isNavOpen ? 'grid-cols-[280px_1fr]' : 'grid-cols-[60px_1fr]'} px-10 gap-6 transition-all duration-500`}>
      <RoomNav/>
      <ModelPlatform/>
    </main>
  )
}
export default Room