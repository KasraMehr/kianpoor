import { useState } from 'react'
import '../../index.css'
import Money from '../../assets/money.svg'
function ProCode2() {
  return (
    <>
    <div class="w-80 h-80 rounded-xl bg-primary overflow-hidden border border-2 border-primary" dir='rtl'>
      <div class="px-6 py-4">
        <img src={Money} alt="karate"/>
        <div class="font-bold text-white text-xl mb-2">تنوع فعالیت‌ها</div>
        <p class="text-gray-700 text-white text-base">
           باشگاه‌های ورزشی چند منظوره امکانات و فعالیت‌های متنوعی را ارائه می‌دهند، از جمله ورزش‌های گروهی، تمرینات فردی، کلاس‌های یوگا و پیلاتس. این تنوع به اعضا این امکان را می‌دهد که با توجه به سلیقه و نیازهای خود، فعالیت مناسب را انتخاب کنند و از ورزش کردن لذت ببرند.
        </p>
        </div>
      </div>
    </>
  )
}
export default ProCode2
