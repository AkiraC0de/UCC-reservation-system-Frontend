import React from 'react'
import { Link } from "react-router";

export default function AboutButtons() {
  const buttonClass = `
    relative shadow-md border-2 border-[#9fcc56] 
    text-green-700 text-sm font-semibold py-2 px-4 rounded-lg
    transition-all duration-300 ease-in-out
    hover:text-white hover:scale-105 hover:shadow-lg
    hover:bg-gradient-to-r hover:from-green-500 hover:to-lime-400
  `;

  return (
    <div className="flex gap-6 mt-6 justify-left flex-wrap">
      <Link to="/mission&vision" className={buttonClass}>
        Mission 
      </Link>
      <Link to="/purpose" className={buttonClass}>
        Vission
      </Link>
      <Link to="/meettheteam" className={buttonClass}>
        Meet the Team
      </Link>
    </div>
  );
}
