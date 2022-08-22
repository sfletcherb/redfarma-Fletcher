import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../../Context/CartContext'



function ItemDetail ({title, description, price, pictureUrl, id}) {

    const {addProduct}= useContext(CartContext);
    

    const [addCart, setAddCart] = useState(false);

    const onAdd = (quantityToAdd) =>{

        addProduct({id, title, quantityToAdd, price});
        setAddCart(true);
        console.log(quantityToAdd)
    }
    
    return (

        

        <div className='styleItem'>
            <div className='styleImg'>
                <img src={pictureUrl} alt="Medicamento" width="220"
                        height="220"></img>
            </div>
            <div>
                <p>Código: {id}</p>
                <h1>{title}</h1>
                <p>{description}</p>
                <p className='stylePrice'>{price}</p>
                
                {
                    addCart 
                    ? <Link to='/cart'>Terminar mi compra</Link>
                    : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                }
               
            </div>

        </div>

    )
}

export default ItemDetail