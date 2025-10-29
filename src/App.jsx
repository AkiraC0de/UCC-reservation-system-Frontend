import MainLayout from "./layouts/MainLayout"
import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Room from "./pages/Room"
import ProtectedPage from "./layouts/ProtectedPage"
import Items from "./pages/Items"
import About from "./pages/About"
import RoomProvider from "./provider/RoomProvider"
import ItemDetail from "./pages/ItemDetail"
import AdminLayout from "./layouts/AdminLayout"
import Dashboard from "./pages/Admin/Dashboard"
import AdminProvider from "./provider/AdminProvider"
import Reservations from "./pages/Admin/Reservations"
import ItemReservation from "./pages/Admin/ItemReservation"

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectedPage>
          <MainLayout/>
        </ProtectedPage>
        }>
        <Route index element={<Home/> }></Route>
        <Route path="/room" element={
          <RoomProvider>
            <Room/>
          </RoomProvider>
        }/>
        <Route path="/items" element={<Items/>}></Route>
        <Route path="/items/:type/:id" element={<ItemDetail/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Route>

      <Route path="/admin" element={
        <ProtectedPage>
          <AdminProvider>
            <AdminLayout/>
          </AdminProvider>
        </ProtectedPage>
      }>
        <Route index element={<Dashboard/>}/>
        <Route path="/admin/registrations" element={<Dashboard/>}/>
        <Route path="/admin/reservations/room" element={<Reservations/>}/>
        <Route path="/admin/reservations/item" element={<ItemReservation/>}/>
      </Route> 
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  )
}

export default App
