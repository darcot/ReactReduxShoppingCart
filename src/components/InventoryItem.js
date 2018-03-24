import React from 'react'
import PropTypes from 'prop-types'
import "./InventoryItem.scss";
const Inventory = ({ id,name, price, priceWithoutDiscount, type, img_url, discountPercent, 
    addToCart,notificationOnComplete }) => (
    <div className="InventoryItem">
        <div className="InventoryItem__ImageWrapper">
            {priceWithoutDiscount != price ?
                <div className="InventoryItem__DiscountPercent">{discountPercent}% off</div> : ""}
            <img className="InventoryItem__Image" src={img_url} height="140" />
        </div>
        <div className="InventoryItem__Footer">
            <div className="InventoryItem__Title">{name}</div>
            {priceWithoutDiscount != price ? <div className="InventoryItem__Discount">${priceWithoutDiscount}</div> : ""}
            <div className="InventoryItem__Price">${price}</div>
            <button className="InventoryItem__addToCart" onClick={()=>{
                addToCart({"id":id,"name":name})}}>Add to cart</button>
        </div>

    </div>
)
Inventory.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceWithoutDiscount: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
    discountPercent: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired
}
export default Inventory;