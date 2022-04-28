import { useState } from "react";
import { Item, ItemById, Results } from "../../types";
import { apiMovie } from "../../utils";


const useItemsApi = () => {
    // *** States ***
    const [itemsArrApi, setItemsArrApi] = useState<Item[]>()
    const [isLoading, setIsLoading] = useState(true)
    const [lastPage, setLastPage] = useState<number>(0)

    // *** Functions ***
    const getItemsFromApi = async (page: number): Promise<Results> => {
        const response = await apiMovie.get(`/movie/top_rated?page=${page}`);
        return response.data
    };
    const upDateItemsApi = async (page: number) => {
        const response = await getItemsFromApi(page)
        setItemsArrApi(response.results)
        setLastPage(response.total_pages)
        setIsLoading(false)
    };
    const getItemById = async (id: number | string): Promise<ItemById> => {
        const response = await apiMovie.get(`/movie/${id}`)
        return response.data
    };
    return {
        getItemsFromApi,
        upDateItemsApi,
        getItemById,
        isLoading,
        setIsLoading,
        itemsArrApi,
        lastPage
    };
}

export { useItemsApi }