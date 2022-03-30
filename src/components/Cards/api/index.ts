import { mapToArray } from "../../../helpers";
import { Item } from "../../../types";
import { apiFirebase, apiMovie } from "../../../utils";

const getContentFromApi = async () => {
    const response = await apiMovie.get('/movie/top_rated');
    return (response.data.results)
};

const getContentFromDB = async () => {
    const response = await apiFirebase.get("/items.json");
    return mapToArray(response.data)
};

const addItem = async (item: Item) => {
    await apiFirebase.post("/items.json", item);
};

export { getContentFromApi, addItem, getContentFromDB };