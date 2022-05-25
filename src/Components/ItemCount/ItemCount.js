import './ItemCount.css'
import { useState } from "react";
import { Button } from "@mui/material";

const ItemCount = ({ stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
    return(
        <>

        <div className='count-item'>
            <Button onClick={() => {if(count > 1){setCount(count - 1)}}}>-</Button>
            <p>{count}</p>
            <Button onClick={() => {if(count <stock){ setCount(count + 1)}}}>+</Button>
        </div>
        <Button onClick={onAdd => {if(count !=0){console.log(`Cantidad de Items a comprar: ${count}`)}} } variant='contained'>Añadir al Carrito</Button>
        
        </>

    ) 
}

export default ItemCount