import { User } from "../../../types";
import { apiFirebase } from "../../../utils";

type Payload = Omit<User, 'id'>;

const signup = async (data: Payload) => {
    try {
        await apiFirebase.post("/users.json", data);
    } catch (e) {
        console.log(e)
    }
};

export { signup };