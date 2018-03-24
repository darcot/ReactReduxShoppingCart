import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCartProducts, getTotalItemsLength } from "./../reducers";
import { addToCart, showNotifications } from "./../actions";
import InventoryList from "./../components/InventoryList";
import { Link } from 'react-router-dom'

import "./Inventory.scss";
const InventoryContainer = ({ products, noOfItems, addToCart, showNotifications, itemsLength }) => (<div className="Inventory">
    <heading className="Inventory__heading">
        <h3 className="Label">All Items</h3>
        {noOfItems ?
            <Link to="/orderSummary" className="Gotocart"> Go to cart
        <i className="fa fa-shopping-cart Gotocart__icon"></i>
                ({itemsLength})
        </Link> : ""}
    </heading>
    <hr className="Inventory__heading-seperator" />
    <InventoryList products={products} addToCart={product => {
        addToCart(product.id);
        showNotifications(product.name)
    }} />
</div>);
const mapStateToProps = (state) => ({
    products: getCartProducts(state),
    noOfItems: state.cart.addedIds.length,
    itemsLength: getTotalItemsLength(state)
})

export default connect(
    mapStateToProps, { addToCart, showNotifications })(InventoryContainer);  
