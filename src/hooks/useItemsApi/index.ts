import { useState } from "react";
import { ImgById, Item, ItemById } from "../../types";
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
    };
    const getItemById = async (id: number | string): Promise<ItemById> => {
        const response = await apiMovie.get(`/movie/${id}`)
        return response.data
    };
    const getImagesById = async (id: number | string) : Promise<ImgById[]>  => {
        const response = await apiMovie.get(`/movie/${id}/images`)
        return response.data.backdrops
    };
    return { getItemsFromApi, upDateItemsApi, getItemById, getImagesById, isLoading, setIsLoading, itemsArrApi };
}

export { useItemsApi }