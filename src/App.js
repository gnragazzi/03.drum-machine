import React from 'react'
import { useEffect, useState, useRef } from 'react'
import data from './data'

function App() {
  const [innerText, setInnerText] = useState('')
  const displayRef = useRef(null)
  // const [key]
  const handleKeyDown = (e) => {
    const key = e.key.toUpperCase()
    const audioDom = document.getElementById(key)
    if (audioDom) {
      const text = audioDom.dataset.label
      setInnerText(text)
      audioDom.play()
    }
  }

  const handleClick = (e) => {
    e.currentTarget.children[0].play()
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  })

  return (
    <main id='drum-machine' onKeyPress={() => console.log('pressed key')}>
      <article>
        {data.map(({ name, url, label }, index) => {
          return (
            <button
              key={index}
              className='drum-pad'
              id={label}
              onClick={handleClick}
            >
              <audio
                id={name}
                className='clip'
                src={url}
                data-label={`${label}`}
              ></audio>
              {name}
            </button>
          )
        })}
        <h1 id='display' ref={displayRef}>
          {innerText}
        </h1>
      </article>
    </main>
  )
}

export default App
