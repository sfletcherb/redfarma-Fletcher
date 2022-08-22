import Card from 'react-bootstrap/Card';
import './Item.css';
import {Link} from 'react-router-dom'


function Item({ id, img, name, price }) {

    

    return (

        <div className='styleDivCard'>

            <Card className='styleCard' key={id}>
                <Card.Img variant="top" src={img} className='styleCardImg' width='100'height='170'padding="5px"/>
                <Card.Body>
                    <Card.Title className='text-center'>{name}</Card.Title>
                    <Card.Text className='text-center'>
                        ${price}
                    </Card.Text>
                    <Link to={`/detail/${id}`} className='styleLink'>
                    <button className='styleCardBoton'>Ver detalle</button>
                    </Link>
                </Card.Body>
            </Card>

        </div>

    )

}

export default Item