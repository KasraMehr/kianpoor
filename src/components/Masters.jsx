import { useState } from 'react'
import MasterCard1 from './cards/MasterCard1.jsx'
import '../index.css'
import D from "../assets/images/D.jpg";
import MasterCard2 from "./cards/MasterCard2.jsx";
import MasterCard3 from "./cards/MasterCard3.jsx";

function Masters() {
  return (
    <>
      <div className="px-20 pt-24" dir='rtl'>
        <div className="text-3xl font-semibold text-center">
          اساتید باشگاه کیانپور
        </div>
        <div className="flex pt-12 justify-center">
          <MasterCard1 />
          <MasterCard2 />
          <MasterCard3 />
        </div>
        <div className="flex pt-12 justify-center">
          <MasterCard1 />
          <MasterCard2 />
          <MasterCard3 />
        </div>
        <div className="flex pt-12 justify-center">
          <MasterCard1 />
          <MasterCard2 />
          <MasterCard3 />
        </div>
      </div>
    </>
  )
}
export default Masters
