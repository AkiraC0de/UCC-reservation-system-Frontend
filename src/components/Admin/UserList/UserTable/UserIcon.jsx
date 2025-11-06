const UserIcon = ({firstname, lastname}) => {
  return (
    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
      <span className="text-green-700 font-semibold text-sm">
        {firstname.charAt(0)}{lastname.charAt(0)} 
      </span>
    </div>
  )
}
export default UserIcon