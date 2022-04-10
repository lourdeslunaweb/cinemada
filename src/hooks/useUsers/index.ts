import { useState } from "react";
import { mapToArray } from "../../helpers";
import { User } from "../../types";
import { apiFirebase } from "../../utils";
import { useHistory } from "react-router-dom";

const useUsers = () => {
    // *** Const/ Let ***
    const defaultValues = {
        name: "",
        birthdate: "",
        email: "",
        password: "",
        role: "user",
    };
    let history = useHistory();
    // *** Types ***
    type Payload = Omit<User, 'idDB'>;
    // *** States ***
    const [isLoading, setIsLoading] = useState(true)
    const [users, setUsers] = useState<User[]>()
    const [inputs, setInputs] = useState(defaultValues);
    // *** Functions ***
    const addUser = async (data: Payload) => {
        try {
            await apiFirebase.post("/users.json", data);
            history.push("/login")
        } catch (e) {
            console.log(e)
        }
    };
    const getUsers = async (): Promise<User[]> => {
        const response = await apiFirebase.get("/users.json");
        return mapToArray(response.data)
    };
    const upDateUsers = async () => {
        const response = await getUsers()
        setUsers(response)
        setIsLoading(false)
    }
    const deleteUser = async (id: string) => {
        await apiFirebase.delete(`/users/${id}.json`);
        upDateUsers()
    }
    return { addUser , getUsers, upDateUsers, deleteUser, users, isLoading, inputs, setInputs }
}

export { useUsers }