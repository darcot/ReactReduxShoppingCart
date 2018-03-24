import cart from './cart'
describe('cart', () => {

    it('should handle ADD_TO_CART action', () => {
        expect(cart({addedIds:[],quantityById:{}}, { type: 'ADD_TO_CART', productId: 1 })).toEqual({
          addedIds: [ 1 ],
          quantityById: { 1: 1 }
        })
      })
  
});