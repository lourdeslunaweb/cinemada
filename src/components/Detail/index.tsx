const Detail = () => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-row card border-info m-3">
                    <div className="card-header mt-3" style={{ width: '30rem' }}>
                        <h4>Título de la pelicula o serie</h4>
                        <p>Puntaje:Lorem</p>
                        <p>Sinapsis: Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos reiciendis tenetur deleniti velit perspiciatis sit voluptate maxime iusto. Eius facilis quam nostrum ratione pariatur. Similique necessitatibus explicabo cumque in.</p>
                        <p>Fecha de lanzamiento: 00/00/0000</p>
                        <p>Lenguaje original: en</p>
                        <div>
                            <h5>Trailer:</h5>
                            <iframe width={300} height={150} src="https://www.youtube.com/embed/Y2O4RCdwCGM" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </div>
                    </div>
                    <div className="card-body d-none d-sm-flex"  style={{ width: '45rem' }}>
                        <img src="https://www.latercera.com/resizer/n83tHvXcmn1O_aG7YCmKE_krWLU=/arc-anglerfish-arc2-prod-copesa/public/RFIZQUAZPNH4VNHQYUUY3UCLYQ.jpg" className="card-img-top mt-3 img-fluid" alt="afiche" />
                    </div>
                </div>
            </div>
        </>
    )
}

export { Detail }