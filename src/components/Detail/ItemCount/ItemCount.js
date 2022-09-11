import { useState, useEffect } from 'react';
import './ItemCount.css'


function ItemCount({initial, stock, onAdd}) {
    
    const [counter, setCounter] = useState(parseInt(initial));

    const increase = () => setCounter((counter + 1));
    const decrement = () => setCounter(counter - 1);
  
    
    useEffect(() => {
        setCounter(parseInt(initial));

    }, [initial]);



    return (
        <div className='styleCounter'>

            <div className='styleCounterDiv'>
                <button className='styleCounter__botonMenos' disabled={counter <= 1} onClick={decrement}>-</button>
                <span>{counter}</span>
                <button className='styleCounter__botonMas disable' disabled={counter >= stock} onClick={increase}>+</button>
            </div>

            <div>
                <button className='styleCounter__botonAñadir' disabled={stock <= 0} onClick={()=> onAdd(counter)}>Añadir al carrito</button>
            </div>

        </div>

    )

}

export default ItemCount