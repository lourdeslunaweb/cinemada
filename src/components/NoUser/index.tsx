import { Link } from "react-router-dom"

const NoUser = () => {
    return (
        <div className="card border-info m-3" style={{ width: '20rem' }}>
            <div className="card-header mt-1"><h5>No hay usuarios registrados</h5>
                <Link to="/"><button type="button" className="btn btn-info mt-3">Inicio</button></Link>
            </div>
        </div>
    )
}

export { NoUser }