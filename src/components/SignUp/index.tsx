import { FC, FormEvent, useState } from "react"
import { Link, useHistory } from "react-router-dom";
import { signup } from "./api";

const defaultValues = {
    name: "",
    birthdate: "",
    email: "",
    password: "",
    role: "user",
};

const SignUp: FC = () => {
    const [inputs, setInputs] = useState(defaultValues);
    let history = useHistory();
    const handleSubmit = (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        signup(inputs)
        history.push("/login")
    }
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
                        <Link to="/login"><button type="button" className="btn btn-info">Volver</button></Link>
                    </div>
                    <div className="installation-instructions">
                        <code>
                            <form onSubmit={handleSubmit}>
                                <legend>Creá tu cuenta aqui:</legend>
                                <div className="form-group">
                                    <label htmlFor="inputName" className="form-label mt-4">Nombre Completo:</label>
                                    <input required type="text" className="form-control" id="inputName" aria-describedby="nameHelp" value={inputs.name}
                                        onChange={(e) => setInputs({ ...inputs, name: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputDate" className="form-label mt-4">Fecha de Nacimiento:</label>
                                    <input required type="date" className="form-control" id="inputDate" aria-describedby="dateHelp" value={inputs.birthdate}
                                        onChange={(e) => setInputs({ ...inputs, birthdate: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="InputEmail1" className="form-label mt-4">E-mail:</label>
                                    <input required type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" value={inputs.email}
                                        onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="InputPassword1" className="form-label mt-4">Contraseña:</label>
                                    <input required type="password" className="form-control" id="InputPassword1"  value={inputs.password}
                                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}/>
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