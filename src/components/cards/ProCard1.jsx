import { useState } from 'react'
import '../../index.css'
import Karate from '../../assets/images/karate.svg'
function ProCode1() {
  return (
    <>
    <div className="w-80 h-80 rounded-xl overflow-hidden border border-primary" dir='rtl'>
      <div className="px-6 py-4">
        <img src={Karate} alt="karate"/>
        <div className="font-bold text-xl mb-2">تنوع فعالیت‌ها</div>
        <p className="text-gray-700 text-base text-justify">
          باشگاه‌های ورزشی چند منظوره امکانات و فعالیت‌های متنوعی را ارائه می‌دهند، از جمله ورزش‌های گروهی، تمرینات فردی، کلاس‌های یوگا و پیلاتس. این تنوع به اعضا این امکان را می‌دهد که با توجه به سلیقه و نیازهای خود، فعالیت مناسب را انتخاب کنند و از ورزش کردن لذت ببرند.
        </p>
        </div>
      </div>
    </>
  )
}
export default ProCode1
