import  {GET_PRODUCTS} from '../action/actionNames';
import axios from "axios";

const URL="http://localhost:3001";

export  function getProducts(){
    
    // return function(dispatch){
    //     axios
    //         .get(`${URL}/products`)
    //         .then(response=>{
    //             dispatch({
    //                 type:GET_PRODUCTS,
    //                 payload:response.data
    //             })
    //         })
    // }
    return{
        type:GET_PRODUCTS
    }
}