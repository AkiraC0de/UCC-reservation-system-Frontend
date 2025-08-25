const Banner = ({label, background = "#fe0808", fontColor = "white", fontSize = "12px"}) => {
    const splitedLabel = label.split("")
    console.log(splitedLabel)
  return (
    <ul 
        className="flex flex-col items-center p-1 shadow-2xl z-10 shadow-amber-600 absolute top-0 right-3"
        style={{
            background: background
        }}>
        {splitedLabel.map(label => (
            <li 
                className="font-bold"
                style={{
                    color: fontColor,
                    fontSize: fontSize
                }}>
                {label}
            </li>
        ))}
    </ul>
  )
}
export default Banner