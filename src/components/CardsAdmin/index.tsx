/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { Pagination } from "../Pagination";
import { useItemsApi, useItemsDB } from "../../hooks";
import { Item } from "../../types";
import { Loading } from "../Loading";
import { Link, useParams } from "react-router-dom";
import { StarRating } from "../StarRating";


type ParamsType = {
    page: string | undefined;
}

const CardsAdmin: FC = () => {
    const { upDateItemsApi, isLoading, itemsArrApi, lastPage } = useItemsApi();
    const { upDateItemsDB, addItemToDB, deleteItemFromDB, itemsArrDB } = useItemsDB();
    let { page } = useParams<ParamsType>();
    useEffect(() => {
        upDateItemsApi(Number(page))
    }, [page]);
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
    const handleDeleteItemFromDB = (id: number) => {
        deleteItemFromDB(id)
    }
    return (
        <>
            <Pagination lastPage={lastPage} />
            <div className="d-flex flex-wrap justify-content-center">
                {isLoading ? <Loading /> : null}
                {itemsArrApi?.map((item, index) => {
                    return (
                        <div key={index} className="card border-info m-3" style={{ width: '15rem' }}>
                            <div className="card-header mt-1" style={{ height: '3rem' }}><h6>{item.title}</h6></div>
                            <div className="card-body">
                                <Link to={`/detail/${item.id}`}>
                                    <img style={{ width: '10rem', height: '14rem' }} src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} className="card-img-top mt-3" alt="afiche" /></Link>
                                <div className="mt-3"><StarRating rating={item.vote_average}></StarRating></div>
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
            <Pagination lastPage={lastPage} />
        </>
    )
}

export { CardsAdmin }