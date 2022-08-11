import ItemDetail from '../components/ItemDetail/ItemDetail'
import { useState, useEffect } from 'react';
import {getItem} from '../Data/Data';
import {useParams} from 'react-router-dom';



function ItemDetailContainer () {

    const [data, setData] = useState();
    const {id} = useParams();

    useEffect(()=>{

        getItem(id)
        .then((data) => setData(data))
        .catch(err => console.log(err))
    },[id])


    return(

        <ItemDetail {...data}/>
    )
}

export default ItemDetailContainer