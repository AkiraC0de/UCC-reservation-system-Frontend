import HomeHeader from './HomeHeader'
import HomeButtons from './HomeButtons'

const LeftSection = () => {
  return (
    <section className="gap-5 my-8 flex flex-col">
        <HomeHeader/>
        <HomeButtons/>
    </section>
  )
}
export default LeftSection