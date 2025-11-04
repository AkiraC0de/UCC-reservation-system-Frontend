const Banner = () => {
    return (
      <div className="w-full flex flex-col-reverse lg:flex-row bg-white rounded-lg overflow-hidden shadow-md">
        <div className="flex-1 flex flex-col p-6 sm:p-8 lg:p-10 space-y45 h-full text-[#303135] relative ">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-green-700 leading-tight">About the MIS Room and Equipment Reservation System</h1>
          <h2 className="text-sm sm:text-base lg:text-lg font-medium">Get to know MRERS — its vision, mission, and the developers behind this innovative project.</h2>
          <svg 
            className="-scale-x-[1] absolute hidden md:block top-1/3 right-4"
            xmlns="http://www.w3.org/2000/svg" 
            width="58" 
            height="58" 
            viewBox="0 0 17 16">
            <path fill="#008236" fillRule="evenodd" d="m1.307 5.988l5.309-4.645c.411-.41.891-.479 1.302-.068v3.132l.229-.001c5.016 0 8.738 3.563 8.738 8.41c0 1.688-.774 1.073-1.097.484c-1.522-2.78-4.197-4.677-7.681-4.677l-.19.001v3.065c-.411.41-.941.361-1.302.068L1.306 7.474a1.052 1.052 0 0 1 .001-1.486z"/>
          </svg>
        </div>
        <div className="flex-1 flex justify-center items-center p-4 ">
          <img src="logo/banner.webp" className="w-1/2 sm:w-1/3 lg:w-2/5 object-contain" alt="banner" />
        </div>
      </div>
    )
  }
  export default Banner