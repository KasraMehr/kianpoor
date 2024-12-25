import { useState } from 'react'
import '../../index.css'
import footsal from '../../assets/images/footsal.png'
function SportCard1() {
  return (
    <>
      <div className="border-4 border-primary rounded-xl flex w-4/12">
        <div className="text-right p-5">
            <div className="text-2xl font-semibold">
                فوتسال
            </div>
            <div className="text-base font-medium text-justify pt-4">
                فوتسال، هیجان و تکنیک را در یک زمین کوچک به اوج می‌رساند! با حرکات خیره‌کننده، هر بازی به یک نمایش بی‌نظیر تبدیل می‌شود که قلبتان را به تپش می‌اندازد!
            </div>
        </div>
          <img src={footsal} alt="footsal" className="rounded-xl"/>
      </div>
    </>
  )
}
export default SportCard1
