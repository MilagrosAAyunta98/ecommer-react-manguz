import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Rating, Button } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider'

const ItemDetail = ({ item }) => {
    const { id, title, category, price, stock, image, description } = item;
    const [quantity, setQuantity] = useState(1)
    const [showCount, setShowCount] = useState(true)

    const onAdd = () => {
        setShowCount(false)
    }

    return(
        <div className="container-item-detail">
            <div className="img-detail-container">
                <p>Productos / {category}</p>
                <div className="img-detail">
                <Slider item={item} />
                </div>
            </div>
            <div className="data-detail-container">
                <div> 
                    <div className="data-title-detail-container">
                        <h2>{title}</h2>
                        <p>Item No. {id}</p>
                    </div>
                    <div className="data-price-detail">
                        <Rating name="no-value" value={null} />
                        <p>$ {price}</p>
                        <p>Envio Gratis a todo el pais</p>
                    </div>
                </div>
                <p>{description}</p>
                <p className="stock-product-detail">Stock: {stock} u</p>
                <div className="data-detail-item-count">
                    {showCount ?
                    <ItemCount  
                        onAdd={onAdd} 
                        quantity={quantity}
                        setQuantity={setQuantity}
                        item={item}
                    />
                    :
                    <div className="finish-purchase-container">
                        <Button variant="contained">
                            <Link 
                                className="link-finish-purchase" 
                                to='/cart'
                            >
                                Finalizar Compra
                            </Link>
                        </Button>
                    </div>
                    }
                </div>
            </div>
            
        </div>
    )
}
export default ItemDetail