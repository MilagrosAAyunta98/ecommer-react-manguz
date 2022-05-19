import './CartWidget.css';
import { IconButton } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return (
    <div className="cart-widget">
        <IconButton>
            <ShoppingCart></ShoppingCart>
        </IconButton>
    <div className="qty-display">0</div>
    </div>
    );
};

export default CartWidget;
