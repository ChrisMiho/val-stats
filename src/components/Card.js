import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      {props.name} : {props.value}
    </div>
  );
};

export default Card;
