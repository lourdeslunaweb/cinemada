/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useItemsApi, useItemsDB } from "../../hooks";
import { Item } from "../../types";
import { Loading } from "../Loading";

const CardsHome = () => {
    const { upDateItemsDB, checkItemDB, uncheckItemDB, itemsArrDB } = useItemsDB();
    const { isLoading, setIsLoading } = useItemsApi();
    useEffect(() => {
        upDateItemsDB()
        setIsLoading(false)
    }, []);
    const isItemChecked = (item: Item) => {
        if (item.checked === true) {
            return true
        }
    }
    const handleCheckItemDB = (id: number) => {
        checkItemDB(id)
    }
    const handleUncheckItemDB = (id: number) => {
        uncheckItemDB(id)
    }

    return (
        <>
            <div className="d-flex flex-wrap justify-content-center">
                {isLoading ? <Loading /> : null}
                {itemsArrDB?.map((item, index) => {
                    return (
                        <div key={index} className="card border-info m-3" style={{ width: '15rem' }}>
                            <div className="card-header mt-1" style={{ height: '3rem' }}><h6>{item.title}</h6></div>
                            <div className="card-body">
                                <img style={{ width: '10rem', height: '14rem' }} src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} className="card-img-top mt-3" alt="afiche" />
                                <button type="button" className="btn btn-outline-info mt-3">Puntaje: <span>{item.vote_average}</span></button>
                            </div>
                            {isItemChecked(item) ?
                                <button type="button" className="btn btn-info" onClick={() => handleUncheckItemDB(item.id)}>      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                </svg></button>
                                :
                                <button type="button" className="btn btn-outline-info" onClick={() => handleCheckItemDB(item.id)}>      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                </svg></button>
                            }
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export { CardsHome }