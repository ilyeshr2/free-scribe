import React from 'react'

export default function Transcribing(props) {
    const {downloading}=props
  return (
    <div className='flex itms-center flex-col
    justify-center gap-10 md:gap-14 py-24'>
        <div className='flex flex-col gap-2 
        sm:gap-4'>
            <h1 className='font-semibold text-4xl 
            sm:text-5xl md:text-6xl'><span
             className='text-blue-400 
             bold'>Transcribing</span></h1>
            <p>{!downloading ? 'warming up cylinders':'core cylinders engaged'}</p>
            <div className='flex flex-col gap-2 sm:gap-4 max-w-[500px] mx-auto w-full' >
                {[1,2,3].map((val)=>{
                    return(
                        <div key={val} className=
                        {'rounded-full h-2 sm:h-3 bg-slate-400 loading '+ `loading${val}`}>
                        </div>
                    )
                })}
            </div>
        </div>

    </div>
  )
}
