const HomeCardContainer = ({children, up}) => {
  return (
    <div className={`flex gap-2 ${up ? "items-start" : "items-end"} justify-center`}>
        {children}
    </div>
  )
}
export default HomeCardContainer