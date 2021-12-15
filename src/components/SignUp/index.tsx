const SignUp = () => {
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
                        <button type="button" className="btn btn-info">Volver</button>
                    </div>
                    <div className="installation-instructions">
                        <code>
                            <form>
                                <legend>Creá tu cuenta aqui:</legend>
                                <div className="form-group">
                                    <label htmlFor="inputName" className="form-label mt-4">Nombre:</label>
                                    <input required type="text" className="form-control" id="inputName" aria-describedby="nameHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputSurName" className="form-label mt-4">Apellido:</label>
                                    <input required type="text" className="form-control" id="inputSurName" aria-describedby="surnameHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputDate" className="form-label mt-4">Fecha de Nacimiento:</label>
                                    <input required type="date" className="form-control" id="inputDate" aria-describedby="dateHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="InputEmail1" className="form-label mt-4">E-mail:</label>
                                    <input required type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="InputPassword1" className="form-label mt-4">Contraseña:</label>
                                    <input required type="password" className="form-control" id="InputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-info mt-5">Crear</button>
                            </form>
                        </code>
                    </div>
                </div>
            </div>
        </>
    )
}

export { SignUp }