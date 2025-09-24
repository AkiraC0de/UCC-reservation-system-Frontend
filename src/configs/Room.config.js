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


export const ROOM_RESERVATION_ROOM_MAP = {
  "Right Wing": {
    1: [
      {
        id: "RWRM101",
        no: "101",
        label: "Faculty",
        available: false,
        btnPos: {
          x: 45.5,
          y: 23.5
        }
      },{
        id: "RWRM102",
        no: "102",
        label: "Room",
        available: true,
	      btnPos: {
          x: 63.5,
          y: 43.5
        }
      },{
        id: "RWRM103",
        no: "103",
        label: "Guidance",
        available: false,
	      btnPos: {
          x: 46.9,
          y: 62.6
        }
      },{
        id: "RWRM104",
        no: "104",
        label: "Records",
        available: false,
	      btnPos: {
          x:28.6,
          y:42.2
        }
      },{
        id: "RWRM105",
        no: "105",
        label: "Registrar",
        available: false,
	      btnPos: {
          x:10.5,
          y:22
        }
      },

    ],
    2: [
      {
        id: "RWRM201",
        no: "201",
        label: "Faculty",
        available: false,
        btnPos: {
          x: 45.5,
          y: 23.5
        }
      },{
        id: "RWRM202",
        no: "202",
        label: "Room",
        available: true,
	      btnPos: {
          x: 63.5,
          y: 43.5
        }
      },{
        id: "RWRM203",
        no: "203",
        label: "Room",
        available: true,
	      btnPos: {
          x: 46.9,
          y: 62.6
        }
      },{
        id: "RWRM204",
        no: "204",
        label: "Room",
        available: true,
	      btnPos: {
          x:28.6,
          y:42.2
        }
      },{
        id: "RWRM205",
        no: "205",
        label: "Room",
        available: true,
	      btnPos: {
          x:10.5,
          y:22
        }
      },
    ],
    3:  [
      {
        id: "RWRM301",
        no: "301",
        label: "Room",
        available: true,
        btnPos: {
          x: 45.5,
          y: 23.5
        }
      },{
        id: "RWRM302",
        no: "302",
        label: "Room",
        available: true,
	      btnPos: {
          x: 63.5,
          y: 43.5
        }
      },{
        id: "RWRM303",
        no: "303",
        label: "Room",
        available: true,
	      btnPos: {
          x: 46.9,
          y: 62.6
        }
      },{
        id: "RWRM304",
        no: "304",
        label: "Room",
        available: true,
	      btnPos: {
          x:28.6,
          y:42.2
        }
      },{
        id: "RWRM305",
        no: "305",
        label: "MIS",
        available: false,
	      btnPos: {
          x:10.5,
          y:22
        }
      },
    ],
    4:  [
      {
        id: "RWRM401",
        no: "401",
        label: "Room",
        available: true,
        btnPos: {
          x: 45.5,
          y: 23.5
        }
      },{
        id: "RWRM402",
        no: "402",
        label: "Room",
        available: true,
	      btnPos: {
          x: 63.5,
          y: 43.5
        }
      },{
        id: "RWRM403",
        no: "403",
        label: "Room",
        available: true,
	      btnPos: {
          x: 46.9,
          y: 62.6
        }
      },{
        id: "RWRM404",
        no: "404",
        label: "Room",
        available: true,
	      btnPos: {
          x:28.6,
          y:42.2
        }
      },{
        id: "RWRM405",
        no: "405",
        label: "Room",
        available: true,
	      btnPos: {
          x:10.5,
          y:22
        }
      },
    ],
  },
  "Left Wing":{
    1:[
      {
        id: "LWRM106",
        no: "106",
        label: "Library",
        available: false,
        btnPos: {
          x: 46.9,
          y: 62.6
        }
      },
      {
        id: "LWRM107",
        no: "107",
        label: "Room",
        available: true,
        btnPos: {
          x:28.6,
          y:42.2
        }
      },
      {
        id: "LWRM108",
        no: "108",
        label: "Room",
        available: true,
        btnPos: {
          x:10.5,
          y:22
        }
      },
      {
        id: "LWRM109",
        no: "109",
        label: "Room",
        available: true,
        btnPos: {
          x: 27.5,
          y: 3
        }
      },
      {
        id: "LWRM110",
        no: "110",
        label: "Room",
        available: true,
        btnPos: {
          x:45.6,
          y:23.4
        }
      },
    ],
    2:[
      {
        id: "LWRM206",
        no: "206",
        label: "Room",
        available: true,
        btnPos: {
          x: 46.9,
          y: 62.6
        }
      },
      {
        id: "LWRM207",
        no: "207",
        label: "Room",
        available: true,
        btnPos: {
          x:28.6,
          y:42.2
        }
      },
      {
        id: "LWRM208",
        no: "208",
        label: "Room",
        available: true,
        btnPos: {
          x:10.5,
          y:22
        }
      },
      {
        id: "LWRM209",
        no: "209",
        label: "Room",
        available: true,
        btnPos: {
          x: 27.5,
          y: 3
        }
      },
      {
        id: "LWRM210",
        no: "210",
        label: "Room",
        available: true,
        btnPos: {
          x:45.6,
          y:23.4
        }
      },
    ],
    3:  [
      {
        id: "LWRM306",
        no: "306",
        label: "Room",
        available: true,
        btnPos: {
          x: 46.9,
          y: 62.6
        }
      },{
        id: "LWRM307",
        no: "307",
        label: "Room",
        available: true,
	      btnPos: {
          x:28.6,
          y:42.2
        }
      },{
        id: "LWRM308",
        no: "308",
        label: "Room",
        available: true,
	      btnPos: {
          x:10.5,
          y:22
        }
      },{
        id: "LWRM309",
        no: "309",
        label: "Room",
        available: true,
	      btnPos: {
          x: 27.5,
          y: 3
        }
      },{
        id: "LWRM310",
        no: "310",
        label: "Room",
        available: true,
	      btnPos: {
          x:45.6,
          y:23.4
        }
      },
    ],
    4:  [
      {
        id: "LWRM406",
        no: "406",
        label: "Room",
        available: true,
        btnPos: {
          x: 46.9,
          y: 62.6
        }
      },{
        id: "LWRM407",
        no: "407",
        label: "Room",
        available: true,
	      btnPos: {
          x:28.6,
          y:42.2
        }
      },{
        id: "LWRM408",
        no: "408",
        label: "Room",
        available: true,
	      btnPos: {
          x:10.5,
          y:22
        }
      },{
        id: "LWRM409",
        no: "409",
        label: "Room",
        available: true,
	      btnPos: {
          x: 27.5,
          y: 3
        }
      },{
        id: "RWRM410",
        no: "410",
        label: "Room",
        available: true,
	      btnPos: {
          x:45.6,
          y:23.4
        }
      },
    ],
  }
}