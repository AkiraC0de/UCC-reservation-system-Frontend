const ConnectionIcon = ({className = ""}) => {
  return (
    <svg
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      viewBox="0 0 512 512"  
    >
      <g>
        <path d="M101.723,233.634H0v44.741h101.723c9.87,36.784,43.344,63.904,83.248,63.904h62.31V169.722h-62.31
          C145.066,169.722,111.584,196.842,101.723,233.634z"/>
        <path d="M512,233.634H410.269c-9.862-36.792-43.336-63.912-83.24-63.912H264.72v172.557h62.309
          c39.896,0,73.369-27.12,83.24-63.904H512V233.634z"/>
      </g>
    </svg>
  )
}
export default ConnectionIcon