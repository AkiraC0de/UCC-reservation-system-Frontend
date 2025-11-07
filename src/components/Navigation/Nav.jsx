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

  // const navClasses = clsx({
  //   "bg-[#f5f5f7]" : scrolled,
  //   "bg-transparent" : !scrolled,
  // }, "grid grid-cols-[200px_600px] items-center  px-6 z-200 fixed top-0 h-[75px] w-full transition-all duration-300")

  const navClasses = clsx({
    "bg-[#f5f5f7]" : scrolled,
    "bg-transparent" : !scrolled,
  }, "flex justify-between items-center px-6 z-200 fixed top-0 h-[75px] w-full transition-all duration-300 ")

  const rightNavClasses = clsx({
    "bg-[#f5f5f7]" : scrolled,
    "bg-transparent" : !scrolled,
  }, "flex lg:flex-2 md:flex-3 justify-between items-center ")

  return (
    <div className={navClasses}>
        <div className="flex-1 sm:basis-0 lg:basis-25">
          <Logo/>
        </div>
        <div className={rightNavClasses}>
          <NavItems/>
          <NavUser/>
        </div>
    </div>
  )
}
export default Nav