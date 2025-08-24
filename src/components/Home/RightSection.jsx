import HomeCard from "./HomeCard"

const RightSection = ({children}) => {
  return (
    <section className="flex px-6">
      <HomeCard/>
        {children}
    </section>
  )
}
export default RightSection