import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, hexColor, index}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hexValue = `#${hexColor}`;
  //const hex = rgbToHex(...rgb);

  const copyToClipBoard = (e) => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue)    
  }

  useEffect(()=> {
    const timeout = setTimeout(()=> {setAlert(false)}, 1000);
    return () => clearTimeout(timeout);
  }, [alert])

  return (
    <article className={`color ${index > 8 && 'color-light'}`} style={{ backgroundColor:`rgb(${bcg})` }} onClick={copyToClipBoard}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>      
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
