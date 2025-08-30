import NorthCongressModel from "./NorthCongressModel"

const ModelPlatform = () => {
  return (
    <div className=" flex justify-center flex-col items-center relative">
        <h1 className="z-60 absolute top-2 font-bold text-2xl tracking-wider capitalize text-black-text">- SELECT A BUILDING -</h1>
        <NorthCongressModel style="min-w-100 w-164 absolute bottom-[0] right-1/10 z-20 -translate-y-[20%]"/> 
    </div>
  )
}
export default ModelPlatform