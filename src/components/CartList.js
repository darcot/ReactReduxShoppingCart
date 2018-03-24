import React from "react";
import "./CartList.scss";

const CartRow = ({ item, quantityById, productsMap, removeItem, removeQuantity, addToCart }) => {
    const product = productsMap[item];
    return (<tr><td className="CartRow_title" >
        <img className="CartRow_thumbnail" src={product.img_url} width="30" />
        {product.name}
        <i className="fa fa-close remove_item" onClick={() => { removeItem(item) }}></i>
    </td><td>
            <i className="fa fa-minus removequantity" onClick={() => { removeQuantity(item) }}></i>
            {quantityById[item]}

            <i className="fa fa-plus addquantity" onClick={() => { addToCart(item) }}></i>

        </td><td>${product.price * quantityById[item]}</td></tr>)
}



const CartList = ({ productsMap, addedIds, quantityById, removeItem, addToCart, removeQuantity, itemsLength }) => {

    return (<div className="CartList">
        <table className="CartList__table">
            <thead>
                <tr>
                    <th className="CartRow__name">Item({itemsLength})</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr><td className="blankRow"></td></tr>
                {addedIds.map((item) => <CartRow key={item} removeItem={removeItem}
                    item={item} quantityById={quantityById} addToCart={addToCart}
                    removeQuantity={removeQuantity}
                    productsMap={productsMap} />)}
            </tbody>
        </table>
    </div>);

}

export default CartList;