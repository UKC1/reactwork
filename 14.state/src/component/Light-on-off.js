import { useState } from "react";

const Light_on_off =() => {
  const [light, setLight] = useState(true);
  return(
    <>
      { light ? <h1 style={{color:"hotpink"}}>전구ON</h1> : <h1 style={{color:"gray"}}>전구OFF</h1> }
      {/* { light ? <button>끄기</button> : <button>켜기</button>} */}
      <button onClick={()=>{setLight(!light)}} >
        { light ? "끄기" : "켜기"}
      </button>
    </>
  )
}
export default Light_on_off;