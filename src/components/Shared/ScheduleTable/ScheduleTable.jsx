import TableContent from "./TableContent";
import TableHeader from "./TableHeader"
import TableWrapper from "./TableWrapper"
import { createContext, useContext } from "react";

const ScheduleContext = createContext();

const ScheduleTable = ({scheduleData, handleScheduleData}) => {
  return (
    <ScheduleContext.Provider value={{scheduleData, handleScheduleData}}>
      <TableWrapper>
          <TableHeader/>
          <TableContent/>
      </TableWrapper>
    </ScheduleContext.Provider>
  )
}

export const useScheduleContext = () => useContext(ScheduleContext)

export default ScheduleTable