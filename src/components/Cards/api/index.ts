import { Item } from "../../../types";
import { apiFirebase, apiMovie } from "../../../utils";

const getContent = async () => {
    const response = await apiMovie.get('/movie/top_rated');
    return (response.data.results)
};

const addItem = async (item: Item) => {
    await apiFirebase.post("/items.json", item);
};

export { getContent, addItem };