/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useItemsApi, useItemsDB } from "../../hooks";
import { Item } from "../../types";
import { Loading} from "../Loading";

const CardsAdmin = () => {
    const {upDateItemsApi, isLoading, itemsArrApi} = useItemsApi();
    const {upDateItemsDB, addItemToDB, deleteItemFromDB, itemsArrDB} = useItemsDB();
    useEffect(() => {
        upDateItemsApi();
    }, []);
    useEffect(() => {
        upDateItemsDB()
    }, []);
    const isItemSelected = (id: number) => {
        const itemSelected = itemsArrDB?.find(item => item.id === id)
        if (itemSelected) {
            return true
        }
    }
    const handleAddItemToDB = (item: Item) => {
        addItemToDB(item)
    }
    const handleDeleteItemFromDB = (id : number) => {
        deleteItemFromDB(id)
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