import BuildingSideOverlay from "./BuildingSideOverlay"
import RightWingButtons from "./RightWingButtons"
import useRoom from "../../../hooks/useRoom"
import { useRef, useState, useEffect } from "react"
import { AnimatePresence, motion } from "motion/react"

const RightWing = () => {
  const { reservation } = useRoom();
  const [direction, setDirection] = useState(1); // 1 = up, -1 = down
  const prevFloor = useRef(reservation.floor);

  useEffect(() => {
    if (reservation.floor > prevFloor.current) {
      setDirection(1);  // going up
    } else if (reservation.floor < prevFloor.current) {
      setDirection(-1); // going down
    }
    prevFloor.current = reservation.floor;
  }, [reservation.floor])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={reservation.floor}
        initial={{ opacity: 0, y: -100 * direction  }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 * direction, transition: { duration: 0.2 } }}
        transition={{
        y: { type: "spring", stiffness: 200, damping: 15, duration: 0.2 },
        opacity: { duration: 0.2 }
        }}
        className="w-full flex justify-center items-center absolute"
      >
        <BuildingSideOverlay />
        <RightWingModel />
        <RightWingButtons />
      </motion.div>
    </AnimatePresence>
  )
}

const RightWingModel = () => {
  return(
    <div className="cube-2 w-4/5">
        <img className="w-full" src="/campus/north_congress/rightWing.webp" alt="right_wing_blg" />
    </div>
  )
}
export default RightWing