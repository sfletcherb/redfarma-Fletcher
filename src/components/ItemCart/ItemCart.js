import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import './ItemCart.css'

const ItemCart = ({ item }) => {

    const { removeProduct } = useContext(CartContext)

    return (
        <>
        
        <div className="styleCart">
            <div>
            <p className="styleTitle">Detalles:</p>
                <p>ID: {item.id}</p>
                <p>Título: {item.title}</p>
                <p>Cant.: {item.quantityToAdd}</p>
                <p>Precio: {item.price}</p>
                <p>Subtotal: {item.price*item.quantityToAdd}</p>
                <button className="style__botonAñadir" onClick={() => removeProduct(item.id)}>Eliminar</button>
            </div>


        </div>
        </>
    )


}

export default ItemCart