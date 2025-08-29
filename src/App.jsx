import MainLayout from "./layouts/MainLayout"
import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Room from "./pages/Room"
import RoomProvider from "./provider/roomProvider"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/room" element={
            <RoomProvider>
             <Room/>
            </RoomProvider>}
          />
          <Route path="/projector" element={<Room/>}></Route>
          <Route path="/about" element={<Room/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
