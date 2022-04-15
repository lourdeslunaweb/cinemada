import { Link } from "react-router-dom";

const Pagination =() =>{
    return (
        <div className="d-flex flex-wrap justify-content-center mt-3">
        <ul className="pagination pagination-sm">
            <Link to="/" className="page-link"><li className="page-item">«</li></Link>
            <Link to="/" className="page-link"><li className="page-item">1</li></Link>
            <Link to="/" className="page-link"><li className="page-item">2</li></Link>
            <Link to="/" className="page-link"><li className="page-item">3</li></Link>
            <Link to="/" className="page-link"><li className="page-item">4</li></Link>
            <Link to="/" className="page-link"><li className="page-item">5</li></Link>
            <Link to="/" className="page-link"><li className="page-item">»</li></Link>
        </ul>
    </div>
    )
}

export {Pagination}