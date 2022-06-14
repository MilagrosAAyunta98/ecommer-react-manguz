import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import productsArray from '../../utils/productsMocks';
import Spinner from '../Spinner/Spinner';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loadingProducts, setLoadingProducts] = useState(true)
    const { categoryId } = useParams()

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productsArray)
            }, 2000)
        })
    }

    useEffect(() => {
        setProducts([])
        setLoadingProducts(true)
        getProducts()
        .then((res) => {
            setProducts([])
            categoryId === undefined ? setProducts(res) : productsFilter(res)
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
        setLoadingProducts(false)
        })
    }, [categoryId])

    const productsFilter = (array) => {
        return array.map( (item) => {
            return item.category === categoryId && setProducts(product => [...product, item])       
        })
    }

    const title2 = () => categoryId ? `/ ${categoryId}` : "Destacados"

    return (
        <div>
            { loadingProducts ? (
                <Spinner />
            ):(
                    <ItemList title={`Productos ${title2()}`} items={products} />
            )}
        </div>
    )
}


export default ItemListContainer