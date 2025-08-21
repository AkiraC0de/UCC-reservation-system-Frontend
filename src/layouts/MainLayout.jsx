import { Outlet } from "react-router"
import Nav from "../Components/Navigation/Nav"

const MainLayout = () => {
  return (
    <div className="grid grid-rows-[60px_1fr]">
        <Nav/>
        <Outlet/>
    </div>
  )
}
export default MainLayout