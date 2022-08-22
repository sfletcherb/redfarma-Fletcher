import ItemDetail from '../components/ItemDetail/ItemDetail'
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore, doc, getDoc} from 'firebase/firestore'


function ItemDetailContainer () {

    const [data, setData] = useState(); // Actualiza el estado interno de un componente
    const {id} = useParams();

    useEffect(()=>{

        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', id)
        getDoc(queryDoc)
        .then(res => setData({id:res.id, ...res.data()}))
    },[id])


    return(

        <ItemDetail {...data}/>
    )
}

export default ItemDetailContainer