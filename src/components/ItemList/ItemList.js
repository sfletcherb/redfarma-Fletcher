import Item from '../Item/Item'


export default function ItemList({ productList }) {

    return (

        <div className='styleDivCard'>
            {productList.map((product) => {

                return (

                    <Item key={product.id} img={product.pictureUrl} name={product.title} price={product.price}></Item>
                );


            })}


        </div>


        

    )
        }
