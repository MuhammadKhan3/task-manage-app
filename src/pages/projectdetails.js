import Header from '@/components/header'
import PeopleStatusBar from '@/components/peopleStatusBar'
import ProgressBar from '@/components/progressBar'
import dynamic from "next/dynamic";
import React from 'react'
const colorPick=(number)=>{
    const colors=['#D2DDF8','#F1D2CF','#F6E8D4','#C7E3F2']
    number=number%4;
    if(number===0){
      number=3;
    }else{
      number=number-1;
    }    
    return colors[number]
}

const ProjectDetail = () => {
  const paragrahHandler=(paragraph)=>{
          const words = paragraph.split(" ");
          const chunks = [];
          for (let i = 0; i < words.length; i += 7) {
            chunks.push(words.slice(i, i + 7).join(" "));
          }         
          return chunks
  }

  




  return (<div className='m-0 p-0 flex  flex-col items-end  space-y-6  pr-2'>
      <Header title={'Design system'}/>
   
      <div className='w-[97%] flex flex-col       h-[35.3125] bg-[#F3FAFE] rounded-[14px] space-y-3 py-5 '>
          <div className='px-4 space-y-4'>
                <div className='flex items-baseline  justify-between '>
                  {/*Title  */}
                  <div className='flex flex-col font-Poppins'>
                        <h1 className='text-[1.0625rem] font-medium text-[#1C1C1C]'>Design system</h1>
                        <div className='flex items-center space-x-1 '>
                          <img src='/images/timer.svg' className='w-3 h-3'/>              
                          <span className='text-[0.8125rem] font-medium opacity-50'>09:00 - 10:00 (PST)</span>
                        </div>
                    </div>
                    <div>
                        <ProgressBar progress={4}/>
                    </div>
                </div>
                {/* Description */}
                <div>
                  <h1 className='font-light italic  leading-[1.08875rem] text-[#1C1C1C] opacity-50 text-[0.8125rem] font-Poppins'>Brief Description of the project and/or purpose of the meeting</h1>
                </div>
                {/* People Logo */}
                <div className='flex flex-row space-x-2 items-center'>
                      <img src='/images/people.svg'/>
                      <span className='font-Poppins font-medium text-[0.9375rem]'>People</span>
                </div>
          </div>
          {/* People Data */}
          <div className='px-2'>
              <PeopleStatusBar src={'images/image2.svg'} name={'Mary Shelly'} designation={'Project Manager'} color={colorPick(1)}/>
              <PeopleStatusBar src={'images/image3.svg'} name={'Tim Allen'} designation={'UX Designer'} color={colorPick(2)}/>
              <PeopleStatusBar src={'images/image2.svg'} name={'Sylvia Plath'} designation={'Java Developer'} color={colorPick(3)}/>
              <PeopleStatusBar src={'images/image3.svg'} name={'Pete Cooper'} designation={'UI Designer'} color={colorPick(4)}/>
          </div>

          <div className='flex flex-col px-4 space-y-10'>
              <div className='flex flex-row items-center space-x-2'>
                <div>
                  <img src='/images/video_round.svg' className='w-[1.125rem] h-[0.69rem]'/>
                  <img src='/images/video-meet.svg' className='relative top-4 w-[0.9375rem] h-[0.75rem]'/>
                </div>
                <div className='leading-[5px]'>
                   <h1 className='font-Poppins text-[0.9375rem] font-medium leading-[1.375rem]'>Meeting Info</h1>
                   <span className='font-Poppins text-[0.81rem] italic text-[#1C1C1C] opacity-50 font-light'>meet.google.com/dki-epps-ask</span>
                </div>
              </div>
              
              <div className='flex flex-col '>
                <div className='flex space-x-2 items-center'>
                  <img src='/images/circle.svg' className='w-[0.875rem] h-[0.875rem]'/>
                  <h1 className='font-Poppins font-medium text-[0.9375rem]'>Main objective</h1>
                </div>

                <div className='space-x-2 ml-[1.30rem]' >
                    <ul className='list-disc text-primary-black' id='mylist'>
                      {paragrahHandler('Lorem ipsum dolor sit amet. In cumque praesentium est voluptatem earum aut porro consequatur et corrupti cupiditate. Ea rerum corrupti rem distinctio necessitatibus eum sunt molestias sed omnis sint non sint')?.map((data,i)=>{
                        return <li key={i} className='font-normal font-Poppins text-[0.8125rem]'>{data}</li>
                      })}
                    </ul>
                </div>
              </div>
          </div>
      </div>
    </div>)
}

export default ProjectDetail 

