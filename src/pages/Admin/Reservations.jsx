import { useState, useMemo, useEffect } from 'react';
import ReservationCard from '../../components/Admin/Reservations/ReservationCard';
import { SyncLoader } from 'react-spinners';

export default function Reservations() {
  const [reservations, setReservations] = useState([])
  const [statusFilter, setStatusFilter] = useState('Pending')
  const [isLoading, setIsLoading] = useState(false)
  const [dateFilter, setDateFilter] = useState('')

  const fetchReservations = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("http://localhost:8080/api/all-reservation/admin", {
        method: "GET",
        credentials: "include", 
      });

      const result = await response.json();
      if (result.success) {
        setReservations(result.data)
      } else {
        throw new Error(result.message || "Failed to fetch reservations");
      }
    } catch (err) {
      console.log("Error fetching reservations:", err.message);
    } finally {
      setIsLoading(false)
    }
  };

  const autoFetchReservations = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/all-reservation/admin", {
        method: "GET",
        credentials: "include", 
      });

      const result = await response.json();
      if (result.success) {
        setReservations(result.data);
      } else {
        throw new Error(result.message || "Failed to fetch reservations");
      }
    } catch (err) {
    }
  };

  useEffect(() => {
    fetchReservations();
  }, [])

  useEffect(() => {
    const autoRefresh = setInterval(() => {
      autoFetchReservations();
    }, 5000);

    return () => clearInterval(autoRefresh);
  }, [])


  // Filter reservations
  const filteredReservations = useMemo(() => {
    return reservations.filter(reservation => {
      
      // Apply status filter
      if (statusFilter !== 'All' && reservation.status.toUpperCase() !== statusFilter.toUpperCase()) return false;
      
      // Apply date filter
      if (dateFilter && reservation.date !== dateFilter) return false;
      
      return true;
    });
  }, [reservations, statusFilter, dateFilter]);

  // Update reservation status
  const updateStatus = async (id, data ,newStatus) => {
    console.log(`http://localhost:8080/api/all-reservation/admin/update/${id}`)
    try {
      // 1. Send update request to backend
      const response = await fetch(`http://localhost:8080/api/all-reservation/admin/update/${id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, status: newStatus }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Failed to update reservation");
      }

      // 2. Optimistically update the local state
      setReservations((prevReservations) =>
        prevReservations.map((reservation) =>
          reservation._id === id
            ? { ...reservation, status: newStatus }
            : reservation
        )
      );

      // 3. Re-fetch all reservations to ensure latest data from backend
      const refetch = await fetch("http://localhost:8080/api/all-reservation/admin", {
        method: "GET",
        credentials: "include",
      });

      const updated = await refetch.json();

      if (updated.success) {
        setReservations(updated.data);
      }

    } catch (error) {
      console.error("Error updating reservation status:", error.message);
      alert("Failed to update reservation status. Please try again.");
    }
  };


  // Count reservations by status
  const statusCounts = useMemo(() => {
    const counts = { pending: 0, accepted: 0, rejected: 0 };
    reservations.forEach(res => {
      if (res.type === "Reserved" && counts.hasOwnProperty(res.status)) {
        counts[res.status]++;
      }
    });
    return counts;
  }, [reservations]);




  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className='sticky top-0 bg-[#f5f5f7]'>
          <h1 className="text-sm font-semibold py-8 ">
            <span className="text-gray-400">Page /</span>
            <span className="text-black-text"> Reservation / Room</span>
          </h1>
          {/* Filter Controls */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6 ">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

              {/* Status Filter Buttons */}
              <div className="flex border-2 rounded-lg border-gray-300 text-sm ">
                <button
                  onClick={() => setStatusFilter('All')}
                  className={`px-5 py-2 font-semibold transition-all cursor-pointer ${
                    statusFilter === 'All'
                      ? 'text-green-700 outline-2 rounded-lg z-50 shadow-md'
                      : ' text-gray-700 hover:bg-gray-200 border-r-2 border-gray-300'
                  }`}
                >
                  All 
                </button>
                <button
                  onClick={() => setStatusFilter('Pending')}
                  className={`px-5 py-2 font-semibold transition-all cursor-pointer ${
                    statusFilter === 'Pending'
                      ? 'text-green-700 outline-2 rounded-lg z-50 shadow-md'
                      : 'text-gray-700 hover:bg-gray-200 border-r-2 border-gray-300'
                  }`}
                >
                  Pending ({statusCounts.pending})
                </button>
                <button
                  onClick={() => setStatusFilter('Accepted')}
                  className={`px-5 py-2 font-semibold transition-all cursor-pointer ${
                    statusFilter === 'Accepted'
                      ? 'text-green-700 outline-2 rounded-lg z-50 shadow-md'
                      : 'text-gray-700 hover:bg-gray-200 border-r-2 border-gray-300'
                  }`}
                >
                  Accepted ({statusCounts.accepted})
                </button>
                <button
                  onClick={() => setStatusFilter('Rejected')}
                  className={`px-5 py-2 font-semibold transition-all cursor-pointer ${
                    statusFilter === 'Rejected'
                      ? 'text-green-700 outline-2 rounded-lg z-50 shadow-md'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Rejected ({statusCounts.rejected})
                </button>
              </div>

              {/* Date Filter */}
              <div className="flex items-center gap-2 text-sm text-black-text">
                <span className="text-sm font-medium text-gray-400">Filter by date : </span>
                <input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                {dateFilter && (
                  <button
                    onClick={() => setDateFilter('')}
                    className="px-3 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>


        {/* Reservations Grid */}
        { isLoading ? 
          <div className='w-full h-100 center'> 
            <SyncLoader color='green' size={10}/> 
          </div> :
          filteredReservations.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <span className="text-6xl mb-4 block">📭</span>
              <p className="text-gray-500 text-lg">No {statusFilter.toLowerCase()} reservations found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-2">
              {filteredReservations.map((reservation, index) => (
                <ReservationCard 
                  key={reservation._id}
                  reservation={reservation} 
                  index={index} 
                  updateStatus={updateStatus}
                />
              ))}
          </div>
        )}
      </main>
    </div>
  );
}