import {useState} from 'react'
import NotificationCard from './MyReservationsCard'
import { Calendar } from 'lucide-react';

export default function Notification() {
  
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleShowNotification=()=>{
    setShowNotifications(prev=> !prev);
  }

  const notifClickedStyles = `border-2 mx-2 text-green-700 text-xs font-semibold rounded-2xl px-3 py-1.5 cursor-pointer bg-green-700/40 transition-all duration-300`

  const notifButtonStyles = `border-2 mx-2 text-green-700 text-xs font-semibold rounded-2xl px-3 py-1.5 cursor-pointer hover:bg-green-700/20 transition-all duration-300`


  return (
    <>
        <div className='relative '>
              <button 
              onClick={toggleShowNotification}
              className={showNotifications ? `${notifClickedStyles} `: `${notifButtonStyles}`}>
                  <Calendar size={16} />
              </button>

              {showNotifications &&
              <NotificationCard
              className="absolute pop-animation left-1/2 -translate-x-3/4 md:-left-24 md:-translate-x-1/4 mt-2 border border-green-800/50 h-[88vh] w-[20rem] md:w-[18rem] overflow-y-auto rounded-xl shadow-lg bg-white p-2"
            />

              }

        </div>
    </>

  )
}
