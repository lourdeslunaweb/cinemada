import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import '../../App.css';

type ParamsType = {
    page: string | undefined;
}

type Props = {
    lastPage: number
}

const Pagination: FC<Props> = ({ lastPage }) => {
    const { page } = useParams<ParamsType>();
    let pageNum = Number(page);
    let firstPageClass;
    if (pageNum === 1) firstPageClass = 'firstPage'
    let lastPageClass;
    if (pageNum === lastPage) lastPageClass = 'lastPage'
    return (
        <div className="d-flex flex-wrap justify-content-center mt-3">
                <ul className="pagination pagination-sm">
                    <Link to={`/admin/1`} className={`page-link ${firstPageClass}`}><li className="page-item">      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-skip-backward-fill" viewBox="0 0 16 16">
                        <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z" />
                    </svg></li></Link>
                    <Link to={`/admin/${pageNum - 1}`} className={`page-link ${firstPageClass}`}><li className="page-item">      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-skip-start-fill" viewBox="0 0 16 16">
                        <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0V4z" />
                    </svg></li></Link>
                    <Link to={`/admin/${pageNum}`} className="page-link"><li className="page-item">{pageNum}</li></Link>
                    <Link to={`/admin/${pageNum + 1}`} className={`page-link ${lastPageClass}`}><li className="page-item">      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-skip-end-fill" viewBox="0 0 16 16">
                        <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0V4z" />
                    </svg></li></Link>
                    <Link to={`/admin/${lastPage}`} className={`page-link ${lastPageClass}`}><li className="page-item">      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-skip-forward-fill" viewBox="0 0 16 16">
                        <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5z" />
                    </svg></li></Link>
                </ul>
        </div>
    )
}

export { Pagination }