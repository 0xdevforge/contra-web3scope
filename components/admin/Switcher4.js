import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Switcher4 = () => {
 const [isChecked, setIsChecked] = useState(false)

 const handleCheckboxChange = () => {
   setIsChecked(!isChecked)
   if (!isChecked) {
     toast('Your work availability has been successfully saved');
   } else {
     toast('Your reminder has been saved');
   }
 }

 return (
   <>
     <label className='flex cursor-pointer select-none items-center'>
       <div className='relative'>
         <input
           type='checkbox'
           checked={isChecked}
           onChange={handleCheckboxChange}
           className='sr-only'
         />
         <div
           className={`box block h-6 w-10 rounded-full ${
             isChecked ? 'bg-[#089f40]' : 'bg-[#9ba2b0]'
           }`}
         ></div>
         <div
           className={`absolute bg-white left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full transition ${
             isChecked ? 'translate-x-full' : ''
           }`}
         ></div>
       </div>
     </label>
   </>
 )
}

export default Switcher4