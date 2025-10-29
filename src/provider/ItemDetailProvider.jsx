import { useParams } from "react-router"
import { ITEMS_DATA } from "../configs/Items.config"
import { ItemDetailContext } from "../context/itemDetailContext"
import { useMemo, useState, useEffect } from "react"
import useAuth from "../hooks/useAuth"

const ItemDetailProvider = ({ children }) => {
  const [recievedScheduleData, setRecievedScheduleData] = useState([])
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [serverResponse, setServerResponse] = useState("")
  const [selectedSchedule, setSelectedSchedule] = useState({
    startingTime: null,
    outTime: null,
    date: null
  })
  const [purpose, setPurpose] = useState("Lecture")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const { id } = useParams()

  const selectedItem = useMemo(() => {
    return ITEMS_DATA.find(item => item.id === id)
  }, [id])

  useEffect(() => {
    const URL = `http://localhost:8080/api/item-reservation/7days?itemId=${selectedItem.id}`;
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

    fetchSheduleData()
  }, [])

  const handleSelectedSchedule = (name, value) => {
    setSelectedSchedule(prev => ({ ...prev, [name]: value }))
  }

  const toggleConfirmation = () => {
    setShowConfirmation(prev => !prev)
  }

  const { auth : {userData} } = useAuth() 

  const handleSubmitReservation = async () => {
  try {
    setIsSubmitting(true)

    const reservationData = {
      itemId: selectedItem.id,
      date: selectedSchedule.date,
      startingTime: Number(selectedSchedule.startingTime),
      outTime: Number(selectedSchedule.outTime),
      purpose: purpose || `Reservation for ${selectedItem.label}`,
      type: "Reserved",
    }

    const response = await fetch(`http://localhost:8080/api/item-reservation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
       credentials: "include",
      body: JSON.stringify(reservationData)
    })

    const result = await response.json()
    setServerResponse(result.message)

    if (!response.ok) {
      console.error("Reservation failed:", result.message)
      alert("Reservation failed: " + result.message)
      return
    }

    setSelectedSchedule({
      startingTime: null,
      outTime: null,
      data: null
    })
    
    toggleConfirmation()     
  } catch (error) {
    console.error("Error submitting reservation:", error)
    alert("An unexpected error occurred.")
  } finally {
    setIsSubmitting(false)
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false)
    }, 3000)
  }
}

  return (
    <ItemDetailContext.Provider value={{
      selectedSchedule,
      handleSelectedSchedule,
      selectedItem,
      showConfirmation,
      toggleConfirmation,
      handleSubmitReservation,
      purpose,         
      setPurpose,     
      errorMessage,
      successMessage,
      isSubmitting,
      showNotification,
      serverResponse,
      recievedScheduleData
    }}>
      {children}
    </ItemDetailContext.Provider>
  )
}

export default ItemDetailProvider
