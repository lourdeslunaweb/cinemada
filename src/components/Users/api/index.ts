import { mapToArray } from "../../../helpers/mapToArray";
import { User } from "../../../types";
import { apiFirebase } from "../../../utils";


const getUsers = async (): Promise<User[]> => {
    const response = await apiFirebase.get("/users.json");
    return mapToArray(response.data)
};

export { getUsers };