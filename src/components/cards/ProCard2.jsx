import { useState } from 'react'
import '../../index.css'
import Money from '../../assets/images/money.svg'
function ProCode2() {
  return (
    <>
    <div className="w-80 h-80 rounded-xl bg-primary overflow-hidden border border-primary" dir='rtl'>
      <div className="px-6 py-4">
        <img src={Money} alt="Money"/>
        <div className="font-bold text-white text-xl mb-2">مقرون به صرفه</div>
        <p className="text-white text-base text-justify">
          اعضا می‌توانند با پرداخت هزینه ماهیانه، به انواع تجهیزات و کلاس‌های ورزشی دسترسی داشته باشند و از این طریق هزینه‌های جداگانه برای هر نوع ورزش یا فعالیت را کاهش دهند. این امر به ویژه برای افرادی که به دنبال تنوع در فعالیت‌های ورزشی هستند، بسیار اقتصادی است.
        </p>
        </div>
      </div>
    </>
  )
}
export default ProCode2
