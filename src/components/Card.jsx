import React from 'react'

const Card = ({image,name,price}) => {
  console.log('card');
  return (
    <div>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <span>{price}</span>
    </div>
  )
}

export default Card