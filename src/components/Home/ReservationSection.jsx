import { useEffect, useState } from "react"
import { TIME_SLOTS_30_MIN } from "../../configs/Room.config"
import PrimaryButton from "../Shared/PrimaryButton"
import SecondaryButton from "../Shared/SecondaryButton"


const ReservationSection = ({ reservation12 }) => {
  const [recievedData, setRecievedData] = useState({data: []})

  const URL = "http://localhost:8080/api/reservation?limit=3"
  const OPTION= {
    method: "GET",
    headers: {
      "Content-Type" : "application/json"
    },
    credentials: 'include',
  }

  useEffect(() => {
    fetch(URL, OPTION)
    .then(async res => {
      const data = await res.json()

      if(!data.success){
        throw new Error(data)
      }

      setRecievedData(data)
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  const statusColors = {
    confirmed: "bg-green-gradient-2 text-green-700",
    pending: "bg-orange-gradient text-yellow-700",
    cancelled: "bg-red-100 text-red-700"
  }

  const textColors = {
    confirmed: "text-green-600",
    pending: "text-orange-400",
    cancelled: "text-red-500"
  }

  return (
    <section className="w-full p-6 relative mt-5 flex justify-center">
      <div className="text-center flex-1 center flex-col gap-5">
        <h1 className="text-4xl font-bold text-black-text">Recent Reservations</h1>
        <p className="text-black-text text-sm w-100 ">
          Please understand that accepting a reservation takes time to review and confirm. We carefully go over each request to ensure all details are correct and that we can provide the best experience possible.

          We appreciate your patience and will notify you as soon as the status of your reservation is updated.
        </p>
        <SecondaryButton>
          Browse my reservations...
        </SecondaryButton>
      </div>
      <div className="center gap-5 flex-row-reverse flex-1">
        {
          recievedData.data.map(reservation => (
              <Card className={`${statusColors[reservation.status]} rounded-xl shadow-xl border-1 border-gray-300 w-50 overflow-hidden`}>
                <div className="w-full h-25 center  flex flex-col">
                  <h1 className="text-white font-bold text-xl capitalize">{reservation.status}</h1>
                  <h2 className="leading-2 text-xs font-semibold text-white">{reservation.roomId}</h2>
                </div>
                <CardContent className="p-3 shadow-sm space-y-2">
                  <h2 className={`${textColors[reservation.status]} font-semibold text-center`}>Room Reservation</h2>
                

                  <div className="flex flex-col gap-4 text-gray-700 my-6">
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="font-medium text-sm">{reservation.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Time</p>
                      <p className="font-medium text-sm">{TIME_SLOTS_30_MIN[reservation.startingTime]} - {TIME_SLOTS_30_MIN[reservation.outTime + 1]}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
          ))
        }
      </div>
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
