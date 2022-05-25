import CardItem from '../Card/Card';
import { Grid } from '@mui/material';

const CardList=({title}) =>{
    return(
        <>
            <h2>{title}</h2>
          <Grid container>
            <Grid item md={3}>
              <CardItem title={"Botines Sala"} price={6500} image={"futsal1.jpg"}/>
            </Grid>
            <Grid item md={3}>
              <CardItem title={"Zapatillas de Cuero"} price={4500} image={"zapasdeCuero.jpg"}/>
            </Grid>
            <Grid item md={3}>
              <CardItem title={"Botines Futbol 5"} price={7500} image={"botinesfut5.jpg"}/>
            </Grid>
            <Grid item md={3}>
              <CardItem title={"Botines Futbol 5"} price={7500} image={"fut5blancoynegro.jpg"}/>
            </Grid>
          </Grid>
          </>
    )
}

export default CardList