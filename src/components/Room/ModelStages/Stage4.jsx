import { motion, useInstantTransition } from "motion/react"
import ScheduleTable from "../../Shared/ScheduleTable/ScheduleTable"
import useRoom from "../../../hooks/useRoom"
import { useEffect, useState } from "react"

const Stage4 = () => {
  const {selectedSchedule, handleSelectedSchedule, reservation} = useRoom()
  const [recievedScheduleData, setRecievedScheduleData] = useState([])

  const URL = `http://localhost:8080/api/all-reservation?roomId=${reservation.room}`;
  const OPTION= {
    method: "GET",
    headers: {
      "Content-Type" : "application/json"
    },
    credentials: 'include',
  }
  const fetchSheduleData = () => {
    fetch(URL, OPTION)
    .then(async res => {
    const data = await res.json()

    if(!data.success){
        throw new Error(data.message)
    }

    setRecievedScheduleData(data.data)
    })
    .catch(err => {
    console.log(err.message)
    })
  }

  useEffect(() => {
    fetchSheduleData()
  }, [reservation.room])

  return (
    <div 
      className="w-full anim-scale">
      <ScheduleTable 
        scheduleData={selectedSchedule} 
        handleScheduleData={handleSelectedSchedule} 
        recievedScheduleData={recievedScheduleData}
      />
    </div>
  )
}
export default Stage4