import { useContext } from "react";
import { FileDataContext } from "../UseFileContext";

export const ConvertedJsonDataByYear = () => {

    const { jsonData } = useContext(FileDataContext)

    const totalSales = jsonData.reduce((total, obj) => total + obj.QUANTIDADE_VENDIDA, 0);

    return { totalSales }
}