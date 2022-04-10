import { useState } from "react";
import { mapToArray } from "../../helpers";
import { Item } from "../../types";
import { apiFirebase } from "../../utils";

const useItemsDB = () => {
    // *** States ***
    const [itemsArrDB, setItemsArrDB] = useState<Item[]>()
    // *** Functions ***
    const getItemsFromDB = async (): Promise<Item[]> => {
        const response = await apiFirebase.get("/items.json");
        return mapToArray(response.data)
    };

    const upDateItemsDB = async () => {
        const response = await getItemsFromDB()
        console.log(response)
        setItemsArrDB(response)
    }

    const addItemToDB = async (item: Item) => {
        await apiFirebase.post("/items.json", item);
        upDateItemsDB()
    };

    const deleteItemFromDB = async (id: number) => {
        const itemToDelete = itemsArrDB?.find(item => item.id === id)
        await apiFirebase.delete(`/items/${itemToDelete?.idDB}.json`)
        upDateItemsDB()
    }

    const checkItemDB = (id: number) => {
        return true
    }

    const uncheckItemDB = (id: number) => {
        return true
    }

    return {
        getItemsFromDB,
        addItemToDB,
        upDateItemsDB,
        deleteItemFromDB,
        checkItemDB,
        uncheckItemDB,
        itemsArrDB,
    };
}

export { useItemsDB }