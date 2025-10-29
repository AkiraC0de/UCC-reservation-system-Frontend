import useItemDetail from "../../hooks/useItemDetail"
import Confirmation from "./Confirmation"
import Notification from "./Notification"

const Layout = ({children}) => {
  const {showConfirmation, showNotification} = useItemDetail()
  return (
    <div className="grid grid-cols-[360px_1fr] px-10 gap-10">
      {children}
      {showConfirmation && <Confirmation/>}
      {showNotification && <Notification/>}
    </div>
  )
}
export default Layout