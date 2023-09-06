const ProgressBar=({progress})=>{
    const progressprev=progress
    progress=progress/2.5;
    const progressArray=[];
    

    for (let index = 0; index < 4; index++) {
        if(progress>1){
            progressArray.push(100)
        }else if(progress>0){
                        
            progressArray.push(Math.trunc(progress*100))
        }else {
            progressArray.push(0)
        }
        progress=progress-1
    }
        return(<>
                <div>

                    {progressArray.length>0 && progressArray.map((value,i)=>{
                        return <progress key={i} className="progress w-[1.68rem] h-[0.31rem]" value={value} max="100"></progress>
                    })}
                    <div className='flex flex-row w-full justify-between text-[0.6rem] text-[#1C1C1C] opacity-[0.5]'><span>PROGRESS</span> <span>{progressprev}/10</span></div>
                </div>
        </>)
                            
}

export default ProgressBar