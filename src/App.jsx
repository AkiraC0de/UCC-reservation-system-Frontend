import MainLayout from "./layouts/MainLayout"
import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Room from "./pages/Room"
import Auth from "./pages/Auth"
import ProtectedPage from "./layouts/ProtectedPage"
import Projector from "./pages/Projector"
import About from "./pages/About"
import VisionAndMission from "./components/About/VisionAndMission"
import Purpose from "./components/About/Purpose"
import MeetTheTeam from "./components/About/MeetTheTeam"

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/" element={
        <ProtectedPage>
          <MainLayout/>
        </ProtectedPage>
        }>
        <Route index element={<Home/> }></Route>
        <Route path="/room" element={<Room/>}/>
        <Route path="/projector" element={<Projector/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/mission&vision" element={<VisionAndMission/>}></Route>
        <Route path="/purpose" element={<Purpose/>}></Route>
        <Route path="/meettheteam" element={<MeetTheTeam/>}></Route>
      </Route>
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  )
}

export default App
