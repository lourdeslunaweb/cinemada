import { useState } from "react";
import { Item, ItemById } from "../../types";
import { apiMovie } from "../../utils";


const useItemsApi = () => {
    // *** States ***
    const [itemsArrApi, setItemsArrApi] = useState<Item[]>()
    const [isLoading, setIsLoading] = useState(true)
    // *** Functions ***
    const getItemsFromApi = async (page: number): Promise<Item[]> => {
        const response = await apiMovie.get(`/movie/top_rated?page=${page}`);
        return (response.data.results)
    };
    const upDateItemsApi = async (page : number) => {
        const response = await getItemsFromApi(page)
        setItemsArrApi(response)
        setIsLoading(false)
    };
    const getItemById = async (id: number | string): Promise<ItemById> => {
        const response = await apiMovie.get(`/movie/${id}`)
        return response.data
    };
    return { getItemsFromApi, upDateItemsApi, getItemById, isLoading, setIsLoading, itemsArrApi };
}

export { useItemsApi }