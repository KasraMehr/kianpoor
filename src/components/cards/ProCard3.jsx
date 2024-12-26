import { useState } from 'react'
import '../../index.css'
import Dumble from '../../assets/images/dumble.svg'
function ProCode3() {
  return (
    <>
      <div className="w-full sm:w-80 h-auto sm:h-80 rounded-xl overflow-hidden border-4 border-primary p-4" dir='rtl'>
        <img src={Dumble} alt="Dumble" className="py-2"/>
        <div className="font-medium text-lg sm:text-xl mb-2">
          امکانات به‌روز و حرفه‌ای
        </div>
        <p className="text-gray-700 text-sm sm:text-base text-justify py-2">
          این نوع باشگاه‌ها معمولاً از تجهیزات و امکانات مدرن و به‌روز بهره‌مند هستند. وجود دستگاه‌های ورزشی پیشرفته و فضاهای مناسب برای تمرینات مختلف، به اعضا کمک می‌کند تا به بهترین شکل ممکن به اهداف ورزشی خود دست یابند و تجربه‌ای لذت‌بخش از ورزش داشته باشند.
        </p>
      </div>
    </>
  )
}
export default ProCode3
