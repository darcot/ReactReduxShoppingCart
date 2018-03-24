import React from "react";
import "./PriceTicker.scss";

const PriceTicker = ({ totalPrice, totalDiscount, itemsLength ,typeDiscount}) => {

    return (<div className="PriceTicker">
        <h3 className="heading">Total</h3>
        <table className="PriceTicker__Table">
            <tbody>
                <tr>
                    <td>Items({itemsLength})</td>
                    <td>:</td>
                    <td>${totalPrice}</td>

                </tr>
                <tr>
                    <td>Discount</td>
                    <td>:</td>
                    <td> - ${totalDiscount}</td>

                </tr>
                <tr>
                    <td>Type Discount</td>
                    <td>:</td>
                    <td> - ${typeDiscount}</td>

                </tr>
                <tr className="PriceTicker__Table-lastrow">
                    <td>Order Total</td>
                    <td>:</td>
                    <td >  ${totalPrice-typeDiscount-totalDiscount}</td>

                </tr>
            </tbody>

        </table>


    </div>);

}

export default PriceTicker;