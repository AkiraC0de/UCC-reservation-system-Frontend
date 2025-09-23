import ConfirmIcon from "../components/Shared/Icons/ConfirmIcon"
import LocateIcon from "../components/Shared/Icons/LocateIcon"
import ScheduleIcon from "../components/Shared/Icons/ScheduleIcon"

export const ROOM_RESERVATION_DEFAULT_VALUE = {
  building: null,
  floor: 1,
}

export const CONGRESSIONAL_ROOM_PROGRESS_ITEMS = [
  {
    id: "stage1Locate",
    stage: 1,
    stageEnd: 3,
    label: "Locate",
    icon: LocateIcon
  },
  {
    id: "stage2Schedule",
    stage: 4,
    label: "Schedule",
    icon: ScheduleIcon
  },
  {
    id: "stage3Confirmation",
    label: "Confirmation",
    icon: ConfirmIcon
  }
]

// UNIFNISHED
export const ROOM_RESERVATION_ROOM_MAP = {
  "Right Wing": {
    1: [
      {
        id: "RWRM101",
        label: "101",
        available: false
      },{
        id: "RWRM102",
        label: "102",
        available: false
      }
    ],
    2: {

    }
  },
  "Left Wing":{
    1:[
      {
        id: "LWRM106",
        label: "106",
        available: false
      },
      {
        id: "LWRM107",
        label: "107",
        available: true
      },
      {
        id: "LWRM108",
        label: "108",
        available: true
      },
      {
        id: "LWRM109",
        label: "109",
        available: true
      },
      {
        id: "LWRM110",
        label: "110",
        available: true
      },
    ]
  }
}