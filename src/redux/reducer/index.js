import {GET_PRODUCTS} from '../action/actionNames.js'
const initialState={
    products:[]
}

function rootReducer(state=initialState,action){
    switch (action.type) {
        case GET_PRODUCTS:
            console.log('entraaa');
            return{
                ...state,
                products:action.payload
            }
            break;
    
        default:

            return state;
    }

}

export default rootReducer;