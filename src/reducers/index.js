import { combineReducers } from 'redux'
import inventory from './inventory'
import cart from './cart'
import notifications from './notifications'

export default combineReducers({
    inventory,
    cart,
    notifications
})

export const getCartProducts = (state) => state.inventory.products.map((product) => {
    product.priceWithoutDiscount = product.price - product.discount;
    product.discountPercent = Math.floor((product.discount / product.price) * 100)
    return product;
});

export const getProductsMap = (state) => {
    const productIdMap = {};

    state.inventory.products.forEach(element => {
        productIdMap[element.id] = element;
    });
    return productIdMap;
}

export const getTotalPriceAndDiscount = (state) => {
    const productIdMap =getProductsMap(state);
    let totalPrice=0,totalDiscount=0,typeDiscount=0;
    
       state.cart.addedIds.forEach((id) => {
        totalPrice+=(productIdMap[id].price)*state.cart.quantityById[id];
         totalDiscount+= productIdMap[id].discount*state.cart.quantityById[id];
         if(productIdMap[id].type==="fiction"){
            typeDiscount+=(15*productIdMap[id].price)/100;
         }
         });

    return {totalPrice,totalDiscount,typeDiscount}
    
}

export const getTotalItemsLength = (state) => {
    if(state.cart.addedIds.length>0)
   return state.cart.addedIds.reduce((a,b)=>a+ state.cart.quantityById[b],0);
   return 0;
    
}