import Image from 'next/image'
import React from 'react'
import {HiDotsVertical} from 'react-icons/hi'

const Header = ({title}) => {
  return (
    <div className='  flex flex-row items-center  justify-between pl-4  w-full mt-4'>
        <div className='border-2 rounded-full   border-[#F1D2CF] w-fit'>
            <img src='/images/image.svg' className='rounded-full w-[41px] h-[41px]'/>
        </div>
        <div >
            <h1 className='font-Manrope  text-[1.3rem] font-bold'>{title}</h1>
        </div>
        <div className='flex align-middle bg-[#D4ECF7] w-[41px] h-[41px] rounded-full items-center justify-center'>
            <HiDotsVertical className='h-5 w-5 cursor-pointer'/>
        </div>
    </div>
  )
}

export default Header