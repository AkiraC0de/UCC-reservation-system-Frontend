const Cloud = ({ bottom = "50%", anim = "anim-cloud-1", width, color, index }) => {
  return (
    <div>
      <svg
        className={`absolute translate-y-1/2 ${anim} opacity-90`}
        style={{
          bottom,
          width,
          zIndex: index,
          left: "-20%",
        }}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.5 18H19C20.7 17.8 22 16.3 22 14.5C22 12.7 20.7 11.2 18.9 11C18.5 8.2 16 6 13 6C10.7 6 8.7 7.3 7.7 9.2C7.3 9.1 6.9 9 6.5 9C4 9 2 11 2 13.5C2 16 4 18 6.5 18Z" />
      </svg>
    </div>
  )
}

export default Cloud
