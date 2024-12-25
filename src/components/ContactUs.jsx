import { useState } from 'react'
import '../index.css'
import Telegram from '../assets/images/telegram.svg'
import Instagram from '../assets/images/instagram.svg'
function ContactUs() {
  return (
    <>
    <div className="bg-primary flex flex-col w-full text-white mt-24 items-center pb-20" dir='rtl'>
      <div className="text-4xl font-bold pt-20">
        همین حالا ثبت نام کنید
      </div>
      <div className="text-base font-medium pt-4">
        به جمع ما بپیوندید و از امکانات بی نظیر ورزشی بهره مند شوید.
      </div>
      <div className="w-10/12 border flex flex-col border-white border-2 mt-20 items-center rounded-2xl pb-6">
        <div className="pt-8 font-medium text-3xl">
          شماره تماس مجموعه برای ثبت نام
        </div>
        <div className="text-base justify-center font-medium pt-4">
          راه های ارتباطی
        </div>
        <div className="pt-12 flex justify-center">
          <div className="font-medium text-2xl ml-20">
            آقای عالمی
          </div>
          <div className="bg-active rounded-lg text-xl px-12">
            09123635319
          </div>
        </div>
        <div className="pt-12 flex justify-center">
          <div className="font-medium text-2xl ml-20">
            آقای واحدی
          </div>
          <div className="bg-active rounded-lg text-xl px-12">
            09369551930
          </div>
        </div>
        <div className="pt-12 flex justify-center">
          <div className="font-medium text-2xl ml-20">
            تلفن ثابت
          </div>
          <div className="bg-active rounded-lg text-xl px-12">
            02632828066
          </div>
        </div>
        <div className="pt-12 flex justify-center">
          <img src={Telegram} alt="telegram" className="ml-20"/>
          <img src={Instagram} alt="instagram" />
        </div>
      </div>
    </div>
    </>
  )
}
export default ContactUs
