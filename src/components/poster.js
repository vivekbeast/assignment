import React from 'react'
import computer from '../images/7d56a759ac56bc165f65c40094aba4e8.jpeg'

const Poster = () => {
  return (
    <div>
      <div className='h-[444px] flex flex-col justify-center items-center ' >
    <img className='h-[444px] w-full object-cover ' style={{ filter: 'saturate(0.5) brightness(0.5)' }} src={computer} alt="" />
    <h1 className='absolute z-10 text-[30px] mr-[886px] ml-[200px] mb-[107px] mt-[286px] text-white  font-bold '>Computer Engineering</h1>
<h2 className='absolute z-10 mr-[913px] ml-[200px] mb-[80px] text-[#FFFFFF] mt-[337px]   '>142,765 Computer Engineers follow this</h2>

</div> 
    </div>
  )
}

export default Poster
