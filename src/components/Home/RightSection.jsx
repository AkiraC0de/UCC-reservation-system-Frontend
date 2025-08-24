import HomeCard from "./HomeCard"
import HomeCardContainer from "./HomeCardContainer"
import ClassroomIcon from "../Shared/ClassroomIcon"
import ProjectorIcon from "../Shared/ProjectorIcon"

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
        {children}
    </section>
  )
}
export default RightSection