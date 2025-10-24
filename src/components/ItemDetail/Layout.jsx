import useItemDetail from "../../hooks/useItemDetail"
import Confirmation from "./Confirmation"

const Layout = ({children}) => {
  const {showConfirmation} = useItemDetail()
  return (
    <div className="grid grid-cols-[360px_1fr] px-10 py-5 gap-10">
      {children}
      {showConfirmation && <Confirmation/>}
    </div>
  )
}
export default Layout