const Detail = () => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-row card border-info m-3">
                    <div className="card-header mt-3 d-flex flex-column justify-content-between" style={{ width: '30rem' }}>
                        <h4>Título de la pelicula o serie</h4>
                        <p>Puntaje:Lorem</p>
                        <p>Sinapsis: Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos reiciendis tenetur deleniti velit perspiciatis sit voluptate maxime iusto.</p>
                        <p>Fecha de lanzamiento: 00/00/0000</p>
                        <p>Lenguaje original: en</p>
                        <div>
                            <h5>Trailer:</h5>
                            <iframe width={300} height={150} src="https://www.youtube.com/embed/Y2O4RCdwCGM" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </div>
                    </div>
                    <div className="card-body d-none d-md-flex" style={{ width: '45rem' }}>
                        <img src="https://www.latercera.com/resizer/n83tHvXcmn1O_aG7YCmKE_krWLU=/arc-anglerfish-arc2-prod-copesa/public/RFIZQUAZPNH4VNHQYUUY3UCLYQ.jpg" className="card-img-top mt-3" alt="afiche" />
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-outline-info"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg></button>
        </>
    )
}

export { Detail }