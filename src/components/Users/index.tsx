import { FC, useEffect, useState } from "react"
import { User } from "../../types"
import { getUsers } from "./api"
import moment from 'moment'
import { Loading, NoUser } from ".."
import { apiFirebase } from "../../utils/axios"

const Users: FC = () => {
    const [users, setUsers] = useState<User[]>()
    const [upDateUsers, setUpdateUsers] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getUsers().then((response) => {
            setUsers(response);
            const filteredUsers = response.filter(user => user.role === 'user')
            setUsers(filteredUsers)
            setIsLoading(false)
        });
    }, [upDateUsers]);
    const handleDeleteUser = async (id: string) => {
        await apiFirebase.delete(`/users/${id}.json`)
            .then(() => setUpdateUsers(upDateUsers+1) )
    }
    return (
        <>
            <div className="d-flex flex-wrap justify-content-center">
                {isLoading ? <Loading /> : null}
                {users?.length === 0 ? <NoUser /> : null}
                {users?.map((user, index) => {
                    return (
                        <div key={index} className="card border-info m-3" style={{ maxWidth: '20rem' }}>
                            <div className="card-header"><h5>{user.name}</h5></div>
                            <div className="card-body">
                                <p className="card-text">Email: <span>{user.email}</span></p>
                                <p className="card-text">Fecha de nacimiento: <span>{moment(user.birthdate).format("DD-MM-YYYY")}</span></p>
                            </div>
                            <button type="button" className="btn btn-info" onClick={() => handleDeleteUser(user.idDB)}><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg></button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export { Users }