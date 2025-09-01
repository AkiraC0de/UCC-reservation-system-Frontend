import NorthCongressModel from "../NorthCongressModel"

const Stage1 = () => {
  return (
    <>
        <h1 className="z-60 absolute top-2 font-bold text-2xl tracking-wider capitalize text-black-text">
        - SELECT A BUILDING -
        </h1>
        <NorthCongressModel 
        style="anim-fade-in-top min-w-100 w-[70%] absolute bottom-1/2 right-1/10 z-20  translate-y-[50%]"
        />
    </>
  )
}
export default Stage1