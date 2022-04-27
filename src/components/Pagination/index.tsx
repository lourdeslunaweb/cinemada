import { Link, useParams } from "react-router-dom";
import '../../App.css';


type ParamsType = {
    page: string | undefined;
}


const Pagination =() =>{
    const { page } = useParams<ParamsType>();
    let pageNum = Number(page);
    let firstPage;
    if(pageNum === 1) firstPage = 'firstPage'
    return (
        <div className="d-flex flex-wrap justify-content-center mt-3">
        <ul className="pagination pagination-sm">
            <Link to="/" className={`page-link ${firstPage}`}><li className="page-item">«</li></Link>
            <Link to="/" className="page-link"><li className="page-item">{pageNum +1}</li></Link>
            <Link to="/" className="page-link"><li className="page-item">{pageNum +2}</li></Link>
            <Link to="/" className="page-link"><li className="page-item">{pageNum +3}</li></Link>
            <Link to="/" className="page-link"><li className="page-item">{pageNum +4}</li></Link>
            <Link to="/" className="page-link"><li className="page-item">{pageNum +5}</li></Link>
            <Link to="/" className="page-link"><li className="page-item">»</li></Link>
        </ul>
    </div>
    )
}

export {Pagination}