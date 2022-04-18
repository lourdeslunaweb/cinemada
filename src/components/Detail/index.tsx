/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import { useItemsApi } from "../../hooks";
import { ImgById, ItemById } from "../../types";
import { Loading } from "../Loading";
import { StarRating } from "../StarRating";

type ParamsType = {
    id: string;
}

const Detail = () => {
    const [itemId, setItemId] = useState<ItemById>();
    const [imgById, setImgById] = useState<ImgById[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { getItemById, getImagesById } = useItemsApi();
    const { id } = useParams<ParamsType>();
    const { goBack } = useHistory();
    useEffect(() => {
        getItemById(id).then((response => {
            setItemId(response)
            setIsLoading(false)
        }))
        getImagesById(id).then((response => {
            setImgById(response)
            console.log('useEffect', response)
        }))
    }, [])
    return (
        <>
            <button onClick={goBack} type="button" className="btn btn-outline-info"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg></button>
            {isLoading ? <Loading /> :
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-row card border-info m-3">
                        <div className="card-header mt-3 d-flex flex-column justify-content-between" style={{ width: '30rem' }}>
                            <h4>{itemId?.title}</h4>
                            <h6>{itemId?.original_title}</h6>
                            <div><StarRating rating={itemId?.vote_average}></StarRating></div>
                            <p>{itemId?.overview}</p>
                            {/* <div>
                                <h5>Trailer:</h5>
                                <iframe width={300} height={150} src="https://www.youtube.com/embed/Y2O4RCdwCGM" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            </div> */}
                        </div>
                        {/* <div className="card-body d-none d-md-flex" style={{ width: '25rem' }}>
                            <img src={`http://image.tmdb.org/t/p/w500${itemId?.poster_path}`} className="card-img-top mt-3" alt="afiche" />
                        </div> */}
                        {imgById?.map((img, index) =>
                            <div key={index} className="card-body d-none d-md-flex" style={{ width: '25rem' }}>
                                <img src={`http://image.tmdb.org/t/p/w500${img.file_path}`} className="card-img-top mt-3" alt="afiche" />
                            </div>)
                        }
                    </div>
                </div>}
        </>
    )
}

export { Detail }