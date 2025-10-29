import useItemDetail from "../../hooks/useItemDetail"
import ConfirmIcon from "../Shared/Icons/ConfirmIcon"

const Notification = () => {
  const {serverResponse} = useItemDetail()
  return (
    <div className="absolute z-300 top-18 right-1/2 translate-x-1/2 bg-white p-2 flex flex-col items-center gap-2 w-50 rounded-lg shadow-lg anim-fade-pop-top">
      <ConfirmIcon className="w-10 fill-green-500"/>
      <p className="text-[12px] font-semibold text-center text-black-text">{serverResponse}</p>
    </div>
  )
}
export default Notification