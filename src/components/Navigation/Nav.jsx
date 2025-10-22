import Logo from "../Shared/Logo.jsx"
import NavItems from "./NavItems.jsx"
import NavUser from "./NavUser.jsx"
import clsx from "clsx"
import { useState, useEffect } from "react"

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const navClasses = clsx({
    "bg-[#f5f5f7]" : scrolled,
    "bg-transparent" : !scrolled,
  }, "grid grid-cols-3 items-center justify-between px-6 z-200 fixed top-0 h-[75px] w-full transition-all duration-300")

  return (
    <div className={navClasses}>
        <Logo/>
        <NavItems/>
        <NavUser/>
    </div>
  )
}
export default Nav