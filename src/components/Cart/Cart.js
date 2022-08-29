import { getFirestore, addDoc, collection } from 'firebase/firestore'
import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import ItemCart from '../ItemCart/ItemCart'
import './Cart.css'


export default function Cart() {

    const { cartData, totalPrice } = useContext(CartContext);

    const order = {

        buyer: {
            name: 'Sara',
            phone: '78945',
            email: 'sara@gmail.com',
        },
        items: cartData.map(item => ({ id: item.id, tittle: item.title, price: item.price, quantity: item.quantityToAdd })),
        date: new Date(),
        total: totalPrice(),
    }

    const handleClick = () => {

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => console.log(id, order))
    }

    

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
                <button className="styleTotalButton" onClick={handleClick}>EMITIR COMPRA</button>

            </div>
        </div>

    )
}