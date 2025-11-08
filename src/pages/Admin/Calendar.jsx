import { useState } from "react";
import ReservationCalendar from "../../components/Shared/ReservationCalendar.jsx";
import { useEffect } from "react";

const Calendar = () => {
   const [calendarReservation, setCalendarReservation] = useState([])

  useEffect(() => {
    const URL = "http://localhost:8080/api/admin/reservationCalendar"
    const OPTION= {
      method: "GET",
      credentials: 'include',
    }

    fetch(URL, OPTION)
      .then(async res => {
        const data = await res.json()

        if(!data.success){
          throw new Error(data.message)
        }

        setCalendarReservation(data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleDateClick = (date, reservations) => {
    
  };

  const handleReservationClick = (reservation) => {
    
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reservation Calendar</h1>
          <p className="text-gray-600">Click on any date to view reservations. Colored dots indicate reservation status.</p>
        </div>

        <ReservationCalendar
          reservations={calendarReservation}
          onDateClick={handleDateClick}
          onReservationClick={handleReservationClick}
        />

      </div>
    </div>
  );
};

export default Calendar