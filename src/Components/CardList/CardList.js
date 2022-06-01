import CardItem from '../Card/Card';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';

const CardList=({title}) =>{
  const [products, setProducts] = useState([])
  const productos =[
    {
      title : 'Botines Sala',
      price : 6500,
      image : 'futsal1.jpg',
      description : '',
      stock : 1,
      idc : 1

    },
    {
      title : 'Botines Futbol 5',
      price : 7500,
      image : 'botinesfut5.jpg',
      description : 'hola',
      stock : 2,
      id : 2
    },
    {
      title : 'Zapatillas',
      price : 5500,
      image : 'zapasdeCuero.jpg',
      description : 'hola',
      stock : 2,
      talle : 41,
      id : 3
    },
]
const getProducts = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => (
      resolve(productos)
    ), 2000)
  })
}
useEffect( () => {
  getProducts()
  .then((res)=>{
    console.log("Respuesta : ",res)
    setProducts(res)
  })
  .catch( (err)=>{
    console.log("error en la llamada de la promesa")
  })
  .finally( () =>{
    console.log("Termino la promesa")
  })
},[])



    return(
        <>
            <h2>{title}</h2>
            {console.log("state products", products)}
          <Grid container spacing={2}>
            {
              products.map( (producto) => {
                const {title, price, image, stock, id} = producto
                return(
            <Grid item md={3} key={id}>
              <CardItem title={title} price={price} image={image} stock={stock}/>
            </Grid>
                  
                )
              })
            }
            
          </Grid>
          </>
    )
}

export default CardList