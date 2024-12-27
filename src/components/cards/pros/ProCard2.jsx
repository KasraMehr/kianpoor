import { useState } from 'react'
import '../../../index.css'
import Money from '../../../assets/images/website/money.svg'
function ProCode2() {
  return (
    <>
      <div className="w-full sm:w-80 h-auto sm:h-80 rounded-xl overflow-hidden border-4 border-primary p-4 bg-primary" dir='rtl'>
        <img src={Money} alt="Money"  className="py-2"/>
        <div className="font-medium text-lg sm:text-xl mb-2 text-white">
          مقرون به صرفه
        </div>
        <p className="text-white text-sm sm:text-base text-justify py-2">
          اعضا می‌توانند با پرداخت هزینه ماهیانه، به انواع تجهیزات و کلاس‌های ورزشی دسترسی داشته باشند و از این طریق هزینه‌های جداگانه برای هر نوع ورزش یا فعالیت را کاهش دهند. این امر به ویژه برای افرادی که به دنبال تنوع در فعالیت‌های ورزشی هستند، بسیار اقتصادی است.
        </p>
      </div>
    </>
  )
}
export default ProCode2
