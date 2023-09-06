import React from 'react'

const PeopleStatusBar = ({src,name,designation,color}) => {
  return (<>
                  <div key={name} className={`bg-[${color}] w-full h-[3.0625rem] flex space-x-3 items-center pl-3`}>
                    {/* Profile Avatar */}
                    <div className="avatar rounded-full w-fit h-fit border-[#FFFFFF] border-2	">
                            <div className="w-[2.09rem] h-[2.09rem]">
                            <img src={src}  className='rounded-full w-full h-full'/>
                            </div>
                    </div>
                    <div className='flex flex-col font-Poppins '>
                        <h1 className='font-normal font-Poppins text-[0.9375rem] leading-[1.40625rem]'>{name}</h1>
                        <p className='font-normal text-[0.625rem] leading-[0.9375rem tracking-[-0.33px]'>{designation}</p>
                    </div>
              </div>
    </>)
}

export default PeopleStatusBar