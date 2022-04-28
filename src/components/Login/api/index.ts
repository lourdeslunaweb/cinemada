import { mapToArray } from "../../../helpers";
import { User } from "../../../types";
import { apiFirebase } from "../../../utils"

type Payload = {
    email: string,
    password: string,
}

const login = async (payload: Payload) => {
    try {
        const response = await apiFirebase.get('/users.json');
        const users: User[] = mapToArray(response.data);
        return users.find((user) => {
            if (user.email === payload.email && user.password === payload.password) {
                return user
            }
            return false
        });
    } catch(e) {
        console.log(e)
    }
}

export { login }