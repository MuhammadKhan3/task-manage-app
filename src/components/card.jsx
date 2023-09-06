import React from 'react'
import {HiOutlineDotsHorizontal} from 'react-icons/hi'
import ProgressBar from './progressBar'


const Card = ({title,time,member,progress,color}) => {

    console.log(color)

  return (
    <div className='flex flex-row justify-end  w-full'>
        <div className='bg-[#F3FAFE] w-full h-[7.435rem] rounded-[0.8rem] p-3 flex flex-col justify-between '>
            {/* Timer */}
            <div className='w-full'>
                <div className='flex flex-row items-center justify-between w-full'>
                    <h1 className='font-Poppins font-medium'>{title}</h1>
                    <HiOutlineDotsHorizontal className='cursor-pointer w-5 h-5'  />
                </div>
                <div className='flex flex-row text-[#1C1C1C] items-center space-x-1'>
                    <img src='/images/timer.svg' className='w-3 h-3'/>
                    <p className='text-[0.8rem] opacity-[0.5] font-Poppins'>{time}</p>
                </div>
            </div>
            {/* Progress Bar */}
            <div className='flex justify-between'>
                <div className='flex flex-col w-fit'>
                    <div className='flex flex-row space-x-1 '>
                        <ProgressBar progress={progress}/>
                    </div>

                </div>
                {/*Profile Images */}
                <div className="avatar-group -space-x-3">
                        <div className="avatar border-[0.09375rem] w-fit h-fit">
                            <div className="w-[1.71rem] h-[1.71rem]">
                            <img src="/images/image2.svg"  className='w-full h-full'/>
                            </div>
                        </div>
                        <div className="avatar border-[0.09375rem] w-fit h-fit" >
                            <div className="w-[1.71rem] h-[1.71rem]">
                            <img src="/images/image3.svg" className='w-full h-full' />
                            </div>
                        </div>
                        <div className="avatar placeholder border-[0.09375rem] w-fit h-fit">
                            <div className={`w-[1.71rem]  h-[1.71rem] bg-[#CEDCF9] text-neutral-content`}>
                            <span className='text-[0.75rem]  text-[#1C1C1C] '>+{member}</span>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Card