import ProjectorIcon from "../components/Shared/Icons/ProjectorIcon"

const Items = () => {
  return (
    <div className="px-12 py-6">
      <div className="w-full grid-rows-[auto] bg-white rounded-lg overflow-hidden flex shadow-md">
        <div className="flex-2 flex flex-col p-9 space-y-5 h-full text-[#303135] relative pr-15">
          <h1 className=" text-5xl font-bold text-green-700">Level Up Your Lessons & Presentations!</h1>
          <h2 className="text-lg font-medium">Turn any class engaging, reserve a projector or TV and make your ideas shine.</h2>
          <svg 
            className="-scale-x-[1] absolute top-3/10 -right-10" 
            xmlns="http://www.w3.org/2000/svg" 
            width="58" 
            height="58" 
            viewBox="0 0 17 16">
            <path fill="#008236" fillRule="evenodd" d="m1.307 5.988l5.309-4.645c.411-.41.891-.479 1.302-.068v3.132l.229-.001c5.016 0 8.738 3.563 8.738 8.41c0 1.688-.774 1.073-1.097.484c-1.522-2.78-4.197-4.677-7.681-4.677l-.19.001v3.065c-.411.41-.941.361-1.302.068L1.306 7.474a1.052 1.052 0 0 1 .001-1.486z"/>
          </svg>
        </div>
        <div className="flex-2 flex justify-center p-2">
          <img src="logo/banner.webp" className="w-1/2 object-contain" alt="banner" />
        </div>
      </div>
    </div>
  )
}
export default Items