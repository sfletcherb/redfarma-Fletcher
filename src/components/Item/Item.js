
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount'
import './Item.css';

function Item({ key, img, name, price }) {

    return (

        <div className='styleDivCard'>

            <Card className='styleCard' key={key}>
                <Card.Img variant="top" src={img} className='styleCardImg' />
                <Card.Body>
                    <Card.Title className='text-center'>{name}</Card.Title>
                    <Card.Text className='text-center'>
                        ${price}
                    </Card.Text>
                    
                    <ItemCount />
                </Card.Body>
            </Card>

        </div>

    )

}

export default Item