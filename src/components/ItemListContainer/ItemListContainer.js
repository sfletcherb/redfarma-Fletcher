import { useState, useEffect } from 'react';
import './ItemListContainer.css'
import getData from '../../Data/Data'
import ItemList from '../ItemList/ItemList';


const Greeting = (props) => {

    return (
        <div className="styleTittle text-center">
            <h2>{props.children} <small class="text-warning"><strong>{props.promo}</strong></small> {props.greeting}</h2>
        </div>

    )
}


function ItemListContainer() {

    const [data, setData] = useState([])

    useEffect(() => {
        getData
            .then((resp) => setData(resp))
            .catch(err => console.log(err))

    },[]);



    return <>
        <Greeting promo={'Los mejores precios'} greeting={'de toda la oferta disponible en droguerias.'}>Encuentra</Greeting>

        <div>
            <ItemList productList={data}/>
        </div>
    </>
}

export default ItemListContainer;