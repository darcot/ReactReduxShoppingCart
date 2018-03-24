import {
    ADD_TO_CART, REMOVE_ITEM, DECREMENT_QUANTITY
} from './../constants/Actiontypes';

const addedIds = (state = [], action) => {
    switch (action.type) {

        case ADD_TO_CART:
            if (state.indexOf(action.productId) !== -1) {
                return state
            }
            return [...state, action.productId]
        case REMOVE_ITEM:
            const index = state.indexOf(action.id)
            state.splice(index, 1);
        default:
            return [...state]
    }
}

const quantityById = (state = {}.quantityById, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const { productId } = action
            return {
                ...state,
                [productId]: (state[productId] || 0) + 1
            }
        case REMOVE_ITEM:
            delete state[action.id];
            return { ...state }
        case DECREMENT_QUANTITY:
            const { id } = action
            let quantity = state[id];
            if (state[id] > 1) {
                quantity = quantity - 1;
            } else {

            }
            return {
                ...state,
                [id]: quantity
            }
        default: 
            return state
    }

}


const cart = (state = { addedIds: [], quantityById: {} }, action) => {
    return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
    }
}
export default cart;