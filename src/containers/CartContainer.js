import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import "./CartContainer.scss";
import { getProductsMap, getTotalPriceAndDiscount, itemsLength, getTotalItemsLength } from "./../reducers";
import { Link } from 'react-router-dom'
import CartList from './../components/CartList';
import PriceTicker from './../components/PriceTicker';
import { removeItem, addToCart, removeQuantity } from "./../actions"

const CartContainer = ({ productsMap, addedIds, quantityById, totalPrice,
    totalDiscount, typeDiscount, itemsLength, removeItem , addToCart, removeQuantity}) => (<div className="Inventory">
        <heading className="Inventory__heading"><Link to="/"><i className="fa fa-angle-left BackToHome"></i></Link>
            <h3 className="Label">Order Summary</h3>
        </heading>
        <hr className="Inventory__heading-seperator" />
        <div className="CardContainer-wrapper" >
            <CartList productsMap={productsMap} addedIds={addedIds} quantityById={quantityById}
                removeItem={removeItem}
                addToCart={addToCart}
                removeQuantity={removeQuantity}
                itemsLength={itemsLength}
            />
            <PriceTicker totalPrice={totalPrice} totalDiscount={totalDiscount} typeDiscount={typeDiscount} itemsLength={itemsLength} />
        </div>

    </div>);
const mapStateToProps = (state) => ({
    productsMap: getProductsMap(state),
    addedIds: state.cart.addedIds,
    quantityById: state.cart.quantityById,
    ...getTotalPriceAndDiscount(state),
    itemsLength: getTotalItemsLength(state)
})

export default connect(
    mapStateToProps, { removeItem, addToCart, removeQuantity })(CartContainer);  
