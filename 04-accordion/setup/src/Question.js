import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = (props) => {
  const { id, title, info } = props.data

  const [ showInfo, setShowInfo ] = useState(false);  

  return (
    <article className="question" id={`${id}_title`} key={`${id}_title`}>
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>      
      {showInfo && <p>{info}</p>}
    </article>

    
    
  );
};

export default Question;
