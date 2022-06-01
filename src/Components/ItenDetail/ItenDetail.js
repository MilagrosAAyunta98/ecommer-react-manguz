const ItenDetail = ({data}) => {
    console.log("Data", data)
    return(
        <div>
        <h2>{data.title}</h2>
        <p>precio: ${data.price}</p>
        <img src={`./${data.image}`} ></img>
        <p>{data.description}</p>
        <p>Stock:{data.stock}</p>
        </div>
    )
}

export default ItenDetail