import { useState } from 'react'
import '../../index.css'
import Dumble from '../../assets/images/dumble.svg'
function ProCode3() {
  return (
    <>
    <div className="w-80 h-80 rounded-xl overflow-hidden border border-primary" dir='rtl'>
      <div className="px-6 py-4">
        <img src={Dumble} alt="Dumble"/>
        <div className="font-bold text-xl mb-2">امکانات به‌روز و حرفه‌ای</div>
        <p className="text-gray-700 text-base text-justify">
          این نوع باشگاه‌ها معمولاً از تجهیزات و امکانات مدرن و به‌روز بهره‌مند هستند. وجود دستگاه‌های ورزشی پیشرفته و فضاهای مناسب برای تمرینات مختلف، به اعضا کمک می‌کند تا به بهترین شکل ممکن به اهداف ورزشی خود دست یابند و تجربه‌ای لذت‌بخش از ورزش داشته باشند.
        </p>
        </div>
      </div>
    </>
  )
}
export default ProCode3
