import { useState } from 'react'
import '../../index.css'
import taekwondo from '../../assets/images/taekwondo.png'
function SportCard1() {
  return (
    <>
      <div className="border-4 border-primary rounded-xl flex w-4/12 ml-28">
        <div className="text-right p-5">
            <div className="text-2xl font-semibold">
                تکواندو
            </div>
            <div className="text-base font-medium text-justify pt-4">
                تکواندو یک ورزش المپیکی دارای سابقه طولانی بوده و به هنرجو قدرت، اعتماد به نفس، انعطاف و حس برتری میدهد.
                این رشته برای تمامی سنین مناسب میباشد و باعث سلامت جسم و کاهش استرس میشود.
            </div>
        </div>
          <img src={taekwondo} alt="taekwondo" className="rounded-xl"/>
      </div>
    </>
  )
}
export default SportCard1
