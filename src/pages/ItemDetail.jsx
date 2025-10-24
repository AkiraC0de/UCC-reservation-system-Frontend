import LeftSection from "../components/ItemDetail/LeftSection"
import RightSection from "../components/ItemDetail/RightSection"
import { useState } from "react"
import ItemDetailProvider from "../provider/ItemDetailProvider"

const ItemDetail = () => {
  return (
    <ItemDetailProvider>
      <div className="grid grid-cols-[355px_1fr] px-10 py-5 gap-10">
          <LeftSection/>
          <RightSection/>
      </div>
    </ItemDetailProvider>
  )
}
export default ItemDetail