import CartActionTypes  from './cart.types'

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})
export const openAndCloseCart = (hidden) => ({
    type: CartActionTypes.OPEN_OR_CLOSE_CART,
    payload: hidden
})

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})
export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART,
})
export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const RemoveItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})