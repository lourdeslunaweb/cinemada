import './index.css'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark container mb-3 bg-nav">
                <div className="container-fluid">
                    <div>
                        <h1 className="navbar-brand text-info fs-2 mt-3">CinemADA</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse ms-5" id="navbarColor02">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link to="/"><button type="button" className="btn btn-outline-info rounded-pill m-1">Home</button></Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/peliculas"><button type="button" className="btn btn-outline-info rounded-pill m-1">Películas</button></Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/series"><button type="button" className="btn btn-outline-info rounded-pill m-1">Series</button></Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/users"><button type="button" className="btn btn-outline-info rounded-pill m-1">Users</button></Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/admin/1"><button type="button" className="btn btn-outline-info rounded-pill m-1">Admin</button></Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/login"><button type="button" className="btn btn-outline-info rounded-pill m-1">Salir</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export { Navbar }