import { useMemo, useState, useEffect } from "react"
import { MOCK_DATA_RESERVATION } from "../../../configs/Room.config"
import ScheduledTimeSlot from "./ScheduledTimeSlot"
import useRoom from "../../../hooks/useRoom"
import clsx from "clsx"

const MAX_SELECTION_HOURS = 10; // The hard limit for selection

const ScheduleTableColumnList = () => {
    const { schedule, handleSchedule, selectedTime, handleSelectedTime } = useRoom() 

    // TEMPORARY: Pre-process mock data for quick lookup
    const MOCK_DATA = MOCK_DATA_RESERVATION
    const data = useMemo(() => {
        return MOCK_DATA.reduce((map, item) => {
            // Key format: "rowIndex-colIndex"
            map[`${item.startingTime}-${item.weekDay}`] = item;
            return map;
        }, {})
    }, [MOCK_DATA])

    // --- NEW LOGIC: Determine the maximum selectable rows ---
    const maxSelectableRows = useMemo(() => {
        const { startingTime, outTime } = selectedTime
        const colIndex = schedule.focus

        if (startingTime === null || outTime !== null) {
            return Infinity; // No starting time set, or selection is complete
        }

        let maxLimit = startingTime + MAX_SELECTION_HOURS
        let barrier = maxLimit

        // 1. Check from startingTime + 1 up to the MAX_SELECTION_HOURS limit
        for (let i = startingTime + 1; i <= maxLimit; i++) {
            const matchedData = data[`${i}-${colIndex}`]
            if (matchedData) {
                // Found a reservation! Set the barrier to the cell *before* the reservation.
                barrier = i
                break
            }
        }
        
        // The maximum selectable rowIndex is now the barrier
        return barrier;
    }, [selectedTime, schedule.focus, data])


    // Updated handleCellClick function
    const handleCellClick = (colIndex, rowIndex) => {
        if(colIndex != schedule.focus){
            handleSchedule(prev => ({...prev, focus: colIndex}))
            handleSelectedTime({startingTime: null, outTime: null})
            return
        }
        

        // Apply new restriction based on calculated limit
        if (selectedTime.startingTime !== null && selectedTime.outTime === null) {
            if (rowIndex < selectedTime.startingTime) {
                handleSelectedTime({ startingTime: rowIndex, outTime: null })
                return // Cannot select time before the start time
            }
            if (rowIndex >= maxSelectableRows) {
                return // Cannot select time at or after the barrier (max limit or existing reservation)
            }
        }

        // 1. Set starting time (if neither is set)
        if (selectedTime.startingTime === null && selectedTime.outTime === null) { 
            handleSelectedTime({ startingTime: rowIndex, outTime: null });
        } 
        // 2. Set ending time (if starting is set, but ending isn't)
        else if (selectedTime.startingTime !== null && selectedTime.outTime === null) { 
            handleSelectedTime(prev => ({...prev, outTime: rowIndex}));
        } 
        // 3. Reset and start a new selection
        else {
            // Clear the old range and start a new one
            handleSelectedTime({ startingTime: rowIndex, outTime: null });
        }
    }

    const onCellHover = (rowIndex) => {
        handleSchedule(prev => ({...prev, cellBeingHovered: rowIndex}))
    }

    const onMouseLeave = () => {
        handleSchedule(prev => ({...prev, cellBeingHovered: null}))
    }
    

    const cellClasses = "cursor-pointer border-x border-gray-100 h-8 flex items-center justify-center text-sm flex flex-col relative"

    // # Render 6 Column that has 30 Row (Cell) from top to bottom
    return [...Array(6)].map((_, colIndex) => {
        return <div key={colIndex} className="grid grid-row-15">
            {
                [...Array(30)].map((_, rowIndex) => {
                    const matchedData = data[`${rowIndex}-${colIndex}`]
                    const height = `${matchedData?.hours * 200}%`
                    const isFocusColumn = colIndex === schedule.focus
                    const selectedStartingTime = rowIndex === selectedTime.startingTime && isFocusColumn
                    const selectedOutTime = rowIndex === selectedTime.outTime && isFocusColumn
                    
                    // NEW: Logic for visual indication of the selectable range and barrier
                    const isSelectableRange = isFocusColumn && 
                        selectedTime.startingTime !== null && 
                        selectedTime.outTime === null && 
                        rowIndex > selectedTime.startingTime && 
                        rowIndex < maxSelectableRows;

                    const isOverLimit = isFocusColumn && 
                        selectedTime.startingTime !== null && 
                        selectedTime.outTime === null &&
                        rowIndex >= maxSelectableRows;

                    const cellVariantClasses = clsx({
                        "bg-gray-100 hover:bg-gray-200": isFocusColumn && !matchedData && !isSelectableRange,
                        "bg-blue-500 text-white": selectedStartingTime || selectedOutTime, 
                        "hover:bg-blue-400": selectedOutTime,
                        "bg-blue-200/50 hover:bg-blue-300/70": isSelectableRange,
                        "bg-red-100 cursor-not-allowed": isOverLimit && !matchedData,
                        "shimmer": isSelectableRange,
                        "hover:bg-gray-100": !isFocusColumn && !matchedData,
                    })

                    return(
                        <div 
                            key={rowIndex}
                            onMouseEnter={() => onCellHover(rowIndex)}
                            onMouseLeave={onMouseLeave}
                            onClick={!matchedData ? () => handleCellClick(colIndex, rowIndex) : () => {}}
                            className={`${cellClasses} ${cellVariantClasses}`}
                        >
                            {
                                matchedData &&
                                <ScheduledTimeSlot data={matchedData} height={height}/>
                            }
                            {/* ... (Starting Time / Out Time labels remain the same) ... */}
                            {
                                selectedStartingTime &&
                                <div className="absolute left-0 top-1 bg-blue-500 h-0.5 z-60 w-[120%]">
                                    <h1 className="absolute -right-5 translate-y-1/2 bottom-1/2 text-[10px] font-medium bg-blue-500 text-white rounded-2xl px-2">Starting Time</h1>
                                </div>
                            }
                            {
                                selectedOutTime &&
                                <div className="absolute left-0 bottom-1 bg-blue-600 h-0.5 z-60 w-[120%]">
                                    <h1 className="absolute -right-5 translate-y-1/2 bottom-1/2 text-[10px] font-medium bg-blue-500 text-white rounded-2xl px-2">Out Time</h1>
                                </div>
                            }
                        </div>
                    )
                })
            }
        </div>
    })
}
export default ScheduleTableColumnList