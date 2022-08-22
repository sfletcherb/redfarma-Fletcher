import { FaCartPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './CartWidget.css';
import {CartContext} from '../../Context/CartContext'
import {useContext} from 'react'

function CartWidget() {

    const{totalProducts} = useContext(CartContext)
    return <>

        <div >
            <Link to={'/cart'} className='stylesCar'>
            <FaCartPlus />
            </Link>
            <span className='numCart'>{totalProducts() || ''}</span>
        </div>


    </>

}

export default CartWidget