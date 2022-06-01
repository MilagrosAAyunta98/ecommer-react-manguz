import { useEffect, useState} from "react"
import Productos from "../ItemMock/ItemMock"
import ItenDetail from "../ItenDetail/ItenDetail"

const ItenDetailContainer = () =>{
    const [product , setProduct] = useState([])
    const getItem = () =>{
        return new Promise( (resolve,reject) => {
            setTimeout(() =>{
                resolve(Productos)
            }, 2000)
        })
    }

    useEffect(() =>{
        getItem()
        .then((res) =>{
            console.log("respuesta getItem", res)
            setProduct(res)
        })
    })
    return(
        <>
        <div>Contenedor</div>
        <ItenDetail data={product}/>
        
        </>
        
    )
}

export default ItenDetailContainer