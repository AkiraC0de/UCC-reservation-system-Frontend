import Logo from "../Shared/Logo.jsx"
import NavItems from "./NavItems.jsx"
import NavUser from "./NavUser.jsx"

const Nav = () => {
  return (
    <div className="grid grid-cols-3 items-center justify-between px-6 z-200">
        <Logo/>
        <NavItems/>
        <NavUser/>
    </div>
  )
}
export default Nav