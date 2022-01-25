import './index.css'

const Login = () => {
    return (
        <>
            <div>
                <div className="titan-background">
                    <span className="stars stars-L" />
                    <span className="stars stars-M" />
                    <span className="stars stars-S" />
                </div>
                <div className="marvellous-container">
                    <div className="header">
                        <h1><span className="title-marvel"></span> <span className="title-studios">CinemADA</span></h1>
                        <h2>
                            ~ Películas De Otro Planeta  ~
                        </h2>
                    </div>
                    <div className="installation-instructions">
                        <code>
                            <form>
                                    <legend>Iniciá tu sesión</legend>
                                    <div className="form-group">
                                        <label htmlFor="InputEmail1" className="form-label mt-4">E-mail:</label>
                                        <input required type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="InputPassword1" className="form-label mt-4">Contraseña:</label>
                                        <input required type="password" className="form-control" id="InputPassword1"/>
                                    </div>
                                    <button type="submit" className="btn btn-info mt-5">Ingresar</button>
                            </form>
                            <p className="mt-5">¿No tenes cuenta? Creá tu cuenta <span>aqui</span></p>
                        </code>
                        <p>Para acceder como admin ingresá con los siguientes datos:</p>
                        <p>Email: admin@ada.com</p>
                        <p>Contraseña: admin</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Login }