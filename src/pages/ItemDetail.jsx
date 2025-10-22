import LeftSection from "../components/ItemDetail/LeftSection"
import RightSection from "../components/ItemDetail/RightSection"

const ItemDetail = () => {
  return (
    <div className="grid grid-cols-[400px_1fr] px-10 py-5 gap-10">
        <LeftSection/>
        <RightSection/>
    </div>
  )
}
export default ItemDetail