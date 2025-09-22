import { useEffect, useState } from "react"
import Option from "./Option"

const Select = ({ 
    label, 
    Icon, 
    placeholder,
    options = [],
    unlock = true, 
    handleLock = () => {},
    value, 
    handleValue,
    shrink = false, 
    shrinkHandler, 
    isRequired,
    valueAddress,
    handleRequiredTurnOff = () => {}
    }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    if(!unlock) {
      handleLock()
      return
    }

    if(shrink){
      setIsOpen(true)
      shrinkHandler(false)
      handleRequiredTurnOff()
    } else {
      setIsOpen((prev) => !prev)
      handleRequiredTurnOff()
    }
  }

  useEffect(() => {
    if(shrink) setIsOpen(false)
  },[shrink])

  return (
    <div
      id="select"
      className={`${isRequired ? "border-red-500 anim-shake" : "border-black/40"} border-1 grid transition-all duration-500 gap-1 rounded-lg pt-2 relative overflow-visible`}
    >
      <h3 className={`${isRequired ? "text-red-500" : "text-black/40"} text-xs absolute -top-2.5 left-2.5 px-2 bg-white z-20 font-medium`}>
        {label || "Dropdown"}
      </h3>
      <button
        onClick={handleClick}
        className={`flex items-center ${shrink ? "justify-center" : "justify-between px-1.5"} py-0.5 rounded-2xl  cursor-pointer`}
      >
        {<Icon className={`${isRequired ? "fill-red-600" : "fill-black/40"} w-`}/>}

        {
          shrink || 
          <span className={`${isRequired ? "text-red-500" : "text-black-text"} text-sm ml-2 w-full overflow-ellipsis text-start `}>
            {value || placeholder}
          </span>
        }

        {
          shrink ||
          <svg
            className={`${isOpen ? "-rotate-90" : "rotate-90"} duration-500 transition-all `}
            width="26px"
            height="26px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
              fill="#0F0F0F"
            />
          </svg>
        }
      </button>

      <div className={`relative pl-2 gap-2 overflow-hidden transition-all duration-600 ${isOpen ? "max-h-60" : "max-h-0"} flex flex-col items-start`}>
        {options.map(option => (
          <Option
            key={option.label}
            onClick={() => {
              if(valueAddress){
                handleValue(valueAddress, option.value || option.label)
              }else{
                handleValue(option.value || option.label)
              }
              
              setIsOpen(false)
              handleRequiredTurnOff()
            }}
          >
            {option.label}
          </Option>
        ))}
        <div className="w-0.5 absolute bottom-5 top-0 left-4 bg-gray-300"></div>
      </div>
    </div>
  )
}

export default Select
