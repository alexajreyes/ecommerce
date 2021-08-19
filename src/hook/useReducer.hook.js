//iniciamos el estados
export const initialState = {
  basket: [],
  user: null,
}

//escuchamos la accion
export const actionTypes = {
  ADD_TO_BASKET: 'ADD_TO_BASKET',
  REMOVE_ITEMS: 'REMOVE_ITEMS',
  SET_USER: 'SET_USER',
  EMTY_BASKET: ' EMTY_BASKET',
}
//funcion reductora que permite hacer la sumas de los items
export const getBasketTotal = basket =>
  basket?.reduce((amount, item) => item.price + amount, 0)

//funcion que nos permite agregar un item a las cesta del carriyo
const reducer = (state, action) => {
  switch (action.type) {
    //se agrega al array la nueva informacion
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      }
    //se elimina del array el item
    case 'REMOVE_ITEMS':
      const index = state.basket.findIndex(
        basketItem => basketItem.id === action.id
      )
      let newBasket = [...state.basket]
      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.log('cant remove product')
      }
      return {
        ...state,
        basket: newBasket,
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }
    case ' EMTY_BASKET':
      return {
        ...state,
        basket: action.basket,
      }
    default:
      return state
  }
}
export default reducer
