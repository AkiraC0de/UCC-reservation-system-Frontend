import { useEffect, useMemo, useState } from "react"
import { DashboardContext } from "../../context/Admin/DashboardContext"

const DashboardProvider = ({children}) => {
  const [calendarReservation, setCalendarReservation] = useState([])
  const [users, setUsers] = useState([])

  const fetchReservationCalendar = async () => {
    const URL = "http://localhost:8080/api/admin/reservationCalendar"
    const OPTION= {
      method: "GET",
      credentials: 'include',
    }

    await fetch(URL, OPTION)
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
  }

  const fetchAllUsers = async () => {
    const URL = "http://localhost:8080/api/admin/all-user"
    const OPTION = {
      method: "GET",
      credentials: 'include',
      headers: {
          "Content-Type": "application/json"
      },
    }

    await fetch(URL, OPTION)
    .then(async res => {
      const data = await res.json()

      if(!data.success){
        throw new Error(data.message)
      }

      setUsers(data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const stats = useMemo(() => {
  const totalPendingRoom = calendarReservation.filter(
    reserv => reserv.type === "Room" && reserv.status === "pending"
  ).length;

  const totalPendingItem = calendarReservation.filter(
    reserv => reserv.type === "Item" && reserv.status === "pending"
  ).length;

  // ✅ New: total pending reservations only (Room + Item)
  const totalReservationPending = totalPendingRoom + totalPendingItem;

  const totalApproved = calendarReservation.filter(
    reserv => reserv.status === "accepted"
  ).length;

  const totalRejected = calendarReservation.filter(
    reserv => reserv.status === "rejected"
  ).length;

  const totalUsers = users.filter(
    user => user.status !== "archived"
  ).length;

  const totalUsersPending = users.filter(
    user => user.status === "pending"
  ).length;

  const totalStudent = users.filter(
    user => user.role === "student"
  ).length;

  const totalFaculty = users.filter(
    user => user.role === "faculty"
  ).length;

  return {
    totalPendingRoom,
    totalPendingItem,
    totalReservationPending, 
    totalUsers,
    totalUsersPending,
    totalStudent,
    totalFaculty,
    totalApproved,
    totalRejected,

    
    totalPendings: totalReservationPending + totalUsersPending
  };
}, [calendarReservation, users]);




  useEffect(() => {
    fetchReservationCalendar()
    fetchAllUsers()
  }, [])

  return (
    <DashboardContext.Provider
      value={{
        calendarReservation,
        stats,
        users
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}
export default DashboardProvider