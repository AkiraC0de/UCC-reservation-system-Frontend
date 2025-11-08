import ExitIcon from "./Icons/ExitIcon"
import { motion } from "motion/react"

const LogoutConfirmation = ({onConfirm = () => {}, onCancel = () => {}}) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/40 z-900">
      <motion.div
      initial={{ opacity: 0, scale: 0}}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        scale: { duration: 0.2 },
        opacity: { duration: 0.2 }
      }} 
      className="flex p-4 rounded-lg flex-col items-center absolute bottom-1/2 translate-1/2 right-1/2 bg-white">
        <ExitIcon className="w-18 stroke-gray-400"/>
        <h2 className="text-black-text font-medium">Logging Out...</h2>
        <p className="text-xs mt-5 text-black-text">Are sure you want to logout?</p>
        <div className="w-full flex gap-3 py-2">
          <button 
            onClick={onConfirm}
            className="text-sm cursor-pointer text-gray-400 border-1 rounded-lg border-gray-400 px-3 py-1 flex-1">
            Yes
          </button>
          <button
            onClick={onCancel}
            className="text-sm cursor-pointer flex-1 text-white bg-green-gradient-2 rounded-lg px-3 py-1"
          >
            No
          </button>
        </div>
      </motion.div>
    </div>
  )
}
export default LogoutConfirmation