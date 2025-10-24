import DashboardIcon from "../../components/Shared/Icons/DashboardIcon"
import Schedule2Icon from "../../components/Shared/Icons/Schedule2Icon"
import ScheduleIcon from "../../components/Shared/Icons/ScheduleIcon"

export const NAV_ITEMS = [
  {
    id: "nav_dashboard",
    icon: DashboardIcon,
    label: "Dashboard",
    iconClasses: {
      default: "w-10 stroke-gray-400 p-2 fill-gray-400 bg-white rounded-lg shadow-md",
      active: "w-20"
    }
  },
  {
    id: "nav_regis",
    icon: () => (<ScheduleIcon className="w-10 stroke-gray-400 p-2 fill-gray-400 bg-white rounded-lg shadow-md"/>),
    iconClasses: {
      default: "w-10 stroke-gray-400 p-2 fill-gray-400 bg-white rounded-lg shadow-md",
      active: "w-20"
    },
    label: "Registrations"
  },  
  {
    id: "nav_reserv",
    icon: Schedule2Icon,
    iconClasses: {
      default: "w-10 stroke-gray-400 p-2 fill-gray-400 bg-white rounded-lg shadow-md",
      active: "w-20"
    },
    label: "Reservations"
  },
]

export const NAV_ROOM_ITEMS = [
  {
    icon: DashboardIcon,
    label: "Status"
  },
  {
    icon: DashboardIcon,
    label: "Plotted Schedule"
  },
]