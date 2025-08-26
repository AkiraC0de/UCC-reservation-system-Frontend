const NorthCongressModel = ({style}) => {
  return (
    <div className={style}>
      <img 
        className="w-full drop-shadow-lg"
        src="/campus/north_congress/uccCongressModel.png" 
        alt="ucc_nort_congress_model" 
      />
      
      <svg className="fill-[#008236] absolute  w-full h-full top-0">
        <clipPath id="clipPath1" clipPathUnits="objectBoundingBox">
          <polygon points="0.336 0.762, 0.337 0.304, 0.310 0.290, 0.089 0.387, 0.092 0.398, 0.111 0.405, 0.114 0.764, 0.336 0.764"></polygon>
        </clipPath>
        <clipPath id="clipPath2" clipPathUnits="objectBoundingBox">
          <polygon points="0.380 0.258, 0.780 0.09, 0.905 0.141, 0.961 0.267, 0.940 0.277, 0.940 0.760, 0.411 0.766, 0.410 0.290, 0.377 0.258"></polygon>
        </clipPath>
        <rect width="100%" height="100%" className="opacity-0 hover:opacity-50 z-20" clipPath="url(#clipPath2)" />
        <rect width="100%" height="100%" className="opacity-0 hover:opacity-50 z-20" clipPath="url(#clipPath1)" />
      </svg>
    </div>
  )
}
export default NorthCongressModel