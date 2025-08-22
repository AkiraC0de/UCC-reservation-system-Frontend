import { Outlet, useLocation } from "react-router"
import Nav from "../Components/Navigation/Nav"
import HomeBgOverlay from "../components/Home/HomeBgOverlay"

const MainLayout = () => {
  const {pathname} = useLocation();
  return (
    <div className="grid grid-rows-[75px_1fr] overflow-hidden relative min-h-screen">
        <Nav/>
        <Outlet/>
        { pathname == '/' ? <HomeBgOverlay/> : ''}
    </div>
  )
}
export default MainLayout