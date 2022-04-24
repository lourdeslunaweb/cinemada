/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useItemsApi, useItemsDB } from "../../hooks";
import { Loading } from "../Loading";
import { StarRating } from "../StarRating";

const DetailBelow = () => {
    const { goBack } = useHistory();
    const { upDateItemsDB, itemsArrDB } = useItemsDB();
    const { isLoading, setIsLoading } = useItemsApi();
    useEffect(() => {
        upDateItemsDB()
        setIsLoading(false)
    }, []);
    return (
        <>
            <div className="mt-5">
                <h2>Además...</h2>
                <div className="d-flex flex-wrap justify-content-center">
                    {isLoading ? <Loading /> : null}
                    {itemsArrDB?.map((item, index) => {
                        return (
                            <div key={index} className="card border-info m-3" style={{ width: '10rem' }}>
                                <div className="card-header mt-1" style={{ height: '4rem' }}><h5>{item.title}</h5></div>
                                <div className="card-body" >
                                    <Link to={`/detail/${item.id}`}>
                                        <img src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} className="card-img-top mt-3" alt="afiche" />
                                        <div className="mt-3"><StarRating rating={item.vote_average}></StarRating></div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <button onClick={goBack} type="button" className="btn btn-outline-info"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg></button>
        </>
    )
}

export { DetailBelow }