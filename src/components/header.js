import React from 'react'
import '../App.css'
import sym from '../images/Screenshot 2024-02-21 230731.png'
import { IoSearchSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
const Header = () => {
  return (
<div className='hidden md:flex lg:flex lg:visible w-[1440px] h-[72px] flex justify-between items-center text-center'>      <div className=' w-[162.57px] h-[24px] mb-4 items-center ml-[72px] font-thin'>
      <h1 className=' flex text-[28px]'><h1 className=' text-[#27A365]'>ATG.</h1><h1 className=' text-[#5C5D5D]'>W</h1><img src={sym} className=' w-[26px] ' alt="" /><h1 className=' text-[#5C5D5D]'>RLD</h1></h1>
      </div>
      <div className=' w-[360px] h-[24px]  rounded-full flex bg-[#F2F2F2]  items-center p-4'>
      <IoSearchSharp className=' text-[#5C5C5C] h-[19px] mr-1'/>
        <input className=' text-sm w-[242px] h-[19px] bg-[#F2F2F2] text-[#5C5C5C]' type="text" name="" id="" placeholder='Search for your favorite groups in ATG' />
      </div>
    <div className=' flex  mr-[72px] font-semibold items-center'>
        <h1 className=' text-sm text-[#2E2E2E]'>Create account.</h1> <h1 className=' text-sm text-[#2F6CE5]'>It's Free!</h1><FaCaretDown className=' ' />
    </div>
    </div>
  )
}
// w-[242px] h-[19px] mt-[28px] ml-[590px] bg-slate-600
export default Header
