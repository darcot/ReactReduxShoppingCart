import { DISPLAY_PRODUCTS } from "./../constants/Actiontypes"
const inventory = (state = {products:[]}, action) => {
  switch (action.type) {
    case DISPLAY_PRODUCTS:
      return { products: action.products }
    default:
      return state
      
  }
}
export default inventory;