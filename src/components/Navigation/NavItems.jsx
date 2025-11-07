import { Link, useLocation } from "react-router";
import { NAV_ITEMS } from "../../configs/Nav.config"
import { useState } from "react"
import { Menu } from 'lucide-react';

export default function NavItems(){

  const {pathname} = useLocation();   
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav >
       <Menu color="#15803d" className="md:hidden hover:cursor-pointer" onClick={()=> setMenuOpen(!menuOpen)}/>


  <div className="hidden md:flex justify-evenly gap-[40%] ">
        {NAV_ITEMS.map(item => (
            <div 
                key={item.id}
                className={`${pathname == item.path ? 'font-bold text-green-700' : 'font-medium'} transition-all duration-300 uppercase text-xs hover:text-green-700`}>
                <Link to={item.path}>
                    {item.label}
                </Link>
            </div>
        ))}
    </div>

    {menuOpen && (
      <div className="md:hidden flex flex-col items-center gap-2.5 text-black py-6 rounded-b-lg z-[100] absolute top-full left-0 right-0  bg-white shadow-sm ">
         {NAV_ITEMS.map(item => (
            <div 
                key={item.id}
                className={`${pathname == item.path ? 'font-bold text-green-700' : 'font-medium'} transition-all duration-300 uppercase text-xs hover:text-green-700`}>
                <button onClick={()=> setMenuOpen(!menuOpen)}>
                  <Link to={item.path}>
                    {item.label.toUpperCase()}
                </Link>
                  </button>
                
            </div>
        ))}
      </div>
    )}
    </nav>
  )
}
