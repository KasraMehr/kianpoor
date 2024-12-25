import { useState } from 'react'
import '../index.css'
import ProCard1 from './cards/ProCard1.jsx';
import ProCard2 from './cards/ProCard2.jsx';
import ProCard3 from './cards/ProCard3.jsx';

function Pros() {
  return (
    <>
    <div className="pt-24">
        <div className="text-3xl font-semibold justify-end pr-24" dir='rtl'>
        مزایای باشگاه کیانپور
        </div>
        <div className="flex space-x-11 justify-center pt-8">
          <ProCard1 />
          <ProCard2 />
          <ProCard3 />
        </div>
      </div>
    </>
  )
}
export default Pros
