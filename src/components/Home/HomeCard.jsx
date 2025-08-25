const HomeCard = ({children, fill = "white", width = "80px", value = 0, label = "Card Label", background, Icon}) => {
  const cardStyle = {
    background: background
  }
  const svgStyle = {
    width: width,
    fill: fill
  }
  return (
    <div className="flex gap-1 items-start flex-col relative` justify-center relative rounded-2xl h-fit bg-white p-4 shadow-xl"
        style={cardStyle}>
        <div 
          className=""
          style={svgStyle}>
          {<Icon/>}
        </div>
        <div className="flex flex-col items-end">
          <h3 
            className="font-bold text-white text-2xl">
            {value}
          </h3>
          <h2 className="text-xs font-medium text-white">
            {label}
          </h2>
        </div>
        {children}
    </div>
  )
}
export default HomeCard