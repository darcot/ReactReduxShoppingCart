import inventory from "./../api/inventory";
import { DISPLAY_PRODUCTS, SHOW_NOTIFICATIONS,ADD_TO_CART, NOTIFICATION_COMPLETE,
    REMOVE_ITEM,DECREMENT_QUANTITY } from "./../constants/Actiontypes"

const displayProducts = products => ({
    type: DISPLAY_PRODUCTS,
    products
})
export const addToCart = (id) => ({
    type: ADD_TO_CART,
    productId: id

})
export const getAllProducts = () => dispatch => {
    inventory.getAllProducts().then(response => {
        dispatch(displayProducts(response.data))
    })

}
export const showNotifications = name => ({
    type: SHOW_NOTIFICATIONS,
    itemName: name

    
}) 
export const notificationOnComplete = () => ({
    type: NOTIFICATION_COMPLETE,
    
}) 
export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    id
}) 
export const removeQuantity = (id) => ({
    type: DECREMENT_QUANTITY,
    id
}) 


