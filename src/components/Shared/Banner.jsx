const Banner = ({label, background = "#fe0808", fontColor = "white", fontSize = "12px"}) => {
    const splitedLabel = label.split("")
  return (
    <ul 
        className="flex flex-col items-center p-1 shadow-md absolute top-0 right-3"
        style={{
            background: background
        }}>
        {splitedLabel.map((label,index) => (
            <li 
                key={index}
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