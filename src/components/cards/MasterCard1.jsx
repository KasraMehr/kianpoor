import { useState } from 'react'
import '../../index.css'
import D from '../../assets/images/D.jpg'
function MasterCard1() {
  return (
    <>
    <div className="pl-10">
      <img src={D} alt="MasterCard1" className="w-96 h-96"/>
      <div className="bg-secondary w-full text-center text-xl font-semibold pb-4">
        نعمت الله مهرعلی زاده
      </div>
      <div className="bg-secondary w-full text-center text-base font-medium">
        تکواندو
      </div>
    </div>
    </>
  )
}
export default MasterCard1
