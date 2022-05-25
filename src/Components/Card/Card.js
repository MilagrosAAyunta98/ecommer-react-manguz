import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ItemCount from '../ItemCount/ItemCount'

const CardItem = ({image, title, price}) => {

    return(
        <Card sx={{ minWidth: 275 }} className="card-item-container">
            <CardContent>
                <div className="card-item"> 
                    <div>
                        <img src={`./${image}`} />
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <div className='count-item'>
                       <ItemCount stock={5} initial={1}></ItemCount>
                     </div>  
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem