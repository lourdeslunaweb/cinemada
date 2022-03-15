import { useEffect, useState } from "react"
import { Item } from "../../types";
import { Loading } from "../Loading";
import { addItem, getContent } from "./api";

const Cards = () => {
    const [itemsArr, setItemsArr] = useState<Item[]>()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getContent().then((response) => {
            setItemsArr(response)
            setIsLoading(false)
        });
    }, []);
    const handleAddItem = (item: Item) => {
        addItem(item)
    }
    const handleDeleteItem = (item: Item) => {
        console.log(item)
    }
    return (
        <>
            <div className="d-flex flex-wrap justify-content-center">
                {isLoading ? <Loading /> : null}
                {itemsArr?.map((item, index) => {
                    return (
                        <div key={index} className="card border-info m-3" style={{ width: '15rem' }}>
                            <div className="card-header mt-1" style={{ height: '3rem' }}><h6>{item.title}</h6></div>
                            <div className="card-body">
                                <img style={{ width: '10rem', height: '14rem' }} src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} className="card-img-top mt-3" alt="afiche" />
                                <button type="button" className="btn btn-outline-info mt-3">Puntaje: <span>{item.vote_average}</span></button>
                            </div>
                                <button type="button" className="btn btn-outline-info" onClick={() => handleDeleteItem(item)}>Eliminar</button>
                                <button type="button" className="btn btn-info" onClick={() => handleAddItem(item)}>Agregar</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export { Cards }