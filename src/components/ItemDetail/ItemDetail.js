import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail ({dataItem}) {

    return (

        <div className='styleItem'>
            <div className='styleImg'>
                <img src={dataItem.pictureUrl} alt="Medicamento" width="220"
                        height="220"></img>
            </div>
            <div>
                <p>Código: {dataItem.id}</p>
                <h1>{dataItem.title}</h1>
                <p>{dataItem.Description}</p>
                <p className='stylePrice'>{dataItem.price}</p>

                <ItemCount />
            </div>

        </div>

    )
}

export default ItemDetail