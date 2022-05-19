//UpperCamelCase
import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import CartWidget from '../CartWidget/CartWidget';
export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         <IconButton color="inherit">
          <MenuIcon></MenuIcon>
        </IconButton>
          <Typography variant="h6" component="div"sx={{ flexGrow: 1 }} >
            Manguz
          </Typography>
          <ul >
            <li>
              <a href='#'> Inicio</a>
            </li>
            <li>
              <a href='#'> Productos </a>
            </li>
            <li>
              <a href='#'>Contacto</a>
            </li>
          </ul>
          <Button variant="text" color="inherit" >Carrito</Button>
          <CartWidget/>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}