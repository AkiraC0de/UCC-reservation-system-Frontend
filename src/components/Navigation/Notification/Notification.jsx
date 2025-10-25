import {useState} from 'react'
import NotificationCard from './NotificationCard'

export default function Notification() {
  
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleShowNotification=()=>{
    setShowNotifications(prev=> !prev);
  }

  return (
    <>
        <div className='relative '>
              <button 
              onClick={toggleShowNotification}
              className="border-2 mx-2 text-green-700 text-xs font-semibold rounded-3xl px-3 py-1.5 cursor-pointer hover:bg-gray-200/50 transition-all duration-300">
                  <img
                  src="icons/notifIcon.svg"
                  width={15}
                  />
              </button>

              {showNotifications &&
              <NotificationCard
              className="absolute left-1 -translate-x-1/2 mt-2 border border-green-800/50 h-[88vh] w-[18rem] overflow-y-auto rounded-xl shadow-lg bg-white p-2"
            />

              }

        </div>
    </>

  )
}
