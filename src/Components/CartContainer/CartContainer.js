import './CartContainer.css';
import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import CartItems from '../CartItems/CartItems';
import Modal from '../Modal/Modal'
import { addDoc, collection } from 'firebase/firestore'
import db from '../../utils/firebaseConfig'

import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom"


const CartContainer = () => {
    const { cartListItems, clearCart, totalCartPrice } = useContext(CartContext)

    const [showModal, setShowModal] = useState(false)
    
    const [success, setSuccess] = useState()

    const navigate = useNavigate()

    const finishOrder = () => {
        navigate('/')
    }

    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map( item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
            }
        } ),
        total: totalCartPrice()
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.preventDefault())
        setOrder({...order, buyer: formValue})
        saveData({...order, buyer: formValue})
    }

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    const saveData = async (newOrder) => {
        const orderFirebase = collection(db, 'orders')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        setSuccess(orderDoc.id)
        clearCart()
    }

    return (
        <div>
            {console.log(order)}
            <h2 className="cart-title">Carrito de Compras</h2>
            <div className="cart-content">
                {cartListItems.length === 0 &&
                    <div className="cart-empty">
                        <ShoppingCartIcon fontSize="large" />
                        <p>Tu Carrito Est?? Vac??o!</p>
                    </div>
                }
                <CartItems />
            </div>
            {cartListItems.length !== 0 && (
                <div>
                    <div className="cart-accions-button-container">
                        <Button
                            variant="contained"
                            onClick={() => setShowModal(true)}
                        >
                            Comprar Ahora
                        </Button>
                        <Button
                            onClick={() => clearCart()}
                            variant="contained"
                            color="error"
                        >
                            Vaciar Carrito
                        </Button>
                    </div>
                    <p className="total-cart-price">Total: ${totalCartPrice()}</p>
                </div>
            )}
            <div className="continue-shopping-button-container">
                <Button
                    variant="contained"
                    color="success"
                >
                    <Link to="/" className="continue-shopping-link">Continuar Comprando</Link>
                </Button>
            </div>
            <Modal 
                title={success ? 'Compra exitosa' : 'Formulario'} 
                open={showModal} 
                handleClose={() => setShowModal(false)}
            >
                {success ? (
                    <div>
                        La order se genero con exito!
                        Numero de orden: {success}
                        <button onClick={finishOrder}>Aceptar</button>
                    </div>
                ) : (
                    <form className="form-contact" onSubmit={handleSubmit}>
                        <TextField
                            id="outlined-basic"
                            name="name"
                            label="Nombre y Apellido"
                            variant="outlined"
                            value={formValue.name}
                            onChange={handleChange}
                        />
                        <TextField
                            id="outlined-basic"
                            name="phone"
                            label="Telefono"
                            variant="outlined"
                            value={formValue.phone}
                            onChange={handleChange}
                        />
                        <TextField
                            id="outlined-basic"
                            name="email"
                            label="Mail"
                            value={formValue.email}
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <button type="submit">Enviar</button>
                    </form>
                )}
            </Modal>
        </div>
    )
}



export default CartContainer