import Card from 'react-bootstrap/Card';
import './Item.css';

function Item({ id, img, name, price }) {

    return (

        <div className='styleDivCard'>

            <Card className='styleCard' key={id}>
                <Card.Img variant="top" src={img} className='styleCardImg' width='100'height='150'/>
                <Card.Body>
                    <Card.Title className='text-center'>{name}</Card.Title>
                    <Card.Text className='text-center'>
                        ${price}
                    </Card.Text>
                    <button className='styleCardBoton'>Ver detalle</button>
                </Card.Body>
            </Card>

        </div>

    )

}

export default Item