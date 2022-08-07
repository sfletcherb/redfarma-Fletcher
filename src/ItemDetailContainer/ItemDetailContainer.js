import ItemDetail from '../components/ItemDetail/ItemDetail'
import { useState, useEffect } from 'react';

const productDolex = {
    "id":"01",
    "title":"Dolex",
    "Description":"Alivio del dolor y la fiebre con rápida acción x 24 Tabletas recubiertas",
    "price":"$6.500",
    "pictureUrl":"https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/es_CO/dolex-products/ninos2-jarabe/Ninos_455x455.png?auto=format"
}


function ItemDetailContainer () {

    const [data, setData] = useState({});

    useEffect(()=>{

        const getItem = new Promise(resolve =>{

            setTimeout(() =>{
                resolve(productDolex);
            }, 2000);
        }); 

        getItem.then(res => setData(res));
    },[])


    return(

        <ItemDetail dataItem={data}/>
    )
}

export default ItemDetailContainer