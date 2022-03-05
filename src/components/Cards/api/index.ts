// import { mapToArray } from "../../../helpers/mapToArray";
import { apiMovie } from "../../../utils";


const getContent = async ()  => {
    const response = await apiMovie.get('/movie/top_rated');
    return (response.data.results)
};

export { getContent };