import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Rating } from '@mui/material';

const ItemDetail = ({ item }) => {
    const { id, title, category, price, stock, image } = item;
    return(
        <div className="container-item-detail">
            <div className="img-detail-container">
                <p>Productos / {category}</p>
                <div className="img-detail">
                    <img src={image} alt={`Producto ${title}`}/>
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
                        <p>Envios Gratis a todo el Pais</p>
                    </div>
                </div>
                <div className="data-detail-item-count">
                    <ItemCount stock={stock} initial={1}/>
                </div>
            </div>
            
        </div>
    )
}
export default ItemDetail