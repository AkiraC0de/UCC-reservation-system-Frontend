import DashboardIcon from "../../components/Shared/Icons/DashboardIcon"
import Schedule2Icon from "../../components/Shared/Icons/Schedule2Icon"
import ScheduleIcon from "../../components/Shared/Icons/ScheduleIcon"

export const NAV_ITEMS = [
  {
    id: "nav_dashboard",
    icon: DashboardIcon,
    to: "/admin",
    label: "Dashboard",
    iconClasses: {
      default: "",
      active: "w-10 bg-black"
    }
  },
  {
    id: "nav_regis",
    to: "/admin/registrations",
    icon: ScheduleIcon,
    iconClasses: {
      default: "w-10 stroke-gray-400 p-2 fill-gray-400 bg-white rounded-lg shadow-md",
      active: "w-10 p-2 stroke-white bg-green-500 shadow-md rounded-lg"
    },
    label: "Registrations"
  },  
]

export const NAV_RESERVATION_ITEMS = [
  {
    id: "nav_reserv_room",
    icon: Schedule2Icon,
    to: "/admin/reservations/room",
    label: "Room"
  },
  {
    id: "nav_reserv_item",
    icon: Schedule2Icon,
    to: "/admin/reservations/item",
    label: "Item"
  }
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