import './ItemListContainer.css'

const Greeting = (props) => {

    return (
        <div className="styleTittle text-center">
            <h2>{props.children} <small class="text-warning"><strong>{props.promo}</strong></small> {props.greeting}</h2>
        </div>

    )
}


function ItemListContainer() {
    return <>
        <Greeting promo={'Los mejores precios'} greeting={'de toda la oferta disponible en droguerias.'}>Encuentra</Greeting>

    </>
}

export default ItemListContainer;