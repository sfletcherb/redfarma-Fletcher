import { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ItemList from '../components/ItemList/ItemList';
import {useParams} from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

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

        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products')
        
        if(categoryId){
            const queryFilter = query(queryCollection, where('category', '==', categoryId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
        }else{
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
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