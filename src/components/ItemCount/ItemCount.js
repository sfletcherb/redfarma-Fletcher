import { useState, useEffect } from 'react';
import './ItemCount.css'
import swal from 'sweetalert';


const useCounter = (initial = 1, stock = 5, onAdd) => {
    const [counter, setCounter] = useState(parseInt(initial, stock, onAdd));

    const increase = () => setCounter((counter + 1));
    const decrement = () => setCounter(counter - 1);
    onAdd = (quantity) => swal("Confirmado!",`Se ha añadido ${counter} unds a tu carrito`, "success");

    useEffect(() => {
        setCounter(parseInt(initial));

    }, [initial]);

    return {
        counter, increase, decrement, stock, onAdd
    }

}



function ItemCount() {
    const { counter, increase, decrement, stock, onAdd } = useCounter()

    return (
        <div className='styleCounter'>

            <div className='styleCounterDiv'>
                <button className='styleCounter__botonMenos' disabled={counter <= 1} onClick={decrement}>-</button>
                <span>{counter}</span>
                <button className='styleCounter__botonMas disable' disabled={counter >= stock} onClick={increase}>+</button>
            </div>

            <div>
                <button className='styleCounter__botonAñadir' disabled={stock <= 0} onClick={() => onAdd(counter)}>Añadir al carrito</button>
            </div>

        </div>

    )

}

export default ItemCount