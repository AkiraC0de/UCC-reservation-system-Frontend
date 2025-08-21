import Logo from "../Shared/Logo.jsx"
import NavItems from "./NavItems.jsx"
import NavUser from "./NavUser.jsx"

const Nav = () => {
  return (
    <div className="flex items-center justify-between px-6">
        <Logo/>
        <NavItems/>
        <NavUser/>
    </div>
  )
}
export default Nav