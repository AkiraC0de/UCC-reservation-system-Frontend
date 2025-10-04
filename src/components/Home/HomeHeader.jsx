import HomeButtons from "./HomeButtons"

const HomeHeader = () => {
  return (
    <div className="gap-5 flex flex-col max-w-145">
        <h2 className="text-black-text font-medium text-sm">University Reservation System by Avengers</h2>
        <div className="relative">
          <h1 className="font-bold text-5xl text-black-text">
            Quick & Easy Reservation for Students and Faculty!
          </h1>
          <svg 
            className="-scale-x-[1] absolute top-0 right-0" 
            xmlns="http://www.w3.org/2000/svg" 
            width="58" 
            height="58" 
            viewBox="0 0 17 16">
              <path fill="#008236" fillRule="evenodd" d="m1.307 5.988l5.309-4.645c.411-.41.891-.479 1.302-.068v3.132l.229-.001c5.016 0 8.738 3.563 8.738 8.41c0 1.688-.774 1.073-1.097.484c-1.522-2.78-4.197-4.677-7.681-4.677l-.19.001v3.065c-.411.41-.941.361-1.302.068L1.306 7.474a1.052 1.052 0 0 1 .001-1.486z"/>
            </svg>
        </div>
        <h2 className="text-black-text font-medium text-sm">Reserve your Space, Simplify Your Schedule! Streamlining reservations for students and faculty, anytime, anywhere.</h2>
    </div>
  )
}
export default HomeHeader