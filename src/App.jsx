import { useEffect, useState } from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'
import FileDisplay from './components/FileDisplay'
import Information from './components/Information'
import Transcribing from './components/Transcribing'

export default function App() {

  const [file, setFile]=useState(null)
  const [audioStream, setAudioStream]=useState(null)
  const [output, setOutput]=useState(true)
  const [loading, setLoading]=useState(true)

  const isAudioAvailable = file || audioStream

  function handleAudioReset(){
    setFile(null)
    setAudioStream(null)
  }

  useEffect(()=>{
    console.log('audio stream',audioStream)
  },[audioStream])

  return (
    <div className="flex flex-col max-w-[1000px] mx-auto w-full">
      <section className="min-h-screen flex flex-col">
        <Header/>
        {output ? (
          <Information/>) : loading ? (
            <Transcribing/>
          ): isAudioAvailable ? (
          <FileDisplay handleAudioReset=
            {handleAudioReset} file={file} audioStream=
            {audioStream}/> ) : (        
            <HomePage setFile={setFile} setAudioStream=
              {setAudioStream}/>)
        }
      </section>
      <footer></footer>
    </div>

  )
}