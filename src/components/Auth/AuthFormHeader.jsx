const AuthFormHeader = () => {
  return (
    <div className="flex flex-col items-center gap-6 pt-5">
      <div className="flex justify-center gap-2 items-center ">
        <img className="w-14" src="/logo/logo_low.webp" alt="logo" />
        <div>
          <h1 className="font-semibold text-md text-black-text">University of Caloocan City</h1>
          <h2 className="font-medium text-green-500 text-sm">• MIS Reservation System</h2>
        </div>
      </div>
      <h1 className="text-sm font-semibold text-black-text">Log In to Continue</h1>
    </div>
  )
}
export default AuthFormHeader