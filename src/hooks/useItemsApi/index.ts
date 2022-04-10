import { useState } from "react";
import { Item } from "../../types";
import { apiMovie } from "../../utils";


const useItemsApi = () => {
    // *** States ***
    const [itemsArrApi, setItemsArrApi] = useState<Item[]>()
    const [isLoading, setIsLoading] = useState(true)
    // *** Functions ***
    const getItemsFromApi = async (): Promise<Item[]> => {
        const response = await apiMovie.get('/movie/top_rated');
        return (response.data.results)
    };
    const upDateItemsApi = async () => {
        const response = await getItemsFromApi()
        setItemsArrApi(response)
        setIsLoading(false)
    }
    return { getItemsFromApi, upDateItemsApi, isLoading, itemsArrApi};
}

export { useItemsApi }