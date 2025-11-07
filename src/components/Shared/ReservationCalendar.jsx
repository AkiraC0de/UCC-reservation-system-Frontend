
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, User, MapPin } from 'lucide-react';

const ReservationCalendar = ({ 
  reservations = [],
  onDateClick = () => {},
  onReservationClick = () => {}
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Helper function to get days in month
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek, year, month };
  };

  // Format date to YYYY-MM-DD for comparison
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Get reservations for a specific date
  const getReservationsForDate = (dateStr) => {
    return reservations.filter(res => res.date === dateStr);
  };

  // Check if date is today
  const isToday = (date) => {
    const today = new Date();
    return formatDate(date) === formatDate(today);
  };

  // Check if date is selected
  const isSelected = (date) => {
    return selectedDate && formatDate(date) === formatDate(selectedDate);
  };

  // Navigate months
  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  // Handle date click
  const handleDateClick = (day) => {
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(clickedDate);
    const dateStr = formatDate(clickedDate);
    onDateClick(clickedDate, getReservationsForDate(dateStr));
  };

  // Get status color and count
  const getDateStatus = (dateStr) => {
    const dayReservations = getReservationsForDate(dateStr);
    if (dayReservations.length === 0) return null;

    const statusCounts = {
      accepted: 0,
      pending: 0,
      rejected: 0
    };

    dayReservations.forEach(res => {
      statusCounts[res.status]++;
    });

    // Priority: pending > accepted > rejected
    if (statusCounts.pending > 0) {
      return { color: 'yellow', count: dayReservations.length, status: 'pending' };
    } else if (statusCounts.accepted > 0) {
      return { color: 'green', count: dayReservations.length, status: 'accepted' };
    } else {
      return { color: 'red', count: dayReservations.length, status: 'rejected' };
    }
  };

  const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentDate);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Get selected date reservations
  const selectedDateReservations = selectedDate ? getReservationsForDate(formatDate(selectedDate)) : [];

  return (
    <div className="max-w-200 mx-auto p-2 sm:p-3">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* CALENDAR SECTION */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
            
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                <Calendar className="text-green-600" size={24} />
                {monthNames[month]} {year}
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={previousMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Previous month"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Next month"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Accepted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-600">Pending</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-600">Rejected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">Today</span>
              </div>
            </div>

            {/* Day Names */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">
              {dayNames.map(day => (
                <div key={day} className="text-center text-xs sm:text-sm font-semibold text-gray-600 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2">
              {/* Empty cells for days before month starts */}
              {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                <div key={`empty-${index}`} className="aspect-square"></div>
              ))}

              {/* Days of the month */}
              {Array.from({ length: daysInMonth }).map((_, index) => {
                const day = index + 1;
                const date = new Date(year, month, day);
                const dateStr = formatDate(date);
                const status = getDateStatus(dateStr);
                const today = isToday(date);
                const selected = isSelected(date);

                return (
                  <button
                    key={day}
                    onClick={() => handleDateClick(day)}
                    className={`aspect-square p-1 sm:p-2 rounded-lg transition-all relative flex flex-col items-center justify-center ${
                      selected
                        ? 'bg-green-600 text-white shadow-lg scale-105'
                        : today
                        ? 'bg-blue-100 border-2 border-blue-500 text-blue-900 font-bold'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <span className={`text-xs sm:text-sm ${selected ? 'font-bold' : today ? 'font-bold' : ''}`}>
                      {day}
                    </span>
                    
                    {/* Status indicator dot */}
                    {status && !selected && (
                      <div className="absolute bottom-1 flex gap-0.5">
                        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                          status.color === 'green' ? 'bg-green-500' :
                          status.color === 'yellow' ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}></div>
                      </div>
                    )}

                    {/* Reservation count badge */}
                    {status && status.count > 1 && (
                      <div className={`absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                        selected ? 'bg-white text-green-600' :
                        status.color === 'green' ? 'bg-green-600' :
                        status.color === 'yellow' ? 'bg-yellow-600' :
                        'bg-red-600'
                      }`}>
                        {status.count}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* RESERVATIONS SIDEBAR */}
        <div className="lg:col-span-1 min-w-xs">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 sticky top-6">
            <h3 className="text-lg font-semibold text-black-text mb-4">
              {selectedDate ? (
                <>
                  Reservations
                  <span className="block text-sm text-gray-600 font-normal mt-1">
                    {formatDate(selectedDate)}
                  </span>
                </>
              ) : (
                'Select a date'
              )}
            </h3>

            {selectedDate && selectedDateReservations.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <Calendar className="mx-auto mb-2 text-gray-400" size={40} />
                <p className="text-sm">No reservations for this day</p>
              </div>
            )}

            {selectedDate && selectedDateReservations.length > 0 && (
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {selectedDateReservations.map((reservation, index) => (
                  <div
                    key={index}
                    onClick={() => onReservationClick(reservation)}
                    className="p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors cursor-pointer border-l-4 border-green-600"
                  >
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        reservation.status === 'accepted' ? 'bg-green-100 text-green-700' :
                        reservation.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        reservation.type === 'Room' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {reservation.type}
                      </span>
                    </div>

                    {/* Room/Item Name */}
                    <p className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <MapPin size={14} />
                      {reservation.room || reservation.item || 'N/A'}
                    </p>

                    {/* Purpose */}
                    <p className="text-sm text-gray-700 mb-2">{reservation.purpose}</p>

                    {/* Time */}
                    <p className="text-xs text-gray-600 flex items-center gap-1 mb-1">
                      <Clock size={12} />
                      {reservation.startingTime}:00 - {reservation.outTime}:00
                    </p>

                    {/* Reserved By */}
                    <p className="text-xs text-gray-600 flex items-center gap-1">
                      <User size={12} />
                      {reservation.reservedBy}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReservationCalendar