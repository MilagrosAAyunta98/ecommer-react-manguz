import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ItemCount from '../ItemCount/ItemCount'
import Modal from '../Modal/Modal'
import { useState } from 'react';
import { Button } from '@mui/material';

const CardItem = ({image, title, price,}) => {
    const [open, setOpen] = useState (false)
    const handleClose = () => {
        setOpen(false)
    }

    return(
        <Card sx={{ minWidth: 275 }} className="card-item-container">
            <CardContent>
                <div className="card-item"> 
                    <div>
                        <img src={`./${image}`} />
                        <Button variant={'contained'} className="card-btn-details">Deralles</Button>
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <div className='count-item'>
                       <ItemCount stock={5} initial={1}></ItemCount>
                     </div>  
                </div>
            </CardContent>
            {open && (
                <Modal handleClose={handleClose} open={open}>
                    <h2>Detalles</h2>
                    <img src={`./${image}`} alt={"producto"}></img>
                </Modal>
            )}
        </Card>
    )
}

export default CardItem