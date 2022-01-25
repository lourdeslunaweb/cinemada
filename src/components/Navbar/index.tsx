const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark container mb-3">
            <div className="container-fluid">
                <div>
                    <h1 className="navbar-brand text-info fs-2 mt-3">CinemADA</h1>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse ms-5" id="navbarColor02">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-info rounded-pill m-1">Opcion 1</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-info rounded-pill m-1">Opcion 2</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-info rounded-pill m-1">Opcion 3</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-info rounded-pill m-1">Opcion 4</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-info rounded-pill m-1">Opcion 5</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-info rounded-pill m-1">Opcion 6</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export { Navbar }