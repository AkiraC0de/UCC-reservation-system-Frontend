import NorthCongressModel from "./NorthCongressModel"

const ModelPlatform = () => {
  return (
    <div className=" flex justify-center flex-col items-center">
        <div className="flex justify-end">
          <NorthCongressModel style="w-[68%] relative"/> 
          
        </div>
        <div className="bg-green-500 w-screen h-33 absolute bottom-0 right-1/2 translate-x-1/2"></div>
    </div>
  )
}
export default ModelPlatform