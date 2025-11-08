import {useState, useEffect} from 'react'
import {Building2, Package} from "lucide-react"
import Header from '../../components/Admin/History/HEader';

export default function History() {

    const [calendarReservation ,setCalendarReservation] = useState([]);

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

      useEffect(()=>{
        fetchReservationCalendar();
        console.log(calendarReservation)
      }, []);


      const getStatusBadge = (status) => {
        const styles = {
          accepted: 'bg-green-100 text-green-700',
          pending: 'bg-yellow-100 text-yellow-700',
          rejected: 'bg-red-100 text-red-700'
        }
        return (
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        )
      }
  return (
  <>
  <Header/>
    <div className="bg-white rounded-lg shadow-md p-6 anim-fade-pop-top">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-black-text">Past Activity</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Type</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Purpose</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Reserved By</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {calendarReservation.map((reservation) => (
              <tr key={reservation._id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                    reservation.type === 'Room' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'
                  }`}>
                    {reservation.type === 'Room' ? <Building2 size={12} /> : <Package size={12} />}
                    {reservation.type}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-gray-900">{reservation.purpose}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{reservation.reservedBy}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{reservation.date}</td>
                <td className="py-3 px-4">{getStatusBadge(reservation.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}
