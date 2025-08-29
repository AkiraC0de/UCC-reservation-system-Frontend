const PatternedDot = ({style, color1 = "white", color2 = "white", color3 = "white", color4 = "white"}) => {
  return (
    <svg 
        className={style}
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 2560 1600" enable-background="new 0 0 2560 1600" 
        xmlSpace="preserve">
    <pattern  width="300" height="300" patternUnits="userSpaceOnUse" id="Polka_Dot_Pattern" viewBox="0 -300 300 300" overflow="visible">
        <g>
            <polygon fill="none" points="0,-300 300,-300 300,0 0,0 		"/>
            <path fill={color1} d="M100-225c0,13.8071-11.1929,25-25,25s-25-11.1929-25-25s11.1929-25,25-25S100-238.8071,100-225z"/>
            <path fill={color2} d="M100-75c0,13.8071-11.1929,25-25,25S50-61.1929,50-75s11.1929-25,25-25S100-88.8071,100-75z"/>
            <path fill={color3} d="M250-225c0,13.8071-11.1929,25-25,25s-25-11.1929-25-25s11.1929-25,25-25S250-238.8071,250-225z"/>
            <path fill={color4} d="M250-75c0,13.8071-11.1929,25-25,25s-25-11.1929-25-25s11.1929-25,25-25S250-88.8071,250-75z"/>
        </g>
    </pattern>
    <rect fill="url(#Polka_Dot_Pattern)" width="2560" height="1600"/>
    </svg>

  )
}
export default PatternedDot