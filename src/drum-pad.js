import React from 'react'

function DrumPad({ name, url, label, handleClick }) {
  return (
    <button className='drum-pad' id={label} onClick={handleClick}>
      <audio
        id={name}
        className='clip'
        src={url}
        data-label={`${label}`}
      ></audio>
      {name}
    </button>
  )
}

export default DrumPad
