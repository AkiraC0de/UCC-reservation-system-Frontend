import Cloud from "../Shared/Cloud"

const HomeBgOverlay = () => {
  return (
    <div className="overflow-hidden bg-gray-200/50 w-3/5 aspect-square rounded-full absolute -z-10 -top-[40%] -right-[10%]">
          <Cloud width="19%" color="#84d1fa" bottom="51%" anim="anim-cloud-1" index="4"/>
          <Cloud width="18%" color="#5eb0db" bottom="53%" anim="anim-cloud-3" index="3"/>
          <Cloud width="16%" color="#72bae0" bottom="52%" anim="anim-cloud-2" index="2"/>
          <Cloud width="14%" color="#61a8cf" bottom="54%" anim="anim-cloud-1" index="1"/>
          <Cloud width="12%" color="#569abf" bottom="53%" anim="anim-cloud-3" index="1"/>

          <Cloud width="19%" color="#84d1fa" bottom="52%" anim="anim-cloud-3" index="4"/>
          <Cloud width="18%" color="#5eb0db" bottom="54%" anim="anim-cloud-1" index="3"/>
          <Cloud width="16%" color="#72bae0" bottom="51%" anim="anim-cloud-3" index="2"/>
          <Cloud width="14%" color="#61a8cf" bottom="52%" anim="anim-cloud-3" index="1"/>
          <Cloud width="12%" color="#569abf" bottom="54%" anim="anim-cloud-2" index="1"/>
      <svg 
        className="absolute z-10 bottom-[24%] translate-y-1/2 left-1/2 -translate-x-1/2 aspect-square w-full"
        fill="#ffffff" 
        version="1.1" 
        id="Capa_1" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        width="600px" 
        height="600px" 
        viewBox="0 0 962 962" 
        xmlSpace="preserve">
        <g>
          <g>
            <path d="M959.1,404.35l-37.6-35.8c-3.9-3.9-10.3-3.9-14.2,0l-37.6,35.8c-1.9,1.899-2.9,4.399-2.9,7.1v178.5c0,5.5-4.5,10-10,10
              h-55.2c-5.5,0-10,4.5-10,10v55.701c0,5.5-4.5,10-10,10h-5.1c-5.5,0-10-4.5-10-10v-432.4c0-5.5-4.5-10-10-10h-13.3
              c-5.5,0-10-4.5-10-10v-27c0-5.5-4.5-10-10-10H669c-5.5,0-10,4.5-10,10v27c0,5.5-4.5,10-10,10h-12.8c-5.5,0-10,4.5-10,10
              L626.1,579.949c0,9.5-16.899,13.602-22.8,6.201l-43.5-54.5c-4-5-11.7-5-15.7,0l-61.1,77c-1.4,1.799-2.2,4-2.2,6.199v59.1
              c0,8.9-10.8,13.4-17.1,7.102l-21.4-21.602c-3.899-3.898-10.3-3.898-14.2,0l-25.399,25.5c-6.3,6.301-17.101,1.9-17.101-7.1v-491.6
              c0-5.5-4.5-10-10-10H320.4c-5.5,0-10,4.5-10,10v479.301c0,5.5-4.5,10-10,10H295.3c-5.5,0-10-4.5-10-10V484.449c0-5.5-4.5-10-10-10
              h-11.2c-5.5,0-10-4.5-10-10V376.55c0-5.5-4.5-10-10-10h-9.9c-5.5,0-10-4.5-10-10v-98.4c0-5.5-4.5-10-10-10h-5.7
              c-5.5,0-10,4.5-10,10v98.4c0,5.5-4.5,10-10,10h-9.9c-5.5,0-10,4.5-10,10v87.899c0,5.5-7.1,9.9-12.7,9.9h-7.6
              c-6.1,0-11,4.899-11,11V651.15c0,9.5-9.3,13.699-15.2,6.299L79.7,603.65c-4.7-5.9-12.5-5.9-17.2,0l-60.3,76
              c-1.4,1.799-2.2,4-2.2,6.199v89.9c0,5.5,4.5,10,10,10h471h471c5.5,0,10-4.5,10-10v-364.4C962,408.75,961,406.25,959.1,404.35z"/>
          </g>
        </g>
      </svg>
    </div>
  )
}
export default HomeBgOverlay