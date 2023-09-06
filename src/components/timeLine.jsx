import React from 'react'

const Timeline = ({time}) => {
  return (
    <div  className='w-[3rem]  space-y-1'>
            <hr className='border-t-[1px] border-[#9BC2CD]'/>
            <span className='text-[#1C1C1C] text-[0.75rem] text-right tracking-tighter float-right w-[33px]  break-words leading-[113%]  font-Poppins font-medium'>{time}</span>
    </div>
  )
}

export default Timeline