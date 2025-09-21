import ConfirmIcon from "../components/Shared/Icons/ConfirmIcon"
import LocateIcon from "../components/Shared/Icons/LocateIcon"
import ScheduleIcon from "../components/Shared/Icons/ScheduleIcon"

const CONGRESSIONAL_ROOMS_BTN = {
  ROOMS: [
    {
      label: "101"
    }
  ]
}

export const CONGRESSIONAL_ROOM_PROGRESS_ITEMS = [
  {
    id: "stage1Locate",
    label: "Locate",
    icon: LocateIcon
  },
  {
    id: "stage2Schedule",
    label: "Schedule",
    icon: ScheduleIcon
  },
  {
    id: "stage3Confirmation",
    label: "Confirmation",
    icon: ConfirmIcon
  }
]