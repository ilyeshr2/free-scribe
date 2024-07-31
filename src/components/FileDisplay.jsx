import React from 'react'

export default function FileDisplay(props) {
   const {file,audioStream,handleAudioReset}=props
  return (
    <main className="  text-center flex-1 p-4 flex flex-col gap-3 sm:gp-4 justify-center pb-20 w-fit max-w-full mx-auto">
        <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl'>
            Your <span
             className='text-blue-400 bold'>
                File
            </span>
        </h1>
        <div className='flex mx-auto flex flex-col text-left my-4'>
            <h3 className='font-semibold'>Name</h3>
            <p>{file ? file?.name :'custom audio'}</p>
        </div>
        <div className='flex items-center justify-between gap-4'>
            <button className='text-slate-400 hover:text-blue-400 duration-200' onClick={(handleAudioReset)}>
                Reset</button>
            <button className='specialBtn p-2 px-3 text-blue-400 flex items-center gap-2 font-medium px-4 py-2 rounded-lg'>
                <p>Transcribe</p>
                <i className="fa-solid fa-pen-nib"></i>    
            </button>
        </div>
    </main>
  )
}
