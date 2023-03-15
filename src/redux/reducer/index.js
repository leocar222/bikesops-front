import {GET_PRODUCTS} from '../action/actionNames.js'
const initialState={
    products:[{
        image:'imagen',
        name:'nombre',
        price:'precio'
    },
    // {
    //     image:'imagen2',
    //     name:'nombre2',
    //     price:'precio2'
    // }
]
}

function rootReducer(state=initialState,action){
    switch (action.type) {
        case GET_PRODUCTS:
            console.log('entraaa');
            return{
                ...state,
                // products:action.payload
            }
            break;
    
        default:

            return state;
    }

}

export default rootReducer;