import  {LOAD_DB,GET_PRODUCTS} from '../action/actionNames';
import axios from "axios";

const URL="http://localhost:3001";

export function loadDb(){
    console.log('loadDb');
    return function(dispatch){
        axios
        .get(`${URL}/populateDB`)
        .then(response=>{
            dispatch({
                type:LOAD_DB,
                payload:response.data
            })
        })
}
}

export  function getProducts(){
    
    return function(dispatch){
        axios
            .get(`${URL}/products`)
            .then(response=>{
                dispatch({
                    type:GET_PRODUCTS,
                    payload:response.data
                })
            })
    }
   }