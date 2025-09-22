import useRoom from "../../hooks/useRoom"


const NorthCongressModelV2 = () => {
  return (
    <div className=" w-full relative flex justify-center items-start">
      <BGoverlay/>
      <div className="z-30 relative">
        <ModelHoverOverlay/>
        <img
          className="w-140  anim-fade-in-top duration-1000"
          src="/campus/north_congress/northCampusModel3d.webp" 
          alt="north-congress-img" 
        />
      </div>
    </div>
  )
}

const ModelHoverOverlay = () => {
  const {handleReservation} = useRoom()

  return(
    <>
      <svg
        className="absolute top-0 left-0 right-0 bottom-0 h-full w-full"
        viewBox="0 0 1 1"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          onClick={() => handleReservation("building","Left Wing")}
          points="
            0.365 0.121
            0.365 0.428
            0.575 0.579
            0.645 0.534
            0.644 0.423
            0.577 0.375
            0.577 0.269
            0.690 0.198
            0.470 0.047
          "
          fill="transparent"
          stroke="black"
          strokeWidth="0.002"
          className="hover:stroke-black/40 hover:fill-black/40 cursor-pointer"
        />
        <polygon
          onClick={() => handleReservation("building","Right Wing")}
          points="
            0.647 0.310, 
            0.645 0.619, 
            0.853 0.763, 
            0.967 0.688, 
            0.968 0.383, 
            0.749 0.245, 
            0.647 0.312
          "
          fill="transparent"
          stroke="black"
          strokeWidth="0.002"
          className="hover:stroke-black/40 hover:fill-black/40 cursor-pointer"
        />
      </svg>
    </> 
  )
}

const BGoverlay = () => {
  return(
    <>
      <div className="cp-1 absolute top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-120 z-20 cube-2 bg-green-gradient-2"></div>
      <div className="absolute top-[32%] left-[14%]  w-70 h-9 z-20 cube-2 bg-green-gradient-2"></div>
      <div className="absolute top-[12%] left-[22%]  w-50 h-5 z-20 cube-2 bg-green-gradient-2"></div>
      <div className="absolute top-[4%] left-[70%]  w-180 h-22 z-19 cube-2 bg-green-gradient-2"></div>
      <div className="absolute top-[12%] left-[60%]  w-100 h-10 -z-10 cube-2 bg-green-gradient-2"></div>
      <div className="absolute top-[80%] left-[62%]  w-100 h-8 -z-10 cube-2 bg-green-gradient-2"></div>
      <div className="absolute top-[20%] left-[42%]  w-80 h-4 -z-10 cube-2 bg-green-gradient-2"></div>
    </>
  )
}


export default NorthCongressModelV2