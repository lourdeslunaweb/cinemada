import { useState } from "react";
import { mapToArray } from "../../helpers";
import { Item } from "../../types";
import { apiFirebase } from "../../utils";

const useItemsDB = () =>{
        // *** States ***
        const [itemsArrDB, setItemsArrDB] = useState<Item[]>()
        // *** Functions ***
        const getItemsFromDB = async (): Promise<Item[]> => {
            const response = await apiFirebase.get("/items.json");
            return mapToArray(response.data)
        };

        const upDateItemsDB = async () =>{
            const response = await getItemsFromDB()
            setItemsArrDB(response)
        }

        const addItemToDB = async (item: Item) => {
            await apiFirebase.post("/items.json", item);
            upDateItemsDB()
        };

        const deleteItemFromDB = async (id : number) => {
            const itemToDelete = itemsArrDB?.find(item => item.id === id)
            await apiFirebase.delete(`/items/${itemToDelete?.idDB}.json`)
            upDateItemsDB()
        }
        return { getItemsFromDB , addItemToDB, upDateItemsDB, deleteItemFromDB, itemsArrDB};
}

export {useItemsDB}