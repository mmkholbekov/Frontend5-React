import products from './/products.json';

 const initialState = {
    product: products,
    basket:[]
}

const marketReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TO_BASKET":
            console.log("Adding to basket:", action.payload)
        return{
            ...state,
            basket:[...state.basket, action.payload]
        }
        default:
            return state
    }
}
export default marketReducer