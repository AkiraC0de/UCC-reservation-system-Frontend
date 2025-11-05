const UserSummayCard = ({userCount = 0, label = "", Icon, iconColor = "#fff", iconBackground = "white"}) => {
  return (
    <div>
      <div 
        className="bg-white rounded-lg flex items-center gap-4 shadow-md py-2 px-4 border-l-4"
        style={{borderColor: iconColor}}
      >
        <div className="flex items-center gap-3 mb-2">
          <div 
            className="p-2 rounded-lg"
            style={{background: iconBackground}}
          >
            <Icon 
              size={20} 
              color={iconColor}
            />
          </div>
        </div>
        <div>
          <p className="text-lg sm:text-xl font-bold text-black-text">{userCount}</p>
          <p className="text-xs text-gray-text">{label}</p>
        </div>
      </div>
    </div>
  )
}
export default UserSummayCard