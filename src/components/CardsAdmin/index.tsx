import { useEffect, useState } from "react"
import { Item } from "../../types";
import { apiFirebase } from "../../utils";
import { Loading} from "../Loading";
import { addItem, getContentFromApi, getContentFromDB } from "./api";

const CardsAdmin = () => {
    const [itemsArrApi, setItemsArrApi] = useState<Item[]>()
    const [itemsArrDB, setItemsArrDB] = useState<Item[]>()
    const [upDateItems, setUpdateItems] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getContentFromApi().then((response) => {
            setItemsArrApi(response)
            setIsLoading(false)
        });
    }, []);
    useEffect(() => {
        getContentFromDB().then((response) => {
            setItemsArrDB(response)
        });
    }, [upDateItems]);
    const isItemSelected = (id: number) => {
        const itemSelected = itemsArrDB?.find(item => item.id === id)
        if (itemSelected) {
            return true
        }
    }
    const handleAddItemToDB = (item: Item) => {
        addItem(item).then(() => setUpdateItems(upDateItems+1))
    }
    const handleDeleteItemFromDB = async (id : number) => {
        const itemToDelete = itemsArrDB?.find(item => item.id === id)
        await apiFirebase.delete(`/items/${itemToDelete?.idDB}.json`)
        .then(() => setUpdateItems(upDateItems+1) )
    }
    return (
        <>
            <div className="d-flex flex-wrap justify-content-center">
                {isLoading ? <Loading /> : null}
                {itemsArrApi?.map((item, index) => {
                    return (
                        <div key={index} className="card border-info m-3" style={{ width: '15rem' }}>
                            <div className="card-header mt-1" style={{ height: '3rem' }}><h6>{item.title}</h6></div>
                            <div className="card-body">
                                <img style={{ width: '10rem', height: '14rem' }} src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} className="card-img-top mt-3" alt="afiche" />
                                <button type="button" className="btn btn-outline-info mt-3">Puntaje: <span>{item.vote_average}</span></button>
                            </div>
                            {isItemSelected(item.id) ?
                                <button type="button" className="btn btn-outline-info" onClick={() => handleDeleteItemFromDB(item.id)}>Eliminar</button>
                                :
                                <button type="button" className="btn btn-info" onClick={() => handleAddItemToDB(item)}>Agregar</button>
                            }
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export { CardsAdmin }