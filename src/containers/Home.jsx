import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from './Cards';
import * as action from '../redux/action/index'

const Home = () => {
    const products=useSelector(state=>state.products)
    const dispatch=useDispatch();
    useEffect(()=>dispatch(action.loadDb()),[])
    useEffect(()=>dispatch(action.getProducts()),[])
    console.log(products);
  return (
    <div>
        <Cards></Cards>
    </div>
  )
}

export default Home