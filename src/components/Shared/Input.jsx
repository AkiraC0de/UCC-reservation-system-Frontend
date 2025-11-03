import { useState } from "react";

const Input = ({ label, type = "text", confirmPassword, placeholder, className = "", value, onChange = () => {}, error }) => {
  const [show, setShow] = useState(false)
  const isPassword = type === "password"
  const inputType = isPassword && show ? "text" : type

  const parentClass = `${className} ${error && "anim-shake" } relative`
  const inputClass = `${error && "border-1 border-red-500" } focus:outline-green-400 peer border p-2 py-3 text-xs rounded-sm w-full `
  const labelClass = `${error ? "text-red-500" : "text-black-text"} peer-focus:text-green-400 absolute -top-2 left-2 text-xs font-medium bg-white px-2`

  const id = label ? label.replace(/\s+/g, "-").toLowerCase() : undefined

  return (
    <div className={parentClass}>
      <input
        id={id}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClass}
        type={inputType}
        onPaste={(e) => e.preventDefault()}
      />
      <label
        htmlFor={id}
        className={labelClass}
      >
        {label}
      </label>

      {isPassword && (
        <button
          type="button"
          aria-label={show ? "Hide password" : "Show password"}
          className="peer-focus:stroke-green-400 stroke-[#7f7f7f] w-6 absolute right-3 bottom-1/2 translate-y-1/2 cursor-pointer"
          onClick={() => setShow(prev => !prev)}
        >
          {!show ? <EyeIcon /> : <EyeOffIcon />}
        </button>
      )}
    </div>
  )
}

const EyeIcon = () => (
  <svg width="100%" viewBox="0 0 24 24" fill="none">
    <path
      d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="12"
      r="3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EyeOffIcon = () => (
  <svg width="100%" viewBox="0 0 24 24" fill="none">
    <path
      d="M2 2L22 22"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Input;
