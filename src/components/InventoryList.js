import React from "react";
import PropTypes from 'prop-types'
import "./InventoryList.scss";
import InventoryItem from "./InventoryItem"

const InventoryList = ({ products,addToCart }) => {

    return (<div className="InventoryList">
        {products.map((product) =>  <InventoryItem key ={product.id} {...product} addToCart={addToCart}   /> )}
    </div>);

}

export default InventoryList;