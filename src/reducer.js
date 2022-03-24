export const initialState={
    basket: [],
};

// export const getBasketTotal= (basket) =>
// basket?.reduce((amount, item) => ({ price: item.price + amount.price }));




const reducer = (state, action) => {
    console.log(action);
     switch(action.type)
     {
         case 'ADD_TO_BASKET': 
         return {
             ...state,
             basket: [...state.basket, action.item],
             

            };
            default:
                return state;
                
     }

}

export default reducer;