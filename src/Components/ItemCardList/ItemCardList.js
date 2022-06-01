import ItemCard from '../ItemCard/ItemCard';
import { Grid } from '@mui/material';

const ItemCardList=({title}) =>{
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
      title : 'Zapatillas de Cuero',
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
    resolve(productos)
  })
}
getProducts()
.then((res)=>{
  console.log("Respuesta : ",res)
})
.catch( (err)=>{
  console.log("error en la llamada de la promesa")
})

    return(
        <>
            <h2>{title}</h2>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <ItemCard title={"Botines Sala"} price={6500} image={"futsal1.jpg"}/>
            </Grid>
            <Grid item md={3}>
              <ItemCard title={"Zapatillas de Cuero"} price={4500} image={"zapasdeCuero.jpg"}/>
            </Grid>
            <Grid item md={3}>
              <ItemCard title={"Botines Futbol 5"} price={7500} image={"botinesfut5.jpg"}/>
            </Grid>
            <Grid item md={3}>
              <ItemCard title={"Botines Futbol 5"} price={7500} image={"fut5blancoynegro.jpg"}/>
            </Grid>
          </Grid>
          </>
    )
}

export default ItemCardList