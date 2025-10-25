export const NAV_ITEMS = [
    {
        id: "nav_home",
        label: "Home",
        path: "/",
    },
    {
        id: "nav_room",
        label: "Room",
        path: "/room",
    },
    {
        id: "nav_projector",
        label: "Items",
        path: "/items",
    },
    {
        id: "nav_about",
        label: "About",
        path: "/about",
    },
]

export const notifications = [
    {
      id: 1,
      status: "Accepted",
      date: "10-30-2025",
      time: "2:00 PM-4:00 PM",
      item: "Room 301",
      timeAgo: "2 mins ago",
    },
    {
      id: 2,
      status: "Rejected",
      date: "10-31-2025",
      time: "9:00 AM-11:00 AM",
      item: "Projector",
      timeAgo: "40 mins ago",
    },
    {
      id: 3,
      status: "Pending",
      date: "11-01-2025",
      time: "10:00 AM-12:00 PM",
      item: "Computer Unit",
      timeAgo: "3 hours ago",
    },
  ];

  export const STATUS = {
    PENDING: {
      label: "Pending",
      color: "text-yellow-700 bg-yellow-100 border-yellow-300",
      icon: "🟡",
    },
    ACCEPTED: {
      label: "Accepted",
      color: "text-green-700 bg-green-100 border-green-300",
      icon: "🟢",
    },
    REJECTED: {
      label: "Rejected",
      color: "text-red-700 bg-red-100 border-red-300",
      icon: "🔴",
    },
  };