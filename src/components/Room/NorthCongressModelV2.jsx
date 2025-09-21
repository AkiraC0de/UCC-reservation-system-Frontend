const BGoverlay = () => {
  return(
    <>
      <div className="cp-1 absolute top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-120 z-20 cube-2 bg-green-gradient-2"></div>
      <div className="absolute top-[30%] left-[20%]  w-70 h-9 z-20 cube-2 bg-green-gradient-2"></div>
      <div className="absolute top-[10%] left-[26%]  w-50 h-5 z-20 cube-2 bg-green-gradient-2"></div>
      <div className="absolute top-0 left-[70%]  w-180 h-22 z-19 cube-2 bg-green-gradient-2"></div>
      <div className="absolute top-[10%] left-[60%]  w-100 h-10 -z-10 cube-2 bg-green-gradient-2"></div>
      <div className="absolute top-[80%] left-[62%]  w-100 h-8 -z-10 cube-2 bg-green-gradient-2"></div>
    </>
    
  )
}

const NorthCongressModelV2 = () => {
  return (
    <div className=" w-full relative flex justify-center">
      <BGoverlay/>
      <img
        className="w-140 z-30"
        src="/campus/north_congress/northCampusModel3d.png" 
        alt="north-congress-img" 
      />
    </div>
  )
}

export default NorthCongressModelV2