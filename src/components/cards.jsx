import React, { useState } from 'react';
import './cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

// Rename component to start with an uppercase letter
const Cards = (props) => {
  const [like, setLike] = useState(0);
  const [unlike, setUnlike] = useState(0);

  return (
    <div className='card-box'>
      <h1>{props.cardName}</h1>
      <p>{props.description}</p>
      <button onClick={() => setLike(like + 1)}>
        <FontAwesomeIcon icon={faThumbsUp} /> {like}
      </button>
      <button onClick={() => setUnlike(unlike + 1)}>
        <FontAwesomeIcon icon={faThumbsDown} /> {unlike}
      </button>
    </div>
  );
};

export default Cards;
