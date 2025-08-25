import HomeCard from "./HomeCard"
import HomeCardContainer from "./HomeCardContainer"
import ClassroomIcon from "../Shared/Icons/ClassroomIcon"
import ProjectorIcon from "../Shared/Icons/ProjectorIcon"
import TelevisionIcon from "../Shared/Icons/TelevisionIcon"
import Banner from "../Shared/Banner"

const RightSection = ({children}) => {
  return (
    <section className="flex px-6 gap-2 flex-col">
      <HomeCardContainer>
        <HomeCard 
          label="Room Availables"
          value={34}
          width="75px"
          background={"linear-gradient(332deg,rgba(57, 155, 42, 1) 0%, rgba(136, 199, 87, 1) 65%, rgba(237, 221, 83, 1) 100%)"}
          Icon={ClassroomIcon}
        />
        <HomeCard
          label="Free Projectors Today"
          value={4}
          width="92px"
          background="linear-gradient(10deg, rgba(235, 112, 36, 1) 35%,rgba(255, 238, 92, 1) 100%)"
          Icon={ProjectorIcon}
        />
      </HomeCardContainer>
      <HomeCardContainer up>
         <HomeCard
          label="TV Available"
          width="50px"
          value={1}
          background="linear-gradient(182deg, rgba(35, 235, 166, 1) 27%,rgba(49, 182, 67, 1) 100%)"
          fill="white"
          Icon={TelevisionIcon}
         >
          <Banner label="NEW" background="#08adff"/>
          </HomeCard>
      </HomeCardContainer>
    </section>
  )
}
export default RightSection