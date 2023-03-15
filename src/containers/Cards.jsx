import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';


const Cards = () => {
  const products=useSelector(state=>state.products)
  console.log(products.map(el=>el));
  return(
    <div>{
      products.map((el,index)=>
      <Card key={index} image={el.img} name={el.title} price={el.price}/>)
      }
      </div>
  )
}

export default Cards