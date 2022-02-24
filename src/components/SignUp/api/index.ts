import { apiFirebase } from "../../../utils";

type Payload = {
    name: string;
    birthdate: string;
    password: string;
    role: string;
};

const signup = async (data: Payload) => {
    await apiFirebase.post("/users.json", data);
};

export { signup };