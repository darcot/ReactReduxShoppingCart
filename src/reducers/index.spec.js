import { getCartProducts } from './index';
describe('getCartProducts', () => {

    it('should getCartProducts', () => {
        const state = {
            inventory: {
                products: [
                    {
                        "id": 9097, "name": "Item4", "price": 350, "discount": 10, "type": "fiction",
                        "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
                    }]
            }
        }
        expect(getCartProducts(state)[0].priceWithoutDiscount).toBe(340);
        expect(getCartProducts(state)[0].discountPercent).toBe(2);

    })
});
