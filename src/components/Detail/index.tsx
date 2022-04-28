/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import { useItemsApi } from "../../hooks";
import { ItemById } from "../../types";
import { Loading } from "../Loading";
import { StarRating } from "../StarRating";

type ParamsType = {
    id: string;
}

const Detail = () => {
    const [itemId, setItemId] = useState<ItemById>();
    const [isLoading, setIsLoading] = useState(true);
    const { getItemById } = useItemsApi();
    const { id } = useParams<ParamsType>();
    const { goBack } = useHistory();
    useEffect(() => {
        getItemById(id).then((response => {
            setItemId(response)
            setIsLoading(false)
            window.scroll(50, 50);
        }))
    }, [id])
    return (
        <>
            <button onClick={goBack} type="button" className="btn btn-outline-info"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg></button>
            {isLoading ? <Loading /> :
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column justify-content-center align-items-center flex-sm-row-reverse card border-info m-3">
                        <img style={{ width: '20rem' }} src={`http://image.tmdb.org/t/p/w500${itemId?.poster_path}`} className="card-img-top img-fluid m-3" alt="poster" />
                        <div className="card-header mt-3 d-flex flex-column justify-content-between text-wrap" style={{ width: '18rem' }}>
                            <h4>{itemId?.title}</h4>
                            <h6>{itemId?.original_title}</h6>
                            <div><StarRating rating={itemId?.vote_average}></StarRating></div>
                            <p className="text-wrap mt-3">{itemId?.overview}</p>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export { Detail }