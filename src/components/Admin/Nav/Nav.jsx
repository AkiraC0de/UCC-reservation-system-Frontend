import Header from "./Header"
import NavList from "./NavList"
import NavActions from "./NavActions"

const Nav = () => {
  return (
    <aside className="sticky h-screen top-0 p-3 bg-white shadow-md flex flex-col">
      <Header/>
      <div className="flex flex-col justify-between flex-1">
        <NavList/>
        <NavActions/>     
      </div>
    </aside>
  )
}
export default Nav

// const Nav = ({ onSelect }) => {
//   const [openSection, setOpenSection] = useState(null)

//   const handleSectionToggle = (section) => {
//     setOpenSection(openSection === section ? null : section)
//   }

//   return (
//     <aside className="w-64 h-screen bg-white shadow-md border-r border-gray-200 flex flex-col p-4">
//       <h1 className="text-2xl font-semibold mb-6 text-center text-green-600">
//         Admin Panel
//       </h1>

//       <nav className="flex flex-col space-y-1 text-gray-700">
//         {/* MAIN */}
//         <button 
//           onClick={() => onSelect("Dashboard")} 
//           className="flex items-center p-2 rounded-md hover:bg-green-50 hover:text-green-700 transition"
//         >
//           <LayoutDashboard className="w-5 h-5 mr-3 text-green-600" /> Dashboard
//         </button>

//         {/* RESERVATIONS */}
//         <button 
//           onClick={() => handleSectionToggle("reservations")} 
//           className="flex items-center p-2 rounded-md hover:bg-green-50 hover:text-green-700 transition"
//         >
//           <ClipboardList className="w-5 h-5 mr-3 text-green-600" /> Reservations
//         </button>
//         {openSection === "reservations" && (
//           <div className="ml-8 space-y-1 text-sm">
//             <button onClick={() => onSelect("All Reservations")} className="block hover:text-green-600">All Reservations</button>
//             <button onClick={() => onSelect("Pending Approvals")} className="block hover:text-green-600">Pending Approvals</button>
//           </div>
//         )}

//         {/* MANAGEMENT */}
//         <button 
//           onClick={() => handleSectionToggle("management")} 
//           className="flex items-center p-2 rounded-md hover:bg-green-50 hover:text-green-700 transition"
//         >
//           <FolderCog className="w-5 h-5 mr-3 text-green-600" /> Management
//         </button>
//         {openSection === "management" && (
//           <div className="ml-8 space-y-1 text-sm">
//             <button onClick={() => onSelect("Manage Equipment")} className="block hover:text-green-600">Manage Equipment</button>
//             <button onClick={() => onSelect("Manage Rooms")} className="block hover:text-green-600">Manage Rooms</button>
//             <button onClick={() => onSelect("Categories")} className="block hover:text-green-600">Categories</button>
//           </div>
//         )}

//         {/* USERS */}
//         <button 
//           onClick={() => handleSectionToggle("users")} 
//           className="flex items-center p-2 rounded-md hover:bg-green-50 hover:text-green-700 transition"
//         >
//           <Users className="w-5 h-5 mr-3 text-green-600" /> Users
//         </button>
//         {openSection === "users" && (
//           <div className="ml-8 space-y-1 text-sm">
//             <button onClick={() => onSelect("User List")} className="block hover:text-green-600">User List</button>
//             <button onClick={() => onSelect("Roles & Permissions")} className="block hover:text-green-600">Roles & Permissions</button>
//             <button onClick={() => onSelect("Reports")} className="block hover:text-green-600">Reports / Violations</button>
//           </div>
//         )}

//         {/* LOGS */}
//         <button 
//           onClick={() => handleSectionToggle("logs")} 
//           className="flex items-center p-2 rounded-md hover:bg-green-50 hover:text-green-700 transition"
//         >
//           <ListTree className="w-5 h-5 mr-3 text-green-600" /> Logs & History
//         </button>
//         {openSection === "logs" && (
//           <div className="ml-8 space-y-1 text-sm">
//             <button onClick={() => onSelect("Calendar")} className="block hover:text-green-600">Reservation Calendar</button>
//             <button onClick={() => onSelect("Activity Logs")} className="block hover:text-green-600">Activity Logs</button>
//             <button onClick={() => onSelect("History")} className="block hover:text-green-600">History / Archive</button>
//           </div>
//         )}

//         {/* SETTINGS */}
//         <button 
//           onClick={() => handleSectionToggle("settings")} 
//           className="flex items-center p-2 rounded-md hover:bg-green-50 hover:text-green-700 transition"
//         >
//           <Settings className="w-5 h-5 mr-3 text-green-600" /> Settings
//         </button>
//         {openSection === "settings" && (
//           <div className="ml-8 space-y-1 text-sm">
//             <button onClick={() => onSelect("System Settings")} className="block hover:text-green-600">System Settings</button>
//             <button onClick={() => onSelect("Notifications")} className="block hover:text-green-600">Notifications</button>
//             <button onClick={() => onSelect("Backup & Restore")} className="block hover:text-green-600">Backup & Restore</button>
//           </div>
//         )}

//         {/* ACCOUNT */}
//         <div className="mt-auto pt-4 border-t border-gray-200">
//           <button onClick={() => onSelect("Profile")} className="flex items-center p-2 rounded-md hover:bg-green-50 hover:text-green-700 transition">
//             <User className="w-5 h-5 mr-3 text-green-600" /> Profile
//           </button>
//           <button onClick={() => onSelect("Logout")} className="flex items-center p-2 rounded-md text-red-500 hover:bg-red-50 transition">
//             <LogOut className="w-5 h-5 mr-3" /> Logout
//           </button>
//         </div>
//       </nav>
//     </aside>
//   )
// }

// export default Nav




