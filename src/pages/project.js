import Card from '@/components/card'
import Header from '@/components/header'
import Timeline from '@/components/timeLine'
import React from 'react'

const colorPick=(number)=>{
  const colors=['#C1E3F4','#F7E7D0','#E4C4C6','#CEDCF9']
  number=number%4;
  if(number===0){
    number=3;
  }else{
    number=number-1;
  }    
  return colors[number]
}

const Project = () => {
  return (
    <div className='flex flex-col items-center w-full space-y-8 pr-5'>
        <Header title={'Project 1 Timeline'}/>
        <div className='flex flex-row w-full justify-between'>
            <div className='flex flex-col w-24 mt-11 space-y-20'>
                <Timeline time={'09:00am'}/>
                <Timeline time={'10:00am'}/>
                <Timeline time={'11:00am'}/>
                <Timeline time={'12:00pm'}/>
                <Timeline time={'01:00pm'}/>
                <Timeline time={'02:00pm'}/>
            </div>
            
            <div className='flex flex-col space-y-2 w-[80%]'>
                <Card title={'Design system'} time={'09:00 - 10:00'} member={2} progress={4} color={colorPick(1)}/>
                <Card title={'Create prototype'} time={'10:00 - 11:00'} member={4} progress={8}  color={colorPick(2)}/>
                <Card title={'Dashboard design'} time={'11:00 - 12:00'} member={4} progress={5} color={colorPick(3)}/>
                <Card title={'Ofspace project'} time={'12:00 - 01:00'} member={4} progress={7} color={colorPick(4)}/>
                <Card title={'Design system'} time={'09:00 - 10:00'} member={2} progress={4} color={colorPick(5)}/>
            </div>
        </div>
    </div>
  )
}

export default Project