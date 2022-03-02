import { Link } from "react-router-dom"

const NoUser = () => {
    return (
        <div className="card border-info m-3 d-flex flex-column justify-content-around" style={{ width: '20rem' }}>
            <h5 className="m-3">No hay usuarios registrados</h5>
            <Link to="/"><button type="button" className="btn btn-info m-3">Inicio</button></Link>
        </div>
    )
}

export { NoUser }