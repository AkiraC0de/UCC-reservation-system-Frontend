import MainLayout from "./layouts/MainLayout"
import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Room from "./pages/Room"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/room" element={<Room/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
