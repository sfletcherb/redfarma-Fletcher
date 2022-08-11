import { useState, useEffect } from 'react';
import './ItemListContainer.css'
import getData from '../Data/Data'
import {getCategory} from '../Data/Data'
import ItemList from '../components/ItemList/ItemList';
import {useParams} from 'react-router-dom';

const Greeting = (props) => {

    return (
        <div className="styleTittle text-center">
            <h2>{props.children} <small class="text-warning"><strong>{props.promo}</strong></small> {props.greeting}</h2>
        </div>

    )
}


function ItemListContainer() {

    const [data, setData] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {

        if(!categoryId){
            getData
            .then((res) => setData(res))
            .catch(err => console.log(err)) 
        }else{
            getCategory(categoryId)
            .then((res) => setData(res))
            .catch(err => console.log(err)) 
        }
        

    },[categoryId]);



    return <>
        <Greeting promo={'Los mejores precios'} greeting={'de toda la oferta disponible en droguerias.'}>Encuentra</Greeting>

        <div>
            <ItemList productList={data}/>
        </div>
    </>
}

export default ItemListContainer;