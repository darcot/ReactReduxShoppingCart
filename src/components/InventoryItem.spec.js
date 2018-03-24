import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme'
import InventoryItem from './InventoryItem'


const setup = props => {
    const component = shallow(
        <InventoryItem {...props} addToCart={()=>{}} />
    )

    return {
        component: component,
        img: component.find('img'),
        title: component.find('.InventoryItem__Title'),
        discount: component.find('.InventoryItem__Discount')

    }
}

describe('Inventory Item', () => {
    it('should render title and price', () => {
        const product =
            {
                "id": 9097, "name": "Item4", "price": 350, 
                "priceWithoutDiscount": 350, "type": "fiction","discountPercent":10,
                "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
            }
        const {  img,title } = setup(product);
        expect(img.prop('src')).toBe(product.img_url);
        expect(title.text()).toBe(product.name);

    }),
    it('should not show discount if 0', () => {
        const product =
            {
                "id": 9097, "name": "Item4", "price": 350,"discountPercent":10, "priceWithoutDiscount":350, "type": "fiction",
                "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
            }
        const {  discount } = setup(product);
        expect(discount.length).toBe(0);

    }) ,
    it('should  show discount if greater than 0', () => {
        const product =
            {
                "id": 9097, "name": "Item4", "price": 350,"discountPercent":10, "priceWithoutDiscount": 2, "type": "fiction",
                "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
            }
        const {  discount } = setup(product);
        expect(discount.length).toBe(1);

    })
})
