import { useState } from "react"
import ModelPlatform from "../components/Room/ModelPlatform"
import RoomNav from "../components/Room/RoomNav"

const Room = () => {
  const [isNavOpen, setIsNavOpen] = useState(true)

  return (
    <main className={`grid px-10 gap-6 transition-all duration-500`}>
      <ModelPlatform/>
    </main>
  )
}
export default Room