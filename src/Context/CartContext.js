import React, { useState } from "react";

export const CartContext = React.createContext([]);

export default function CartCustomContext({children}){

    const [cart, setCart] = useState([]);


    const addProduct = (item, quantity) =>{
        if(isInCart(item.id)){
            setCart(cart.map(product =>{
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            }));
        }else{
            setCart([...cart, {...item,quantity}]);
        }
    }


    const clearCart = () => setCart([]);

    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }

    const removeProduct = (id) => {
        return setCart(cart.filter(product => product.id !== id));
    }

    const totalPrice = () =>{
        return (
            cart.reduce((prev, act)=> prev + act.quantityToAdd * act.price,0)
        )
    }

    const totalProducts = () => {
        
        return(
            cart.reduce((accumulator, currentProduct) => accumulator + currentProduct.quantityToAdd,0)
        )
    }

    console.log(cart)

    return(
        <CartContext.Provider value={{clearCart, isInCart, removeProduct, addProduct, totalPrice, totalProducts, cartData: cart}}>

            {children}

        </CartContext.Provider>
    )
}