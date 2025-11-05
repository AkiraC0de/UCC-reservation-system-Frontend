import { Link, useLocation } from "react-router"
import clsx from "clsx"
import { ChevronRight, ChevronDown } from "lucide-react";

const NavItemCard = ({ item, isExpanded = false, currentPage = "", toggleExpandedItem }) => {
  const Icon = item.icon
  const isActive = item.to === currentPage

  if (item.type === 'single') {
    return (
      <Link to={item?.to}>
        <button
          className={`cursor-pointer w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
            isActive
              ? 'bg-green-50 text-green-700 font-medium'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Icon size={20} />
          <span>{item.label}</span>
        </button>
      </Link>
    )
  }

  return (
    <div>
      <button
        onClick={() => toggleExpandedItem(prev => prev == item.id ? "" : item.id)}
        className="cursor-pointer w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-200"
      >
        <div className="flex items-center gap-3">
          <Icon size={20} />
          <span className="font-medium">{item.label}</span>
        </div>
        <ChevronRight
          size={18}
          style={{
            transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease"
          }}
        />
    </button>
      <div className={`${isExpanded ? "max-h-40" : "max-h-0"} overflow-hidden ml-4 mt-1 space-y-1 transition-all duration-400`}>
        {item.items.map(subItem => (
          <Link 
            to={subItem.to}
            key={subItem.id}
          >
            <button   
              className={` cursor-pointer w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                currentPage === subItem.to
                  ? 'bg-green-50 text-green-700 font-medium border-l-2 border-green-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
              <span>{subItem.label}</span>
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}


export default NavItemCard
