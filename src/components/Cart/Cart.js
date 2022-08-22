import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import ItemCart from '../ItemCart/ItemCart'
import './Cart.css'


export default function Cart() {

    const { cartData, totalPrice } = useContext(CartContext);


    return (

        <div>
            {
                (cartData.length > 0) ? cartData.map((item) => {
                    return <ItemCart key={item.id} id={item.id} item={item} />
                })
                    : "No hay elementos en el Cart"

            }
            <div className="styleTotalPrice">
                Total compra: ${totalPrice()}
            </div>
        </div>

    )
}