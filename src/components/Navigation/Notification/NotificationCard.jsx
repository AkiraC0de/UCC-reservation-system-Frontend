import React from 'react'
import { notifications, STATUS } from '../../../configs/Nav.config'

export default function NotificationCard({className}) {

  return (
  <div className={`p-4 bg-white rounded-xl shadow-lg border w-[17rem] ${className}`}>
      <p className='text-xl font-semibold mb-2'>Notifications</p>

      <div className='flex flex-col'>
        {notifications.map((notif) => {
          const stats = notif.status.toUpperCase();
          const s = STATUS[stats];
          console.log(s);

          return (
            <div
              key={notif.id}
              className='rounded-xl flex gap-3 p-2 hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-all'
            >
              <div className='text-md mt-1'>{s.icon}</div>
              <div className='flex-1 text-sm'>
              <p>
                  {notif.status === 'Accepted' && (
                    <>Your reservation for <b>{notif.item}</b> has been approved.</>
                  )}
                  {notif.status === 'Rejected' && (
                    <>Your reservation request for <b>{notif.item}</b> has been rejected.</>
                  )}
                  {notif.status === 'Pending' && (
                    <>Your reservation for <b>{notif.item}</b> is awaiting approval.</>
                  )}
                </p>
                <p className='text-xs text-gray-500 mt-0.5'>📅 {notif.date} • {notif.time} </p>
                <p className='text-xs text-gray-400 mt-1'>{notif.timeAgo}</p>

                <span
                  className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full border ${s.color}`}
                >
                  {s.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
