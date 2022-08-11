import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail ({title, description, price, pictureUrl, id}) {

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

                <ItemCount />
            </div>

        </div>

    )
}

export default ItemDetail