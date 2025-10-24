import Header from "./Header"
import NavList from "./NavList"

const Nav = () => {
  return (
    <aside className="sticky h-screen top-0 p-4 ">
      <Header/>
      <NavList/>
    </aside>
  )
}
export default Nav