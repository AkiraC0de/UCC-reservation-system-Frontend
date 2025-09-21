const RectCloudTxt = ({text, className, visible}) => {
  return (
    <div className={`${className} ${visible ? "bg-red-500 rounded-lg z-90 anim-fade-in-top" : "invisible" }`}>
      <div className="z-20">
        <p className="font-semibold text-white px-3 py-1 z-20">
          {text}
        </p>
      </div>
      <div className="w-4 h-4 absolute right-1/2 translate-x-1/2 -bottom-2 rotate-45 bg-red-500  -z-1"></div>
    </div>
  )
}
export default RectCloudTxt