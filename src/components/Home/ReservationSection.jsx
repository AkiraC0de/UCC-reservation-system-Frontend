import { TIME_SLOTS_30_MIN } from "../../configs/Room.config"


const ReservationSection = ({ reservation12 }) => {
  // Example structure of `reservation` prop:
  // {
  //   status: "Confirmed",
  //   date: "Oct 10, 2025",
  //   time: "6:30 PM",
  //   location: "Green Leaf Restaurant"
  // }

   // Mock data for testing
  const reservation = {
    type: "Reserved",
    roomId: "LWRM101",
    date: "10/12/2025",
    status: "Pending",
    reservedBy: {
      firstName: "Mcraven Akira",
      lastName: "Fernandez",
      section: "B",
      yearLevel: 2,
      program: "BSCS"
    },
    purpose: "Lecture",
    startingTime: 3,
    outTime: 8,
    weekDay: 5,
    hours: 5,
  }

  const statusColors = {
    Confirmed: "bg-green-gradient-2 text-green-700",
    Pending: "bg-orange-gradient text-yellow-700",
    Cancelled: "bg-red-100 text-red-700"
  }

  const textColors = {
    Confirmed: "text-green-600",
    Pending: "text-orange-600",
    Cancelled: "text-red-500"
  }

  return (
    <section className="w-full p-6 relative mt-5">
      <Card className={`${statusColors[reservation.status]} rounded-xl shadow-xl border-1 border-gray-300 w-50 overflow-hidden`}>
        <div className="w-full h-25 center  flex flex-col">
          <h1 className="text-white font-bold text-xl">{reservation.status}</h1>
          <h2 className="leading-2 text-xs font-semibold text-white">{reservation.roomId}</h2>
        </div>
        <CardContent className="p-3 shadow-sm space-y-2">
          <h2 className=" font-semibold text-green-600 text-center">Room Reservation</h2>
        

          <div className="flex flex-col gap-4 text-gray-700 my-6">
            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-medium text-sm">{reservation.date}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Time</p>
              <p className="font-medium text-sm">{TIME_SLOTS_30_MIN[reservation.startingTime]} - {TIME_SLOTS_30_MIN[reservation.outTime]}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export const Card = ({ children, className }) => {
  return (
    <div className={` ${className}`}>
      {children}
    </div>
  )
}

export const CardContent = ({ children, className }) => {
  return (
    <div className={` ${className} bg-white rounded-xl`}>
      {children}
    </div>
  )
}


export default ReservationSection
