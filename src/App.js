import React from 'react'
import { useEffect, useState } from 'react'
import data from './data'
import DrumPad from './drum-pad'

function App() {
  const [innerText, setInnerText] = useState('')
  const handleKeyDown = (e) => {
    const key = e.key.toUpperCase()
    const audioDom = document.getElementById(key)
    if (audioDom) {
      const text = audioDom.dataset.label
      audioDom.play()
      setInnerText(text)
    }
  }

  const handleClick = (e) => {
    e.currentTarget.children[0].play()
    const text = e.currentTarget.id
    setInnerText(text)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  })

  return (
    <main>
      <article id='drum-machine'>
        <div className='drum-container'>
          {data.map((item, index) => {
            return <DrumPad key={index} {...item} handleClick={handleClick} />
          })}
        </div>
        <h1 id='display'>{innerText || ''}</h1>
      </article>
    </main>
  )
}

export default App
