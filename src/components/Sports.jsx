import { useState } from 'react'
import SportCard1 from './cards/SportCard1.jsx'
import '../index.css'
import SportCard2 from "./cards/SportCard2.jsx";
function Sports() {
  return (
    <>
      <div className="px-20 pt-24" dir='rtl'>
        <div className="text-3xl font-semibold text-center">
          ورزش های باشگاه کیانپور
        </div>
        <div className="flex pt-12 justify-center">
          <SportCard1 />
          <SportCard2 />
        </div>
        <div className="flex pt-12 justify-center">
          <SportCard1 />
          <SportCard2 />
        </div>
        <div className="flex pt-12 justify-center">
          <SportCard1 />
          <SportCard2 />
        </div>
      </div>
    </>
  )
}
export default Sports
