import { useContext } from "react"
import { RoomContext} from "../context/roomContext"

const useRoom = () => {
    const context = useContext(RoomContext)

    return context

}

export default useRoom