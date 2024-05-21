import {useRef, useEffect} from 'react'
import Fluid from 'webgl-fluid'

export default function FluidSimulation() {
  const canvas = useRef(null)
  useEffect(function () {
    let c = canvas.current
    Fluid(c)
  }, [])
  return (
    <div >
      <canvas ref={canvas} style={{width: '100%', height: '100%'}}
       className=' '></canvas>
    </div>
  );
}
