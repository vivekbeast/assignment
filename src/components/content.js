import React from 'react'
import first from '../images/59515bfc8d2d4ff8928be097376153e9.jpeg'
import { HiDotsHorizontal } from "react-icons/hi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { PiBagSimpleBold } from "react-icons/pi";
import { MdEdit } from "react-icons/md";
import per from '../images/person.jpeg'
import pee from '../images/person2.jpeg'
import peee from '../images/person3.jpeg'
import peeee from '../images/person4.jpeg'
import second from '../images/seccc.jpeg'
import car from '../images/car.jpeg'
const Content = () => {
  return (
<div className='flex flex-col sm:flex-row'>      <section className='ml-[200px] mt-[47px] flex justify-between mr-[200px] items-start flex-col overflow-y-auto' style={{ height: '80vh' }}>        
         <div className=' h-[472px] flex items-start flex-col border border-[#E0E0E0] rounded-[4px]'>
            <img className=' w-[692px] object-cover h-[220px]' src={first} alt="" />
            <h1 className=' text-[18px] ml-[20px] mt-[20px] font-medium'>✍️ Article</h1>
            <div className=' text-[22px] ml-[20px] mt-[5px] w-[600px] h-[60px] justify-start  text-left flex'><h1 className=' font-semibold'>What if famous brands had regular fonts? Meet RegularBrands!</h1><HiDotsHorizontal className=' mr-[-40px]' /></div>
            <h1 className=' text-[19px] ml-[20px] mt-[12px] text-[#5C5C5C]'>I've worked in UX for the better part of a decade.From now on, I plan to rei..</h1>
            <div className=' ml-[20px] mt-[30px] mb-[40px] flex justify-between w-full '>
                <div className=' flex items-center gap-2'>
                    <img className=' h-[48px] w-[48px] rounded-full' src={per} alt="" />
                    <h1 className=' text-[18px] font-semibold'>Sarthak Kamra</h1>
                </div>
                <div className=' flex justify-between gap-2 mr-[20px] items-center'>
                    <div className=' flex text-center'><MdOutlineRemoveRedEye className=' mt-1 text-[#525252]'/><h1 className=' text-[#525252] text-[14px]'>1.4k views</h1></div> <button className=' mr-[20px] bg-[#EDEEF0] w-[42px] h-[36px] justify-center items-center flex'><IoShareSocialSharp /></button>
                </div>
            </div>
        </div>
        <div className=' h-[472px] flex items-start flex-col border border-[#E0E0E0] rounded-[4px]'>
            <img className=' w-[692px] h-[220px] object-cover' src={second} alt="" />
            <h1 className=' text-[18px] ml-[20px] mt-[20px] font-medium'>🔬️ Education</h1>
            <div className=' text-[22px] ml-[20px] mt-[5px] w-[600px] h-[60px] justify-start  text-left flex'><h1 className=' font-semibold'>Tax Benefits for Investment under National Pension Scheme launched by Government</h1><HiDotsHorizontal className=' mr-[-40px]' /></div>
            <h1 className=' text-[19px] ml-[20px] mt-[12px] text-[#5C5C5C]'>I've worked in UX for the better part of a decade.From now on, I plan to rei..</h1>
            <div className=' ml-[20px] mt-[30px] mb-[40px] flex justify-between w-full '>
                <div className=' flex items-center gap-2'>
                    <img className=' h-[48px] w-[48px] rounded-full object-cover' src={pee} alt="" />
                    <h1 className=' text-[18px] font-semibold'>Sarah West</h1>
                </div>
                <div className=' flex justify-between gap-2 mr-[20px] items-center'>
                    <div className=' flex text-center'><MdOutlineRemoveRedEye className=' mt-1 text-[#525252]'/><h1 className=' text-[#525252] text-[14px]'>1.4k views</h1></div> <button className=' mr-[20px] bg-[#EDEEF0] w-[42px] h-[36px] justify-center items-center flex'><IoShareSocialSharp /></button>
                </div>
            </div>
        </div>
        <div className=' h-[472px] flex items-start flex-col border border-[#E0E0E0] rounded-[4px]'>
            <img className=' w-[692px] h-[220px] object-cover' src={car} alt="" />
            <h1 className=' text-[18px] ml-[20px] mt-[20px] font-medium'>🗓️ Meetup</h1>
            <div className=' text-[22px] ml-[20px] mt-[5px] w-[600px]  justify-between text-left flex'><h1 className=' font-semibold'>Finance & Investment Elite Social Mixer @Lujiazui</h1><HiDotsHorizontal className=' mr-[-40px]' /></div>
            {/* <h1 className=' text-[19px] ml-[20px] mt-[12px] text-[#5C5C5C]'>I've worked in UX for the better part of a decade.From now on, I plan to rei..</h1> */}
            <div className=' h-[20px] w-[358px] mt-[12px] flex ml-[20px] justify-between'>
                <div className=' flex items-center'>
                    <SlCalender />&nbsp;
                    <h1>Fri,12 Oct,2018</h1>
                </div>
                <div className=' flex items-center'>
                    <IoLocationOutline />&nbsp;
                    <h1>Ahmedabad, India</h1>
                </div>
            </div>
            <div className=' w-[652px] mt-[16px] ml-[20px] rounded-[8px] text-center border border-[#A9AEB8] flex justify-center'>
                <a href='/' className=' font-[13px] text-[#E56135]'>Visit Website</a>
            </div>
            <div className=' ml-[20px] mt-[30px] mb-[40px] flex justify-between w-full '>
                <div className=' flex items-center gap-2'>
                    <img className=' h-[48px] w-[48px] rounded-full object-cover' src={peee} alt="" />
                    <h1 className=' text-[18px] font-semibold'>Ronal Jones</h1>
                </div>
                <div className=' flex justify-between gap-2 mr-[20px] items-center'>
                    <div className=' flex text-center'><MdOutlineRemoveRedEye className=' mt-1 text-[#525252]'/><h1 className=' text-[#525252] text-[14px]'>1.4k views</h1></div> <button className=' mr-[20px] bg-[#EDEEF0] w-[42px] h-[36px] justify-center items-center flex'><IoShareSocialSharp /></button>
                </div>
            </div>
        </div>
        <div className=' h-[269px]  w-[692px] flex items-start flex-col border border-[#E0E0E0] rounded-[4px]'>
            <h1 className=' ml-[20px] mt-[20px] text-[18px]'>💼️ Job</h1>
            <h1 className=' ml-[20px] mt-[10px] text-[22px] font-semibold'>Software Developer</h1>
            <div className=' h-[20px]  mt-[12px] flex ml-[20px] justify-between'>
                <div className=' flex items-center'>
                    <PiBagSimpleBold />&nbsp;
                    <h1>Innovaccer Analytics Private Ltd.</h1>
                </div>&nbsp; &nbsp; &nbsp;
                <div className=' flex items-center'>
                    <IoLocationOutline />&nbsp;
                    <h1>Ahmedabad, India</h1>
                </div>
                
            </div>
            <div className=' w-[652px] mt-[16px] ml-[20px] rounded-[8px] text-center border border-[#A9AEB8] flex justify-center'>
                <a href='/' className=' font-[13px] text-[#02B875]'>Apply on Timesjobs</a>
            </div>
            <div className=' ml-[20px] mt-[30px] mb-[40px] flex justify-between w-full '>
                <div className=' flex items-center gap-2'>
                    <img className=' h-[48px] w-[48px] rounded-full object-cover' src={peeee} alt="" />
                    <h1 className=' text-[18px] font-semibold'>Joseph Gray</h1>
                </div>
                <div className=' flex justify-between gap-2 mr-[20px] items-center'>
                    <div className=' flex text-center'><MdOutlineRemoveRedEye className=' mt-1 text-[#525252]'/><h1 className=' text-[#525252] text-[14px]'>1.4k views</h1></div> <button className=' mr-[20px] bg-[#EDEEF0] w-[42px] h-[36px] justify-center items-center flex'><IoShareSocialSharp /></button>
                </div>
            </div>
        </div>
      </section>
      <div className=' flex mt-[47px]'><IoLocationOutline className='  h-[20px]'/><input className=' h-[20px]  w-[100px]' type="text" placeholder='Noida, India'/><MdEdit className=' h-[20px] ' /></div>
    </div>
  )
}

export default Content
