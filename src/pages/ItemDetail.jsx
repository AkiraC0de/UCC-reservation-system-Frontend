import LeftSection from "../components/ItemDetail/LeftSection"
import RightSection from "../components/ItemDetail/RightSection"
import ItemDetailProvider from "../provider/ItemDetailProvider"
import Layout from "../components/ItemDetail/Layout"

const ItemDetail = () => {
  return (
    <ItemDetailProvider>
      <Layout>
         <LeftSection/>
          <RightSection/>
      </Layout>
    </ItemDetailProvider>
  )
}
export default ItemDetail